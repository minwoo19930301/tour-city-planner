#!/usr/bin/env python3
"""Quality-aware hero photo search on Wikimedia Commons.
Ranks by Commons assessment (featured > quality > valued > potd), resolution and framing, split by orientation.
usage:
  python3 scripts/hero_search.py <slug> "query 1" "query 2" ... [--must Tok1,Tok2] [--min 2400]
    → /tmp/hs_<slug>.json + /tmp/hs_<slug>.png (top landscape row + top portrait row)
  python3 scripts/hero_search.py --pick <slug> <idx> [--portrait]   (save candidate idx from the json)
"""
import sys, os, json, re, time, base64, subprocess, urllib.request, importlib.util
HERE = os.path.dirname(os.path.abspath(__file__)); ROOT = os.path.dirname(HERE)
spec = importlib.util.spec_from_file_location("fh", os.path.join(HERE, "fetch_hero.py")); fh = importlib.util.module_from_spec(spec); spec.loader.exec_module(fh)

ASSESS_SCORE = {"featured": 3.0, "quality": 2.0, "valued": 1.0, "potd": 0.8}
BAD_TITLE = re.compile(r"interior|inside|indoor|museum|menu|food|plate|dish|ticket|map\b|plan\b|diagram|logo|sign\b|poster|portrait of|selfie|person|people|crowd|train\b|bus\b|airport|station|statue detail|closeup|close-up|detail", re.I)

def search(query, must, minw):
    d = fh.api(dict(action="query", generator="search", gsrsearch=f'{query} filetype:bitmap', gsrlimit=50, gsrnamespace=6,
                    prop="imageinfo", iiprop="url|extmetadata|size", iiurlwidth=1920, format="json"))
    out = []
    for p in (d.get("query", {}).get("pages") or {}).values():
        ii = p["imageinfo"][0]; em = ii.get("extmetadata", {})
        lic = fh.strip(em.get("LicenseShortName", {}).get("value", ""))
        w, h = ii.get("width", 0), ii.get("height", 0); title = p["title"]
        if not fh.OK_LIC.match(lic) or w < 1200 or h < 1200: continue
        if re.search(r'\.(svg|gif|tif+)$', title, re.I): continue
        low = title.lower()
        if must and not any(t.lower() in low for t in must): continue
        ar = w / h; orient = "landscape" if ar >= 1.15 else ("portrait" if ar <= 0.9 else "square")
        if orient == "landscape" and w < minw: continue
        if orient != "landscape" and h < minw: continue
        assess = fh.strip(em.get("Assessments", {}).get("value", "")).lower()
        score = sum(v for k, v in ASSESS_SCORE.items() if k in assess)
        score += min(max(w, h), 6000) / 6000
        if orient == "landscape": score += 0.6 - min(abs(ar - 1.55), 0.6)
        elif orient == "portrait": score += 0.6 - min(abs(ar - 0.7), 0.6)
        if BAD_TITLE.search(title): score -= 1.5
        out.append(dict(title=title, url=(ii.get("thumburl") or ii.get("url")).split("?")[0], page=ii.get("descriptionurl", ""), lic=lic,
                        author=fh.strip(em.get("Artist", {}).get("value", "")) or "Unknown", w=w, h=h, ar=round(ar, 2),
                        orient=orient, assess=assess or "-", score=round(score, 2), q=query))
    return out

def thumb(url, w, h, local):
    # thumb host only serves 1280/1920 widths; for tall images 1280 wide is still fine
    turl = url.replace("/1920px-", "/1280px-")
    data = urllib.request.urlopen(urllib.request.Request(turl, headers={"User-Agent": fh.UA}), timeout=60).read()
    open(local, "wb").write(data); subprocess.run(["sips", "-Z", "560", local], capture_output=True)
    return "data:image/jpeg;base64," + base64.b64encode(open(local, "rb").read()).decode()

def build(slug, queries, must, minw, per=12, sheet=True):
    seen, cands = set(), []
    for q in queries:
        for attempt in range(3):
            try: rows = search(q, must, minw); break
            except Exception as e: print("retry", q, str(e)[:60]); time.sleep(15 * (attempt + 1)); rows = []
        for r in rows:
            if r["title"] in seen: continue
            seen.add(r["title"]); cands.append(r)
        time.sleep(1.0)
    cands.sort(key=lambda r: -r["score"])
    for i, r in enumerate(cands): r["idx"] = i
    json.dump(cands, open(f"/tmp/hs_{slug}.json", "w"), ensure_ascii=False, indent=1)
    if not sheet:
        print(f"{slug}: 후보 {len(cands)}장 (가로 {len([r for r in cands if r['orient']=='landscape'])} · 세로/정방 {len([r for r in cands if r['orient']!='landscape'])}) → json만")
        return cands
    land = [r for r in cands if r["orient"] == "landscape"][:per]
    port = [r for r in cands if r["orient"] != "landscape"][:per]
    os.makedirs(f"/tmp/hs_{slug}", exist_ok=True)
    def cell(r):
        try: src = thumb(r["url"], r["w"], r["h"], f"/tmp/hs_{slug}/{r['idx']}.jpg")
        except Exception as e: return f'<figure><div class="ph"></div><figcaption>#{r["idx"]} 실패</figcaption></figure>'
        time.sleep(0.25)
        return f'<figure><img src="{src}"><figcaption>#{r["idx"]} <b>{r["assess"]}</b> · {r["w"]}x{r["h"]} · {r["lic"]}<br>{r["title"][5:58]}</figcaption></figure>'
    html = ('<style>body{margin:0;background:#111;color:#eee;font:11px monospace}h2{margin:8px 6px 2px;font:bold 14px monospace;color:#9cf}'
            '.g{display:grid;grid-template-columns:repeat(4,1fr);gap:6px;padding:6px}figure{margin:0}.g.land img{aspect-ratio:3/2}.g.port img{aspect-ratio:9/16}'
            'img{width:100%;object-fit:cover;display:block}.ph{aspect-ratio:3/2;background:#333}figcaption{padding:3px 2px;line-height:1.3}b{color:#fd6}</style>'
            f'<h2>{slug} · 가로 (PC 히어로)</h2><div class="g land">' + ''.join(cell(r) for r in land) + '</div>'
            f'<h2>{slug} · 세로 (모바일 히어로, 9:16 크롭 미리보기)</h2><div class="g port">' + ''.join(cell(r) for r in port) + '</div>')
    open(f"/tmp/hs_{slug}.html", "w").write(html)
    rows_l = (len(land) + 3) // 4; rows_p = (len(port) + 3) // 4
    height = 60 + rows_l * 330 + 60 + rows_p * 780
    subprocess.run(["/Applications/Google Chrome.app/Contents/MacOS/Google Chrome", "--headless=new", "--disable-gpu", f"--window-size=1600,{max(600, height)}",
                    "--virtual-time-budget=4000", f"--screenshot=/tmp/hs_{slug}.png", f"file:///tmp/hs_{slug}.html"], capture_output=True)
    print(f"{slug}: 후보 {len(cands)}장 (가로 {len([r for r in cands if r['orient']=='landscape'])} · 세로/정방 {len([r for r in cands if r['orient']!='landscape'])}) → /tmp/hs_{slug}.png")
    return cands

def pick(slug, idx, portrait):
    r = json.load(open(f"/tmp/hs_{slug}.json"))[idx]
    name = f"{slug}-portrait" if portrait else slug
    dest = os.path.join(ROOT, "assets", "heroes", f"{name}.jpg")
    data = urllib.request.urlopen(urllib.request.Request(r["url"], headers={"User-Agent": fh.UA}), timeout=90).read()
    open(dest, "wb").write(data)
    # 가로는 2400px, 세로는 높이 2400px 기준으로 (고화질 유지, 품질 85)
    subprocess.run(["sips", "-s", "format", "jpeg", "-s", "formatOptions", "85", "-Z", "2400", dest, "--out", dest], capture_output=True)
    fh.credit(name, r)
    print(f"ok {name} ← #{idx} {r['title'][5:70]} | {r['assess']} | {r['w']}x{r['h']} | {r['lic']} | {r['author']}")

if __name__ == "__main__":
    a = sys.argv[1:]
    if a and a[0] == "--pick":
        pick(a[1], int(a[2]), "--portrait" in a); sys.exit(0)
    slug = a[0]; must = []; minw = 2400; queries = []; sheet = True
    i = 1
    while i < len(a):
        if a[i] == "--must": must = a[i + 1].split(","); i += 2
        elif a[i] == "--min": minw = int(a[i + 1]); i += 2
        elif a[i] == "--no-sheet": sheet = False; i += 1
        elif a[i] == "--sheet-only":
            # 이미 있는 json으로 시트만 다시 그린다
            cands = json.load(open(f"/tmp/hs_{slug}.json")); sheet = True; i += 1
            import types
            build.__globals__["search"] = lambda *x, **k: []
            queries = []
        else: queries.append(a[i]); i += 1
    if not queries and sheet and os.path.exists(f"/tmp/hs_{slug}.json"):
        cands = json.load(open(f"/tmp/hs_{slug}.json"))
        # 시트만 렌더
        land = [r for r in cands if r["orient"] == "landscape"][:12]; port = [r for r in cands if r["orient"] != "landscape"][:12]
        os.makedirs(f"/tmp/hs_{slug}", exist_ok=True)
        def cell(r):
            try: src = thumb(r["url"], r["w"], r["h"], f"/tmp/hs_{slug}/{r['idx']}.jpg")
            except Exception: return f'<figure><div class="ph"></div><figcaption>#{r["idx"]} 실패</figcaption></figure>'
            return f'<figure><img src="{src}"><figcaption>#{r["idx"]} <b>{r["assess"]}</b> · {r["w"]}x{r["h"]} · {r["lic"]}<br>{r["title"][5:58]}</figcaption></figure>'
        html = ('<style>body{margin:0;background:#111;color:#eee;font:11px monospace}h2{margin:8px 6px 2px;font:bold 14px monospace;color:#9cf}'
                '.g{display:grid;grid-template-columns:repeat(4,1fr);gap:6px;padding:6px}figure{margin:0}.g.land img{aspect-ratio:3/2}.g.port img{aspect-ratio:9/16}'
                'img{width:100%;object-fit:cover;display:block}.ph{aspect-ratio:3/2;background:#333}figcaption{padding:3px 2px;line-height:1.3}b{color:#fd6}</style>'
                f'<h2>{slug} · 가로</h2><div class="g land">' + ''.join(cell(r) for r in land) + '</div>'
                f'<h2>{slug} · 세로 (9:16 크롭)</h2><div class="g port">' + ''.join(cell(r) for r in port) + '</div>')
        open(f"/tmp/hs_{slug}.html", "w").write(html)
        height = 60 + ((len(land)+3)//4) * 330 + 60 + ((len(port)+3)//4) * 780
        subprocess.run(["/Applications/Google Chrome.app/Contents/MacOS/Google Chrome", "--headless=new", "--disable-gpu", f"--window-size=1600,{max(600,height)}",
                        "--virtual-time-budget=4000", f"--screenshot=/tmp/hs_{slug}.png", f"file:///tmp/hs_{slug}.html"], capture_output=True)
        print(f"{slug}: 시트 재생성 → /tmp/hs_{slug}.png"); sys.exit(0)
    build(slug, queries, must, minw, sheet=sheet)
