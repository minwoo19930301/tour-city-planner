#!/usr/bin/env python3
"""Save a candidate chosen from hero_candidates.py as the hero image.
usage: python3 scripts/hero_pick.py <slug> <idx>   (reads /tmp/cands_<slug>.json)"""
import sys, json, os, importlib.util
spec = importlib.util.spec_from_file_location("fh", os.path.join(os.path.dirname(os.path.abspath(__file__)), "fetch_hero.py")); fh = importlib.util.module_from_spec(spec); spec.loader.exec_module(fh)
slug, idx = sys.argv[1], int(sys.argv[2])
pick = json.load(open(f"/tmp/cands_{slug}.json"))[idx]
pick["url"] = pick["url"].split("?")[0]
p = fh.save(slug, pick); fh.credit(slug, pick)
print(f"ok {slug} ← #{idx} {pick['title'][5:70]} | {pick['lic']} | {pick['author']}\n   -> {p}")
