#!/usr/bin/env python3
"""Make accent colors unique across app.js and the given fragment files.
Duplicates (within fragments, or vs app.js) get their hue rotated until distinct; accentRgb is kept in sync.
usage: python3 scripts/dedupe_accents.py scripts/new_cities_*.js"""
import re, sys, os, colorsys
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
app = open(os.path.join(ROOT, 'app.js'), encoding='utf-8').read()

def hex2rgb(h): return tuple(int(h[i:i+2], 16) for i in (1, 3, 5))
def rgb2hex(r, g, b): return '#%02X%02X%02X' % (r, g, b)
def dist(a, b): return sum((x - y) ** 2 for x, y in zip(hex2rgb(a), hex2rgb(b))) ** 0.5

# ids already merged into app.js will be replaced by fragments, so exclude their app.js accents from the "taken" set
frag_ids = set()
for f in sys.argv[1:]:
    frag_ids |= set(re.findall(r"^    '?([a-z0-9-]+)'?: \{", open(f, encoding='utf-8').read(), re.M))
taken = []
for m in re.finditer(r"^    (?:'([^']+)'|\"([^\"]+)\"|([a-z0-9-]+)): \{[\s\S]*?accent:\s*'(#[0-9A-Fa-f]{6})'", app, re.M):
    cid = m.group(1) or m.group(2) or m.group(3)
    if cid not in frag_ids: taken.append(m.group(4).upper())

def nudge(hexv, taken, min_d=28):
    r, g, b = [c / 255 for c in hex2rgb(hexv)]
    h, l, s = colorsys.rgb_to_hls(r, g, b)
    for step in range(1, 40):
        for sign in (1, -1):
            hh = (h + sign * step * 0.022) % 1.0
            rr, gg, bb = colorsys.hls_to_rgb(hh, l, s)
            cand = rgb2hex(round(rr * 255), round(gg * 255), round(bb * 255))
            if all(dist(cand, t) >= min_d for t in taken): return cand
    return hexv

changed = 0
for f in sys.argv[1:]:
    s = open(f, encoding='utf-8').read()
    def fix(m):
        global changed
        head, hexv = m.group(1), m.group(2).upper()
        if all(dist(hexv, t) >= 28 for t in taken):
            taken.append(hexv); return m.group(0)
        new = nudge(hexv, taken); taken.append(new); changed += 1
        rgb = ', '.join(str(c) for c in hex2rgb(new))
        body = m.group(0).replace(m.group(2), new, 1)
        body = re.sub(r"accentRgb:\s*'[^']*'", f"accentRgb: '{rgb}'", body, count=1)
        print(f"  {re.search(r"^    '?([a-z0-9-]+)'?: ", m.group(0), re.M).group(1)}: {hexv} → {new}")
        return body
    s2 = re.sub(r"(^    '?[a-z0-9-]+'?: \{[\s\S]*?)accent:\s*'(#[0-9A-Fa-f]{6})'([\s\S]*?accentRgb:\s*'[^']*')", lambda m: fix(m), s, flags=re.M)
    open(f, 'w', encoding='utf-8').write(s2)
print(f"색상 조정 {changed}건")
