#!/usr/bin/env python3
"""Auto-pick the best landscape + portrait candidate per city from /tmp/hs_<slug>.json (made by hero_search.py --no-sheet),
save them as assets/heroes/<slug>.jpg and <slug>-portrait.jpg with credits, and write a review sheet of all picks.
usage: python3 scripts/hero_autopick.py [slug ...]        (default: every city in scripts/hero_queries.json that has a json)
       python3 scripts/hero_autopick.py --sheet-only      (just rebuild /tmp/hero_review.png from current assets)"""
import sys, os, json, subprocess, base64, time, importlib.util
HERE=os.path.dirname(os.path.abspath(__file__)); ROOT=os.path.dirname(HERE)
spec=importlib.util.spec_from_file_location("hs", os.path.join(HERE,"hero_search.py")); hs=importlib.util.module_from_spec(spec); spec.loader.exec_module(hs)
Q=json.load(open(os.path.join(HERE,"hero_queries.json")))
args=[a for a in sys.argv[1:] if not a.startswith("--")]
ids=args or list(Q.keys())
state_path="/tmp/hero_autopick_state.json"
state=json.load(open(state_path)) if os.path.exists(state_path) else {}
if "--sheet-only" not in sys.argv:
    for cid in ids:
        jp=f"/tmp/hs_{cid}.json"
        if not os.path.exists(jp): continue
        if state.get(cid,{}).get("done"): continue
        cands=json.load(open(jp))
        land=[r for r in cands if r["orient"]=="landscape"]; port=[r for r in cands if r["orient"]=="portrait"]
        rec={"land":None,"port":None}
        try:
            if land: hs.pick(cid, land[0]["idx"], False); rec["land"]=land[0]["idx"]
            if port: hs.pick(cid, port[0]["idx"], True); rec["port"]=port[0]["idx"]
            rec["done"]=True
        except Exception as e: print(f"{cid}: 저장 실패 {str(e)[:80]}"); rec["done"]=False
        state[cid]=rec; json.dump(state,open(state_path,"w"))
        time.sleep(0.5)
# 검토 시트: 도시마다 가로/세로 나란히
cells=[]
for cid in Q:
    L=os.path.join(ROOT,"assets","heroes",f"{cid}.jpg"); P=os.path.join(ROOT,"assets","heroes",f"{cid}-portrait.jpg")
    if not os.path.exists(L): continue
    def b64(p):
        small=f"/tmp/heroes_small/{os.path.basename(p)}"; os.makedirs("/tmp/heroes_small",exist_ok=True)
        subprocess.run(["sips","-Z","420",p,"--out",small],capture_output=True); return base64.b64encode(open(small,"rb").read()).decode()
    li=f'<img class="l" src="data:image/jpeg;base64,{b64(L)}">'
    pi=f'<img class="p" src="data:image/jpeg;base64,{b64(P)}">' if os.path.exists(P) else '<div class="p ph"></div>'
    st=state.get(cid,{})
    cells.append(f'<figure>{li}{pi}<figcaption>{cid} · L#{st.get("land","-")} P#{st.get("port","-")}</figcaption></figure>')
html=('<style>body{margin:0;background:#111;color:#eee;font:11px monospace}.g{display:grid;grid-template-columns:repeat(5,1fr);gap:6px;padding:6px}'
      'figure{margin:0;display:grid;grid-template-columns:2fr 1fr;gap:2px}img{width:100%;object-fit:cover;display:block}.l{aspect-ratio:3/2}.p{aspect-ratio:9/16;height:100%}'
      '.ph{background:#333}figcaption{grid-column:1/-1;padding:2px}</style><div class="g">'+''.join(cells)+'</div>')
open("/tmp/hero_review.html","w").write(html)
rows=(len(cells)+4)//5
subprocess.run(["/Applications/Google Chrome.app/Contents/MacOS/Google Chrome","--headless=new","--disable-gpu",f"--window-size=2000,{max(400,rows*250+20)}","--virtual-time-budget=5000","--screenshot=/tmp/hero_review.png","file:///tmp/hero_review.html"],capture_output=True)
print(f"검토 시트 {len(cells)}개 도시 → /tmp/hero_review.png")
