/* Ordered DAG: parallel stops per row, only forward connections. */
(function (root) {
    function rows(day) {
        const result = [];
        day.activities.forEach(a => {
            const last = result[result.length - 1];
            if (a.row && last && last[0].row === a.row) last.push(a);
            else { a.row = a.row || a.id; result.push([a]); }
        });
        // A row token can appear again after dragging; give it its own identity.
        const used = new Set();
        result.forEach(row => { let key = row[0].row; if (used.has(key)) key = row[0].id; while(used.has(key)) key += '-'; used.add(key); row.forEach(a => a.row = key); });
        return result;
    }
    function normalize(day) {
        const rr = rows(day), rank = new Map(rr.flatMap((r, i) => r.map(a => [a.id, i])));
        if (!Array.isArray(day.links)) day.links = rr.flatMap((r, i) => i ? rr[i - 1].flatMap(a => r.map(b => [a.id, b.id])) : []);
        const seen = new Set();
        day.links = day.links.filter(e => {
            if (!Array.isArray(e) || e.length !== 2 || !rank.has(e[0]) || !rank.has(e[1]) || rank.get(e[0]) >= rank.get(e[1])) return false;
            const key = JSON.stringify(e); if (seen.has(key)) return false; seen.add(key); return true;
        });
        return rr;
    }
    function connect(day, from, to) {
        const rr = normalize(day), rank = new Map(rr.flatMap((r,i)=>r.map(a=>[a.id,i])));
        if (!rank.has(from) || !rank.has(to) || rank.get(from) >= rank.get(to)) return false;
        day.links.push([from,to]); normalize(day); return true;
    }
    function remove(day, id) {
        normalize(day);
        const incoming = day.links.filter(e=>e[1]===id).map(e=>e[0]);
        const outgoing = day.links.filter(e=>e[0]===id).map(e=>e[1]);
        day.activities = day.activities.filter(a=>a.id!==id);
        day.links = day.links.filter(e=>!e.includes(id));
        incoming.forEach(a=>outgoing.forEach(b=>day.links.push([a,b]))); normalize(day);
    }
    function parallel(day, id, item) {
        const rr = normalize(day), row = rr.find(r=>r.some(a=>a.id===id));
        if (!row) return false;
        const source = row.find(a=>a.id===id);
        item.row=source.row;
        const index=day.activities.indexOf(row[row.length-1]); day.activities.splice(index+1,0,item);
        day.links.filter(e=>e[1]===id).forEach(e=>day.links.push([e[0],item.id]));
        day.links.filter(e=>e[0]===id).forEach(e=>day.links.push([item.id,e[1]]));
        normalize(day); return true;
    }
    function freshRow(day,id) { let key = `row-${id}`; while(day.activities.some(a=>a.row===key)) key += '-'; return key; }
    function separate(day,id) {
        const rr=normalize(day), row=rr.find(r=>r.some(a=>a.id===id));
        if (!row || row.length===1) return false;
        const a=row.find(a=>a.id===id); day.activities=day.activities.filter(x=>x!==a);
        const siblings=row.filter(x=>x!==a); a.row=freshRow(day,id);
        day.activities.splice(day.activities.indexOf(siblings[siblings.length-1])+1,0,a);
        normalize(day); return true;
    }
    function join(day,id,target) {
        const rr=normalize(day), item=day.activities.find(a=>a.id===id), row=rr.find(r=>r.some(a=>a.id===target));
        if(!item || !row || row.includes(item)) return false;
        const saved=day.links.map(e=>e.slice());
        day.activities=day.activities.filter(a=>a!==item);
        item.row=row[0].row;
        day.activities.splice(day.activities.indexOf(row[row.length-1])+1,0,item);
        day.links=saved; normalize(day);
        // Repositioning blocks must not create every possible cross-connection.
        if(!day.links.some(e=>e[1]===id)) day.links.filter(e=>e[1]===target).forEach(e=>day.links.push([e[0],id]));
        normalize(day); return true;
    }
    function layout(day) {
        const ids=new Set(day.activities.map(a=>a.id));
        const links=(day.links || []).filter(([a,b])=>ids.has(a)&&ids.has(b)&&a!==b);
        const rank=new Map(), remaining=new Set(ids);
        while(remaining.size) {
            let progress=false;
            for(const id of remaining) {
                const parents=links.filter(e=>e[1]===id).map(e=>e[0]);
                if(parents.every(p=>rank.has(p))) {rank.set(id,parents.length?Math.max(...parents.map(p=>rank.get(p)))+1:0);remaining.delete(id);progress=true;}
            }
            if(!progress) return false;
        }
        day.activities.sort((a,b)=>rank.get(a.id)-rank.get(b.id));
        day.activities.forEach(a=>{a.row=`level-${rank.get(a.id)}`;});
        day.links=links; normalize(day); return true;
    }
    // Materialize a separate continuation for every branch. Never merge paths.
    function unfold(day) {
        const rr=normalize(day), rank=new Map(rr.flatMap((r,i)=>r.map(a=>[a.id,i])));
        const original=day.activities.slice(), edges=day.links.slice(), copies=new Map(), used=new Set(original.map(a=>a.id));
        const activities=[], links=[];
        for(const a of original) {
            const parents=edges.filter(e=>e[1]===a.id).flatMap(e=>copies.get(e[0])||[]);
            const versions=(parents.length?parents:[null]).map((parent,index)=>{
                let id=a.id;
                if(index){let n=index;do{id=`${a.id}-branch-${n++}`;}while(used.has(id));used.add(id);}
                const copy=index?{...a,id}:a;
                activities.push(copy);if(parent)links.push([parent.id,id]);return copy;
            });
            copies.set(a.id,versions);
        }
        const order=new Map(activities.map(a=>[a.id,rank.get(original.find(o=>copies.get(o.id).includes(a)).id)]));
        activities.sort((a,b)=>order.get(a.id)-order.get(b.id));
        day.activities=activities;day.links=links;normalize(day);
    }
    function reconnectRows(day) {delete day.links;return normalize(day);}
    root.TripGraph={unfold,reconnectRows,layout,rows,normalize,connect,remove,parallel,separate,join,freshRow};
})(typeof module==='object' ? module.exports : globalThis);
