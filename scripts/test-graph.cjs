const assert=require('node:assert/strict');
const vm=require('node:vm'), fs=require('node:fs');
const modelContext=vm.createContext({});vm.runInContext(fs.readFileSync('graph-model.js','utf8'),modelContext);const G=modelContext.TripGraph;
const day=()=>({activities:['a','b','c'].map((id,i)=>({id,time:`${10+i}:00`,location:id}))});
let d=day(); G.normalize(d); assert.deepEqual(JSON.parse(JSON.stringify(d.links)),[['a','b'],['b','c']]);
assert.equal(G.parallel(d,'b',{id:'x'}),true); assert.equal(G.parallel(d,'b',{id:'y'}),true); assert.equal(G.parallel(d,'b',{id:'z'}),false);
assert.deepEqual(Array.from(G.rows(d),r=>r.length),[1,3,1]);
for(const n of ['b','x','y']) {assert(d.links.some(e=>e[0]==='a'&&e[1]===n));assert(d.links.some(e=>e[0]===n&&e[1]==='c'));}
assert.equal(G.connect(d,'c','a'),false); assert.equal(G.connect(d,'x','b'),false);
G.remove(d,'b'); assert.deepEqual(Array.from(G.rows(d),r=>r.length),[1,2,1]);assert(!d.links.some(e=>e.includes('b')));
G.separate(d,'x'); assert(G.rows(d).every(r=>r.length===1));
let empty={activities:[],links:[]};G.normalize(empty);assert.deepEqual(empty,{activities:[],links:[]});
d=day();G.normalize(d);d.links=[];G.normalize(d);assert.deepEqual(JSON.parse(JSON.stringify(d.links)),[]);
d.links=[['a','b'],['a','b'],['c','a'],['unknown','a'],null];G.normalize(d);assert.deepEqual(JSON.parse(JSON.stringify(d.links)),[['a','b']]);
const app=fs.readFileSync('app.js','utf8');const ids=[...app.matchAll(/^\s+id:\s*['"]([a-z0-9-]+)['"],?\s*$/gm)].map(m=>m[1]);
const hotels=vm.runInNewContext(fs.readFileSync('example-hotels.js','utf8')+';EXAMPLE_HOTELS'); assert.equal(ids.length,156);assert(ids.every(id=>hotels[id]&&hotels[id]!=='숙소'));
// Real share codec / loader round trip without running browser initialization.
const ctx=vm.createContext({TripGraph:G,createId:(()=>{let n=0;return()=>`new${++n}`;})(),getSelectableDestinationId:x=>x,ACTIVITY_ICON_VALUES:new Set(['luggage']),buildItineraryFromSegments:()=>[{destinationId:'tokyo',activities:[]}], appState:{segments:[{destinationId:'tokyo',startDate:'2026-10-01',endDate:'2026-10-01'}],itinerary:[]}});
for(const name of ['buildItineraryFromSharedPayload','buildSharePayload']){
 const begin=app.indexOf('function '+name+'('),end=app.indexOf('\n}\n',begin)+3;vm.runInContext(app.slice(begin,end),ctx);
}
d=day();G.parallel(d,'b',{id:'x',location:'candidate',destinationId:'tokyo'});ctx.appState.itinerary=[d];
vm.runInContext('var payload=buildSharePayload();var restored=buildItineraryFromSharedPayload(appState.segments,payload.i);',ctx);
assert.deepEqual(JSON.parse(JSON.stringify(ctx.restored[0].links)),JSON.parse(JSON.stringify(d.links)));assert.deepEqual(Array.from(G.rows(ctx.restored[0]),r=>r.length),[1,2,1]);
ctx.appState.itinerary=[{activities:[],links:[]}];vm.runInContext('restored=buildItineraryFromSharedPayload(appState.segments,buildSharePayload().i)',ctx);assert.equal(ctx.restored[0].activities.length,0);
console.log('PASS: branches (max 3), merge, cycle rejection, deletion, detach, disconnected paths, 156 hotel entries, share round trip and empty days.');

d=day();G.parallel(d,'b',{id:'x'});G.separate(d,'b');assert(G.rows(d).every(r=>r.length===1));
assert.equal(G.join(d,'b','x'),true);assert.deepEqual(Array.from(G.rows(d),r=>r.length),[1,2,1]);
console.log('PASS: original branch separation and joining existing stops.');

// User example: a -> b/c/d -> e/f, with explicit paths rather than all-to-all.
d={activities:['f','e','d','c','b','a'].map(id=>({id,time:id==='a'?'':id==='b'?'오후':'14:30'})),links:[['a','b'],['a','c'],['a','d'],['b','e'],['c','f'],['d','f']]};
assert.equal(G.layout(d),true);
assert.deepEqual(Array.from(G.rows(d),r=>r.length),[1,3,2]);
assert.equal(d.links.length,6);assert(!d.links.some(e=>e[0]==='b'&&e[1]==='f'));
const before=JSON.stringify(d);d.links.push(['e','a']);assert.equal(G.layout(d),false);d=JSON.parse(before);
ctx.appState.itinerary=[d];vm.runInContext('restored=buildItineraryFromSharedPayload(appState.segments,buildSharePayload().i)',ctx);
assert.equal(ctx.restored[0].activities.find(a=>a.id==='a').time,'');
assert.equal(ctx.restored[0].activities.find(a=>a.id==='b').time,'오후');
console.log('PASS: dependency layout, explicit routes, cycle rejection, empty/flexible time round trip.');
// Placement inserts in front/behind a row, or as a parallel candidate.
{ const start=app.indexOf('function insertPlacedStop('),end=app.indexOf('\n}\n',start)+3;vm.runInContext(app.slice(start,end),ctx); }
let placed=day();G.normalize(placed);ctx.placed=placed;
vm.runInContext("insertPlacedStop(placed,{id:'new',time:'',location:'new'},{target:'b',where:'before'})",ctx);
assert.deepEqual(placed.activities.map(a=>a.id),['a','new','b','c']);
assert(!placed.links.some(e=>e[0]==='a'&&e[1]==='b'));assert(placed.links.some(e=>e[0]==='new'&&e[1]==='b'));
vm.runInContext("insertPlacedStop(placed,{id:'side',time:'',location:'side'},{target:'b',where:'left'})",ctx);
assert.deepEqual(placed.activities.map(a=>a.id),['a','new','side','b','c']);
assert.equal(placed.activities.find(a=>a.id==='side').time,'');
console.log('PASS: insert-before rewiring and parallel left placement without forced time.');
{for(const name of ['timeToMinutes','minutesToTime','inferStopTime']){const start=app.indexOf('function '+name+'('),end=app.indexOf('\n}\n',start)+3;vm.runInContext(app.slice(start,end),ctx);}}
ctx.timed={activities:[{id:'a',time:'09:00'},{id:'b',time:'10:00'},{id:'c',time:'15:00'}]};
assert.equal(vm.runInContext("inferStopTime(timed,'b')",ctx),'12:00');
assert.equal(vm.runInContext("inferStopTime(timed,null,{target:'c',where:'before'})",ctx),'12:30');
assert.equal(vm.runInContext("inferStopTime(timed,null,{target:'a',where:'right'})",ctx),'09:00');
console.log('PASS: midpoint time for moves, insertion, and parallel placement.');
