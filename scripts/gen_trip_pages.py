#!/usr/bin/env python3
"""Generate the per-city entry pages under trips/<country>/<id>.html from app.js DESTINATIONS.
Moves any legacy root <id>_trip.html into place (git mv, so history follows), rewrites every page from one template,
deletes pages whose city no longer exists. usage: python3 scripts/gen_trip_pages.py [--dry-run]"""
import os, re, subprocess, sys
os.chdir(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..'))
DRY = '--dry-run' in sys.argv
TEMPLATE = """<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Redirecting to {city} Trip</title>
    <script>
        const params = new URLSearchParams(window.location.search);
        params.set('destination', '{id}');
        window.location.replace(`../../index.html?${{params.toString()}}${{window.location.hash}}`);
    </script>
</head>

<body>
    <p>Redirecting to <a href="../../index.html?destination={id}">{city} trip</a>...</p>
</body>

</html>
"""
def slug(text):
    return re.sub(r'-+', '-', re.sub(r'[^a-z0-9]+', '-', text.lower())).strip('-')
def git(*args):
    if DRY: print('  $ git', ' '.join(args)); return
    subprocess.run(['git', *args], check=True, capture_output=True)

src = open('app.js', encoding='utf-8').read(); body = src[src.index('const DESTINATIONS'):]
heads = [(m.start(), m.group(1)) for m in re.finditer(r"^\s{4}['\"]?([a-z0-9-]+)['\"]?:\s*\{\s*$", body, re.M)]
cities = []
for i, (pos, cid) in enumerate(heads):
    block = body[pos:heads[i + 1][0] if i + 1 < len(heads) else pos + 6000]
    country = re.search(r"\bcountry:\s*['\"]([^'\"]+)['\"]", block).group(1)
    city = re.search(r"\bcity:\s*['\"]([^'\"]+)['\"]", block).group(1)
    cities.append((cid, country, city))

targets = {}
moved = created = rewritten = 0
for cid, country, city in cities:
    target = f'trips/{slug(country)}/{cid}.html'; targets[target] = cid
    legacy = f'{cid}_trip.html'
    os.makedirs(os.path.dirname(target), exist_ok=True) if not DRY else None
    content = TEMPLATE.format(id=cid, city=city)
    if os.path.exists(legacy):
        git('mv', '-f', legacy, target); moved += 1
    elif not os.path.exists(target):
        created += 1
    if not DRY:
        if not os.path.exists(target) or open(target, encoding='utf-8').read() != content:
            open(target, 'w', encoding='utf-8').write(content); rewritten += 1
            git('add', target)

# root pages whose id no longer exists (renamed ids such as hongkong → hong-kong are handled by 404.html aliases)
stale_root = sorted(f for f in os.listdir('.') if f.endswith('_trip.html'))
for f in stale_root:
    git('rm', '-q', '--', f)
# pages under trips/ for cities that were removed
stale_tree = sorted(os.path.join(r, f) for r, _, fs in os.walk('trips') for f in fs if f.endswith('.html') and os.path.join(r, f) not in targets) if os.path.isdir('trips') else []
for f in stale_tree:
    git('rm', '-q', '--', f)
folders = len({os.path.dirname(t) for t in targets})
print(f"도시 {len(cities)}곳 → trips/ 아래 {folders}개 나라 폴더 · 옮김 {moved} · 새로 만듦 {created} · 내용 갱신 {rewritten} · 루트 잔여 삭제 {len(stale_root)} {stale_root if stale_root else ''} · 트리 잔여 삭제 {len(stale_tree)}{' (dry-run)' if DRY else ''}")
