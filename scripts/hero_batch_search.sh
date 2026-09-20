#!/bin/sh
# Runs hero_search.py for every city in scripts/hero_queries.json (paced), logging to /tmp/hs_batch.log
cd "$(dirname "$0")/.." || exit 1
python3 - <<'PY'
import json, subprocess, time, os
Q=json.load(open('scripts/hero_queries.json'))
for cid,v in Q.items():
    if os.path.exists(f"/tmp/hs_{cid}.json"): continue
    args=["python3","scripts/hero_search.py",cid,*v["queries"],"--must",",".join(v["must"])]
    r=subprocess.run(args,capture_output=True,text=True); print(r.stdout.strip().splitlines()[-1] if r.stdout.strip() else f"{cid}: 실패 {r.stderr[-120:]}", flush=True)
    time.sleep(3)
print("배치 완료", flush=True)
PY
