#!/usr/bin/env python3
"""Injects heroImagePortrait (and heroPositionPortrait if missing) into app.js DESTINATIONS entries
for every assets/heroes/<id>-portrait.jpg that exists. Idempotent."""
import os, re
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
app = os.path.join(ROOT, "app.js"); s = open(app, encoding="utf-8").read()
slugs = sorted(f[:-13] for f in os.listdir(os.path.join(ROOT, "assets", "heroes")) if f.endswith("-portrait.jpg"))
added = updated = 0
for slug in slugs:
    m = re.search(rf"^    (?:'{re.escape(slug)}'|\"{re.escape(slug)}\"|{re.escape(slug)}): \{{", s, re.M)
    if not m: print("항목 없음:", slug); continue
    i = m.end(); depth = 1
    while depth: 
        if s[i] == "{": depth += 1
        elif s[i] == "}": depth -= 1
        i += 1
    block = s[m.start():i]
    line = f"        heroImagePortrait: 'assets/heroes/{slug}-portrait.jpg',"
    if "heroImagePortrait" in block:
        nb = re.sub(r"^\s*heroImagePortrait:.*$", line, block, flags=re.M); updated += 1
    else:
        hm = re.search(r"^(\s*)heroImage: .*$", block, re.M)
        nb = block[:hm.end()] + "\n" + line + block[hm.end():]; added += 1
    s = s[:m.start()] + nb + s[i:]
open(app, "w", encoding="utf-8").write(s)
print(f"세로 히어로 연결: 추가 {added} · 갱신 {updated} (파일 {len(slugs)}개)")
