#!/usr/bin/env python3
"""List hero photo candidates from Commons categories as a contact sheet + JSON, so a human can pick.
usage: python3 scripts/hero_candidates.py <slug> "Category:A" "Category:B" ...  → /tmp/cands_<slug>.{json,html,png}"""
import sys, json, os, subprocess, importlib.util
spec = importlib.util.spec_from_file_location("fh", os.path.join(os.path.dirname(__file__), "fetch_hero.py")); fh = importlib.util.module_from_spec(spec); spec.loader.exec_module(fh)
slug, cats = sys.argv[1], sys.argv[2:]
seen, out = set(), []
for cat in cats:
    try: rows = fh.from_category(cat, limit=100)
    except Exception as e: print("skip", cat, e); continue
    for r in rows[:6]:
        if r["title"] in seen: continue
        seen.add(r["title"]); r["cat"] = cat; out.append(r)
import urllib.request
os.makedirs(f"/tmp/cands_{slug}", exist_ok=True)
for i, r in enumerate(out):
    r["idx"] = i
    local = f"/tmp/cands_{slug}/{i}.jpg"
    try:
        turl = r["url"].split("?")[0].replace("/1920px-", "/1280px-")   # thumb host serves only 1280/1920
        req = urllib.request.Request(turl, headers={"User-Agent": fh.UA})
        data = urllib.request.urlopen(req, timeout=60).read()
        if len(data) < 2000: raise RuntimeError("empty thumb")
        open(local, "wb").write(data)
        subprocess.run(["sips", "-Z", "480", local], capture_output=True)   # shrink for the sheet
        import base64
        r["thumb"] = "data:image/jpeg;base64," + base64.b64encode(open(local, "rb").read()).decode()
    except Exception as e:
        r["thumb"] = ""; print("thumb fail", i, e)
json.dump(out, open(f"/tmp/cands_{slug}.json", "w"), ensure_ascii=False, indent=1)
cells = "".join(f'<figure><img src="{r["thumb"]}"><figcaption>#{r["idx"]} {r["lic"]} · {r["w"]}x{r["h"]}<br>{r["title"][5:60]}</figcaption></figure>' for r in out)
open(f"/tmp/cands_{slug}.html", "w").write(f'<style>body{{margin:0;background:#111;color:#eee;font:11px monospace}}.g{{display:grid;grid-template-columns:repeat(4,1fr);gap:6px;padding:6px}}figure{{margin:0}}img{{width:100%;aspect-ratio:3/2;object-fit:cover;display:block}}figcaption{{padding:3px 2px;line-height:1.3}}</style><div class="g">{cells}</div>')
subprocess.run(["/Applications/Google Chrome.app/Contents/MacOS/Google Chrome", "--headless=new", "--disable-gpu", "--window-size=1600,1400", "--virtual-time-budget=4000", "--allow-file-access-from-files", f"--screenshot=/tmp/cands_{slug}.png", f"file:///tmp/cands_{slug}.html"], capture_output=True)
print(f"{slug}: 후보 {len(out)}장 → /tmp/cands_{slug}.png")
