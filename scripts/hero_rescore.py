#!/usr/bin/env python3
"""Re-score existing /tmp/hs_<slug>.json candidates with stricter heuristics (no new search),
then force-re-pick the given cities and rebuild review sheets for them.
usage: python3 scripts/hero_rescore.py <slug> [slug ...]   (or --all)"""
import sys, os, json, re, subprocess, base64, time, importlib.util
HERE=os.path.dirname(os.path.abspath(__file__)); ROOT=os.path.dirname(HERE)
spec=importlib.util.spec_from_file_location("hs", os.path.join(HERE,"hero_search.py")); hs=importlib.util.module_from_spec(spec); spec.loader.exec_module(hs)
Q=json.load(open(os.path.join(HERE,"hero_queries.json")))
ASSESS={"featured":3.0,"quality":2.0,"valued":1.0,"potd":0.8}
BAD=re.compile(r"certification|signpost|coast guard|uscgc|attend|ceremony|truck|magician|seller|vendor|kiosk|phone booth|booth|skeleton|bones|skull|pattern|abstract|wallpaper|tile|dots|button|switch|megapode|dove|crocodile|rhea|redstart|squirrel|wildlife|specimen|fossil|coin|stamp|medal|flag\\b|flags|umbrella|lantern|ornament|decoration|christmas|xmas|new year|parade|crowd|pilgrim|hajj|worship|prayer|interior|inside|indoor|ceiling|hall\b|room\b|museum|exhibit|menu|food|dish|ticket|\bmap\b|diagram|logo|sign\b|signs\b|plaque|poster|banner|portrait|selfie|person|people|crowd|man\b|woman|men\b|monk|guard|soldier|parade|statue|sculpture|bust\b|relief|carving|column|\bcar\b|cars\b|bus\b|train|tram|ferry|boat|ship|vessel|yacht|airport|plane|aircraft|bird|birds|squirrel|monkey|dog\b|cat\b|horse|deer|duck|goose|swan|condor|tern|pheasant|insect|butterfly|flower|blossom|closeup|close-up|detail|macro|print|ukiyo|hokusai|hiroshige|woodblock|engraving|drawing|painting|illustration|postcard|expedition|panorama|pano\b|hospital|school|office|shop|store|mall|market stall|tile|tiles|pattern|texture|glass|lamp|light pole|street light|camera|lens|black and white|b&w|monochrome|grayscale|sepia|1[89]\d\d|19[0-6]\d|fireworks|festival|concert|stage|night market", re.I)
GENERIC={"the","and","from","with","city","island","japan","china","korea","korean","south","north","new","old","town","view","night","skyline","beach","bay","lake","mountain","mountains","river","park","temple","castle","bridge","tower","square","street","palace","mosque","cathedral","garden","gardens"}
def landmark_tokens(cid):
    toks=set()
    for q in Q[cid]["queries"]+Q[cid]["must"]:
        for w in re.split(r"[\s,'’\-]+", q):
            w=w.strip().lower()
            if len(w)>=4 and w not in GENERIC: toks.add(w)
    # 도시명 자체도 토큰(제목에 도시명이 있으면 소폭 가점)
    return toks
ASSESS_V2={"featured":2.0,"quality":1.5,"valued":0.5,"potd":0.5}
OTHER_CITY={}
def other_city_regex(cid):
    if cid in OTHER_CITY: return OTHER_CITY[cid]
    names=[]
    for k,v in Q.items():
        if k==cid: continue
        nm=re.split(r"\s*\(|,", v["city"])[0].strip()
        if len(nm)>=4 and nm.lower() not in {"clark"}: names.append(re.escape(nm))
    OTHER_CITY[cid]=re.compile(r"\b(?:"+"|".join(names)+r")\b", re.I) if names else None
    return OTHER_CITY[cid]
def rescore(cid, r):
    t=r["title"].lower(); ar=r["ar"]; w,h=r["w"],r["h"]
    if BAD.search(r["title"]): return -100.0                      # 주제가 랜드마크가 아닌 사진은 제외
    oc=other_city_regex(cid)
    mine=re.split(r"\s*\(|,", Q[cid]["city"])[0].strip().lower()
    if oc and oc.search(r["title"]) and mine not in t: return -100.0   # 다른 도시 사진 제외
    if re.search(r"\b(1[89]\d\d|19[0-6]\d)\b", r["title"]): return -100.0  # 옛날 사진 제외
    s=min(sum(v for k,v in ASSESS_V2.items() if k in (r.get("assess") or "")), 2.5)
    s+=min(max(w,h),6000)/6000
    if r["orient"]=="landscape": s+=0.6-min(abs(ar-1.55),0.6)
    elif r["orient"]=="portrait": s+=0.6-min(abs(ar-0.7),0.6)
    lm=landmark_tokens(cid); hits=[x for x in lm if x in t]
    if hits: s+=2.5
    elif mine in t: s+=0.8
    else: s-=4.0
    if re.search(r"aerial|drone|satellite|from space|\biss\b|from air|bird'?s.eye", t): s-=1.0
    if re.search(r"night|dusk|blue hour|sunset|sunrise|evening", t): s+=0.3   # 분위기 있는 시간대 소폭 가점
    return round(s,2)
ids=[a for a in sys.argv[1:] if not a.startswith("--")]
if "--all" in sys.argv: ids=list(Q.keys())
NO_SHEET = "--no-sheet" in sys.argv
state_path="/tmp/hero_autopick_state.json"; state=json.load(open(state_path)) if os.path.exists(state_path) else {}
changed=[]
for cid in ids:
    jp=f"/tmp/hs_{cid}.json"
    if not os.path.exists(jp): print("json 없음:",cid); continue
    c=json.load(open(jp))
    for r in c: r["score"]=rescore(cid,r)
    c.sort(key=lambda r:-r["score"])
    for i,r in enumerate(c): r["idx"]=i
    json.dump(c,open(jp,"w"),ensure_ascii=False,indent=1)
    if state.get(cid,{}).get("manual") or "--no-pick" in sys.argv: continue
    land=[r for r in c if r["orient"]=="landscape"]; port=[r for r in c if r["orient"]=="portrait"]
    rec={"land":None,"port":None,"done":True,"rescored":True}
    try:
        if land: hs.pick(cid, land[0]["idx"], False); rec["land"]=land[0]["idx"]
        if port: hs.pick(cid, port[0]["idx"], True); rec["port"]=port[0]["idx"]
        changed.append(cid)
    except Exception as e: print(cid,"저장 실패",str(e)[:60]); rec["done"]=False
    state[cid]=rec; json.dump(state,open(state_path,"w")); time.sleep(0.3)
print("재선택:",len(changed),"곳")
if NO_SHEET: sys.exit(0)
# 검토 시트 (20개씩)
def b64(p):
    small=f"/tmp/heroes_small/{os.path.basename(p)}"; os.makedirs("/tmp/heroes_small",exist_ok=True)
    subprocess.run(["sips","-Z","420",p,"--out",small],capture_output=True); return base64.b64encode(open(small,"rb").read()).decode()
for n,c0 in enumerate(range(0,len(ids),20),1):
    chunk=ids[c0:c0+20]; cells=[]
    for cid in chunk:
        L=os.path.join(ROOT,"assets","heroes",f"{cid}.jpg"); P=os.path.join(ROOT,"assets","heroes",f"{cid}-portrait.jpg"); st=state.get(cid,{})
        li=f'<img class="l" src="data:image/jpeg;base64,{b64(L)}">' if os.path.exists(L) else '<div class="l ph"></div>'
        pi=f'<img class="p" src="data:image/jpeg;base64,{b64(P)}">' if os.path.exists(P) else '<div class="p ph"></div>'
        cells.append(f'<figure>{li}{pi}<figcaption><b>{cid}</b> {Q[cid]["city"]} · L#{st.get("land","-")} P#{st.get("port","-")}</figcaption></figure>')
    html=('<style>body{margin:0;background:#111;color:#eee;font:12px monospace}.g{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;padding:8px}'
          'figure{margin:0;display:grid;grid-template-columns:3fr 1fr;gap:3px}img{width:100%;object-fit:cover;display:block}.l{aspect-ratio:3/2}.p{aspect-ratio:9/16;height:100%}'
          '.ph{background:#333}figcaption{grid-column:1/-1;padding:3px}b{color:#fd6}</style><div class="g">'+''.join(cells)+'</div>')
    open(f"/tmp/rescore_{n}.html","w").write(html)
    subprocess.run(["/Applications/Google Chrome.app/Contents/MacOS/Google Chrome","--headless=new","--disable-gpu","--window-size=1800,1460","--virtual-time-budget=4000",f"--screenshot=/tmp/rescore_{n}.png",f"file:///tmp/rescore_{n}.html"],capture_output=True)
    print(f"rescore_{n}: {chunk[0]} … {chunk[-1]}")
