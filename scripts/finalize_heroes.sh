#!/bin/sh
# Post-processing after hero photo picks: wire portraits into app.js, check credits, normalize sizes,
# build review sheets, and run the browser verification. usage: sh scripts/finalize_heroes.sh [--no-verify]
cd "$(dirname "$0")/.." || exit 1
echo "== 1) 세로 사진 연결"; python3 scripts/apply_hero_portraits.py
echo "== 2) 출처·파일 점검"; python3 - <<'PY'
import json, os, re
Q=json.load(open('scripts/hero_queries.json')); cred=open('docs/PHOTO_CREDITS.md',encoding='utf-8').read()
miss_land=[c for c in Q if not os.path.exists(f'assets/heroes/{c}.jpg')]
no_port=[c for c in Q if not os.path.exists(f'assets/heroes/{c}-portrait.jpg')]
miss_cred=[c for c in Q if f'| `{c}` |' not in cred]
miss_pcred=[c for c in Q if os.path.exists(f'assets/heroes/{c}-portrait.jpg') and f'| `{c}-portrait` |' not in cred]
small=[f for f in os.listdir('assets/heroes') if f.endswith('.jpg') and os.path.getsize(f'assets/heroes/{f}')<150_000]
print('가로 없음:', miss_land or '없음'); print('세로 없음:', len(no_port), no_port); print('가로 출처 누락:', miss_cred or '없음'); print('세로 출처 누락:', miss_pcred or '없음'); print('150KB 미만(의심):', small or '없음')
PY
echo "== 3) 크기 정리 (가로 최대 2200px · 세로 최대 2400px · 품질 82)"; python3 - <<'PY'
import os, subprocess
d='assets/heroes'; n=0; before=sum(os.path.getsize(os.path.join(d,f)) for f in os.listdir(d) if f.endswith('.jpg'))
for f in sorted(os.listdir(d)):
    if not f.endswith('.jpg'): continue
    p=os.path.join(d,f); o=subprocess.run(['sips','-g','pixelWidth','-g','pixelHeight',p],capture_output=True,text=True).stdout
    w=int(o.split('pixelWidth:')[1].split()[0]); h=int(o.split('pixelHeight:')[1].split()[0])
    limit = 2400 if f.endswith('-portrait.jpg') else 2200
    if max(w,h)>limit or os.path.getsize(p)>1_600_000:
        subprocess.run(['sips','-s','format','jpeg','-s','formatOptions','82','-Z',str(limit),p,'--out',p],capture_output=True); n+=1
after=sum(os.path.getsize(os.path.join(d,f)) for f in os.listdir(d) if f.endswith('.jpg'))
print(f'재인코딩 {n}장 · {before/1e6:.0f}MB → {after/1e6:.0f}MB')
PY
echo "== 4) 검토 시트"; python3 - <<'PY'
import json, os, subprocess, base64
Q=json.load(open('scripts/hero_queries.json')); ids=list(Q.keys()); os.makedirs('/tmp/heroes_small',exist_ok=True)
def b64(p):
    small=f"/tmp/heroes_small/{os.path.basename(p)}"
    subprocess.run(["sips","-Z","420",p,"--out",small],capture_output=True); return base64.b64encode(open(small,"rb").read()).decode()
for n,c0 in enumerate(range(0,len(ids),20),1):
    cells=[]
    for cid in ids[c0:c0+20]:
        L=f"assets/heroes/{cid}.jpg"; P=f"assets/heroes/{cid}-portrait.jpg"
        li=f'<img class="l" src="data:image/jpeg;base64,{b64(L)}">' if os.path.exists(L) else '<div class="l ph"></div>'
        pi=f'<img class="p" src="data:image/jpeg;base64,{b64(P)}">' if os.path.exists(P) else '<div class="p ph"></div>'
        cells.append(f'<figure>{li}{pi}<figcaption><b>{cid}</b> {Q[cid]["city"]}</figcaption></figure>')
    html=('<style>body{margin:0;background:#111;color:#eee;font:12px monospace}.g{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;padding:8px}'
          'figure{margin:0;display:grid;grid-template-columns:3fr 1fr;gap:3px}img{width:100%;object-fit:cover;display:block}.l{aspect-ratio:3/2}.p{aspect-ratio:9/16;height:100%}'
          '.ph{background:#333}figcaption{grid-column:1/-1;padding:3px}b{color:#fd6}</style><div class="g">'+''.join(cells)+'</div>')
    open(f"/tmp/final_{n}.html","w").write(html)
    subprocess.run(["/Applications/Google Chrome.app/Contents/MacOS/Google Chrome","--headless=new","--disable-gpu","--window-size=1800,1460","--virtual-time-budget=4000",f"--screenshot=/tmp/final_{n}.png",f"file:///tmp/final_{n}.html"],capture_output=True)
print('검토 시트 /tmp/final_1..8.png')
PY
[ "$1" = "--no-verify" ] && exit 0
echo "== 5) 문법·브라우저 검증"; node --check app.js && node scripts/verify_cities.mjs --port 4270 2>&1 | tail -3
