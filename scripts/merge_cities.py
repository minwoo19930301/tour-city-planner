#!/usr/bin/env python3
"""Merge city fragment files (scripts/new_cities_*.js) into the DESTINATIONS object in app.js.
Each new city is inserted right after an anchor city so related places stay together.
usage: python3 scripts/merge_cities.py [--check]"""
import json, os, re, subprocess, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
APP = os.path.join(ROOT, "app.js")
# new city -> insert right after this existing entry
ANCHOR = {"seoul": "london", "busan": "seoul", "jeju": "busan",
          "osaka": "tokyo", "kyoto": "osaka", "fukuoka": "kyoto", "sapporo": "fukuoka",
          "nagoya": "sapporo", "okinawa": "nagoya",
          "hangzhou": "shanghai", "suzhou": "hangzhou", "xian": "suzhou",
          "chengdu": "xian", "guangzhou": "chengdu", "qingdao": "guangzhou"}
ORDER = ["seoul", "busan", "jeju",
         "osaka", "kyoto", "fukuoka", "sapporo", "nagoya", "okinawa",
         "hangzhou", "suzhou", "xian", "chengdu", "guangzhou", "qingdao"]

def js_block(obj, key):
    """Render one destination entry as JS source with 4-space base indent."""
    body = json.dumps(obj, ensure_ascii=False, indent=4)
    body = "\n".join("    " + line for line in body.splitlines()).lstrip()
    body = re.sub(r'^(\s*)"([A-Za-z_][A-Za-z0-9_]*)":', r"\1\2:", body, flags=re.M)
    return f"    {key}: {body},\n"

def entry_span(src, key):
    """Byte span of an existing `    key: { ... },` block inside DESTINATIONS."""
    m = re.search(rf"^    {re.escape(key)}: \{{", src, re.M)
    if not m: return None
    i, depth = m.end() - 1, 0
    while i < len(src):
        if src[i] == "{": depth += 1
        elif src[i] == "}":
            depth -= 1
            if depth == 0:
                j = i + 1
                if src[j:j+1] == ",": j += 1
                if src[j:j+1] == "\n": j += 1
                return m.start(), j
        i += 1
    return None

def main():
    check = "--check" in sys.argv
    cities = {}
    for frag in sorted(f for f in os.listdir(os.path.join(ROOT, "scripts")) if re.match(r"new_cities_.*\.js$", f)):
        out = subprocess.run(["node", "-e", f"process.stdout.write(JSON.stringify(require('{os.path.join(ROOT,'scripts',frag)}')))"],
                             capture_output=True, text=True, check=True)
        cities.update(json.loads(out.stdout))
    src = open(APP, encoding="utf-8").read()
    added, replaced, skipped = [], [], []
    for key in ORDER:
        if key not in cities: skipped.append(key); continue
        block = js_block(cities[key], key)
        span = entry_span(src, key)
        if span:                                  # already there: replace in place
            src = src[:span[0]] + block + src[span[1]:]
            replaced.append(key); continue
        anchor = ANCHOR.get(key)
        aspan = entry_span(src, anchor) if anchor else None
        if not aspan:
            skipped.append(f"{key}(anchor {anchor} 없음)"); continue
        src = src[:aspan[1]] + block + src[aspan[1]:]
        added.append(key)
    if not check:
        open(APP, "w", encoding="utf-8").write(src)
    print("추가:", added or "없음"); print("교체:", replaced or "없음"); print("건너뜀:", skipped or "없음")
    r = subprocess.run(["node", "--check", APP], capture_output=True, text=True)
    print("app.js 문법:", "정상" if r.returncode == 0 else "오류\n" + r.stderr[:400])
    return r.returncode

if __name__ == "__main__":
    sys.exit(main())
