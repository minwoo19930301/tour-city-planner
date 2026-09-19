#!/usr/bin/env python3
"""Fetch a hero photo for a city from Wikimedia Commons and record its credit.
usage: python3 scripts/fetch_hero.py <slug> "<search terms>" [--dry]
Only accepts freely licensed images (PD/CC0/CC BY/CC BY-SA) and landscape >=1600px wide."""
import json, re, sys, urllib.parse, urllib.request, os, html, subprocess

UA = "tour-city-planner/1.0 (https://github.com/minwoo19930301/tour-city-planner; contact@ai-ing.org)"
OK_LIC = re.compile(r'^(public domain|cc0|cc by [234]\.[05]|cc by-sa [234]\.[05]|cc by 1\.0|cc by-sa 1\.0)$', re.I)
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

def api(params):
    url = "https://commons.wikimedia.org/w/api.php?" + urllib.parse.urlencode(params)
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    return json.load(urllib.request.urlopen(req, timeout=30))

def strip(s):
    return html.unescape(re.sub(r'<[^>]+>', ' ', s or '')).strip()[:120]

def search(query, must, limit=30):
    """must = tokens that have to appear in the file title (city name and aliases)."""
    d = api(dict(action="query", generator="search", gsrsearch=f'{query} filetype:bitmap',
                 gsrlimit=limit, gsrnamespace=6, prop="imageinfo",
                 iiprop="url|extmetadata|size", iiurlwidth=1920, format="json"))
    out = []
    for p in (d.get("query", {}).get("pages") or {}).values():
        ii = p["imageinfo"][0]; em = ii.get("extmetadata", {})
        lic = strip(em.get("LicenseShortName", {}).get("value", ""))
        w, h = ii.get("width", 0), ii.get("height", 0)
        title = p["title"]
        if not OK_LIC.match(lic): continue
        if w < 1600 or h == 0: continue
        ar = w / h
        if not (1.2 <= ar <= 2.3): continue                    # landscape, no panoramas
        if re.search(r'\.(svg|gif)$', title, re.I): continue
        low = title.lower()
        if must and not any(t.lower() in low for t in must): continue   # title must name the city
        # prefer 3:2-ish framing and decent size, not sheer pixel count
        score = -abs(ar - 1.5) * 10 + min(w, 4000) / 4000
        out.append(dict(title=title, url=ii.get("thumburl") or ii.get("url"),
                        page=ii.get("descriptionurl", ""), lic=lic,
                        author=strip(em.get("Artist", {}).get("value", "")) or "Unknown",
                        w=w, h=h, ar=round(ar, 2), score=score))
    return sorted(out, key=lambda x: -x["score"])

def save(slug, pick, dry=False):
    dest = os.path.join(ROOT, "assets", "heroes", f"{slug}.jpg")
    if dry: print("would save", dest); return dest
    req = urllib.request.Request(pick["url"], headers={"User-Agent": UA})
    data = urllib.request.urlopen(req, timeout=60).read()
    open(dest, "wb").write(data)
    subprocess.run(["sips", "-s", "format", "jpeg", "-s", "formatOptions", "82", "-Z", "1920", dest, "--out", dest],
                   capture_output=True)
    return dest

def credit(slug, pick):
    f = os.path.join(ROOT, "docs", "PHOTO_CREDITS.md")
    head = "# 사진 출처\n\n히어로 사진은 위키미디어 공용에서 가져왔습니다. 각 사진의 저작자와 라이선스는 아래와 같습니다.\n\n| 도시 | 사진 | 저작자 | 라이선스 |\n|---|---|---|---|\n"
    if not os.path.exists(f): open(f, "w").write(head)
    body = open(f).read()
    row = f"| `{slug}` | [{pick['title'].replace('File:','')}]({pick['page']}) | {pick['author']} | {pick['lic']} |\n"
    if f"| `{slug}` |" in body:
        body = re.sub(rf"\| `{re.escape(slug)}` \|.*\n", row, body)
    else:
        body = body.rstrip("\n") + "\n" + row
    open(f, "w").write(body)

def from_category(cat, limit=60):
    """Fallback: pull files straight out of a Commons category."""
    d = api(dict(action="query", generator="categorymembers", gcmtitle=cat, gcmtype="file",
                 gcmlimit=limit, prop="imageinfo", iiprop="url|extmetadata|size",
                 iiurlwidth=1920, format="json"))
    out = []
    for p in (d.get("query", {}).get("pages") or {}).values():
        ii = (p.get("imageinfo") or [None])[0]
        if not ii: continue
        em = ii.get("extmetadata", {})
        lic = strip(em.get("LicenseShortName", {}).get("value", ""))
        w, h = ii.get("width", 0), ii.get("height", 0)
        if not OK_LIC.match(lic) or w < 1600 or h == 0: continue
        ar = w / h
        if not (1.2 <= ar <= 2.3): continue
        if re.search(r'\.(svg|gif)$', p["title"], re.I): continue
        out.append(dict(title=p["title"], url=ii.get("thumburl") or ii.get("url"),
                        page=ii.get("descriptionurl", ""), lic=lic,
                        author=strip(em.get("Artist", {}).get("value", "")) or "Unknown",
                        w=w, h=h, ar=round(ar, 2), score=-abs(ar - 1.5) * 10 + min(w, 4000) / 4000))
    return sorted(out, key=lambda x: -x["score"])


if __name__ == "__main__":
    slug, query = sys.argv[1], sys.argv[2]
    dry = "--dry" in sys.argv
    must = [t for t in sys.argv[3:] if not t.startswith("--") and not t.startswith("Category:")] or [query.split()[0]]
    cands = search(query, must)
    if not cands:
        for cat in [t for t in sys.argv[3:] if t.startswith("Category:")]:
            cands = from_category(cat)
            if cands:
                print(f"   (분류 {cat} 에서 찾음)"); break
    if not cands:
        print(f"FAIL {slug}: no freely licensed landscape image for '{query}'"); sys.exit(1)
    pick = cands[0]
    p = save(slug, pick, dry)
    if not dry: credit(slug, pick)
    print(f"ok {slug} | {pick['w']}x{pick['h']} ar{pick['ar']} | {pick['lic']} | {pick['author']} | {pick['title'][:60]}")
    print(f"   -> {p}")
