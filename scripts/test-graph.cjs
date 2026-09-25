const assert=require('node:assert/strict');
const vm=require('node:vm'), fs=require('node:fs');
const modelContext=vm.createContext({});vm.runInContext(fs.readFileSync('graph-model.js','utf8'),modelContext);const G=modelContext.TripGraph;
const day=()=>({activities:['a','b','c'].map((id,i)=>({id,time:`${10+i}:00`,location:id}))});
let d=day(); G.normalize(d); assert.deepEqual(JSON.parse(JSON.stringify(d.links)),[['a','b'],['b','c']]);
assert.equal(G.parallel(d,'b',{id:'x'}),true); assert.equal(G.parallel(d,'b',{id:'y'}),true); assert.equal(G.parallel(d,'b',{id:'z'}),true);assert.deepEqual(Array.from(G.rows(d),r=>r.length),[1,4,1]);G.remove(d,'z');
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
console.log('PASS: branches (including 4+), merge, cycle rejection, deletion, detach, disconnected paths, 156 hotel entries, share round trip and empty days.');

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
{const start=app.indexOf('function addBranchExample('),end=app.indexOf('\n}\n',start)+3;vm.runInContext(app.slice(start,end),ctx);}
ctx.example={id:'sample',destinationIds:['tokyo'],activities:['hotel-start','option-a','option-b','hotel-end'].map(id=>({id,time:'10:00'}))};
vm.runInContext('addBranchExample(example,1)',ctx);
assert.deepEqual(Array.from(G.rows(ctx.example),r=>r.length),[1,2,1]);
assert.equal(ctx.example.links.length,4);
console.log('PASS: new sample itinerary branches and merges at hotel.');
// Moving a merge node before alternatives must replace, not retain, bypass edges.
d={activities:[{id:'start'},{id:'end'},{id:'left',row:'choices'},{id:'right',row:'choices'}],links:[['start','end'],['start','left'],['start','right'],['end','left'],['end','right']]};
G.reconnectRows(d);assert.deepEqual(JSON.parse(JSON.stringify(d.links)),[['start','end'],['end','left'],['end','right']]);
const reductionStart=app.indexOf('function removeRedundantBypasses('),reductionEnd=app.indexOf('\n}\n',reductionStart)+3;vm.runInContext(app.slice(reductionStart,reductionEnd),ctx);
ctx.redundant={activities:[{id:'a'},{id:'b'},{id:'c'}],links:[['a','b'],['b','c'],['a','c']]};vm.runInContext('removeRedundantBypasses(redundant)',ctx);assert.equal(ctx.redundant.links.length,2);
console.log('PASS: moving before branches replaces stale bypasses; old redundant links repaired.');
for(const name of ['reorderEditedTime','getDirectionsUrl','getDirectionsEmbedUrl']){const start=app.indexOf('function '+name+'('),end=app.indexOf('\n}\n',start)+3;vm.runInContext(app.slice(start,end),ctx);}
ctx.URL=URL;
ctx.timed={activities:[{id:'a',time:'09:00'},{id:'b',time:'18:00'},{id:'c',time:'15:00'}]};
vm.runInContext("reorderEditedTime(timed,'b')",ctx);assert.deepEqual(Array.from(ctx.timed.activities,a=>a.id),['a','c','b']);assert.deepEqual(JSON.parse(JSON.stringify(ctx.timed.links)),[['a','c'],['c','b']]);
ctx.timed.activities[2].time='08:00';vm.runInContext("reorderEditedTime(timed,'b')",ctx);assert.deepEqual(Array.from(ctx.timed.activities,a=>a.id),['b','a','c']);
assert(vm.runInContext("getDirectionsUrl('A','B')",ctx).includes('travelmode=transit'));
assert(vm.runInContext("getDirectionsUrl('A','B','driving')",ctx).includes('travelmode=driving'));
assert(vm.runInContext("getDirectionsEmbedUrl('A','B',[],'driving')",ctx).includes('dirflg=d'));
console.log('PASS: time edits reorder cards and links; selectable transit/driving URLs.');
ctx.branch={activities:[{id:'start',time:'09:00'},{id:'left',row:'choices'},{id:'right',row:'choices'},{id:'end'}],links:[['start','left'],['start','right'],['left','end'],['right','end']]};
vm.runInContext("insertPlacedStop(branch,{id:'new',time:'10:00'},{target:'right',where:'before'})",ctx);
assert(ctx.branch.links.some(e=>e[0]==='start'&&e[1]==='left'));
assert(ctx.branch.links.some(e=>e[0]==='start'&&e[1]==='new'));
assert(ctx.branch.links.some(e=>e[0]==='new'&&e[1]==='right'));
assert(!ctx.branch.links.some(e=>e[0]==='new'&&e[1]==='left'));
{const start=app.indexOf('function inferPlaceIcon('),end=app.indexOf('\n}\n',start)+3;vm.runInContext(app.slice(start,end),ctx);}
for(const title of ['힐튼 호텔','Hilton Tokyo','東京ホテル','上海酒店'])assert.equal(ctx.inferPlaceIcon(title),'luggage');
for(const title of ['한강','Thames River','隅田川'])assert.equal(ctx.inferPlaceIcon(title),'waves');
console.log('PASS: branch-local insertion and multilingual place icons.');
for(const name of ['distanceKm','approximateTravelMinutes']){const start=app.indexOf('function '+name+'(');let end=app.indexOf('\n}\n',start)+3;if(name==='approximateTravelMinutes')end=app.indexOf('\n',start);vm.runInContext(app.slice(start,end),ctx);}
assert.equal(ctx.distanceKm([139,35],[139,35]),0);
assert(Math.abs(ctx.distanceKm([0,0],[0,1])-111.195)<.1);
assert(ctx.approximateTravelMinutes(10)>ctx.approximateTravelMinutes(1));
console.log('PASS: coordinate distance and estimated travel duration.');
const promptContext=vm.createContext({pendingSetupSegmentsData:null,getDestination:()=>({country:'Japan',city:'Tokyo'}),getLocalizedLabel:x=>x,ACTIVITY_ICON_OPTIONS:[{value:'landmark'},{value:'utensils-crossed'}],atob:s=>Buffer.from(s,'base64').toString('binary'),TextDecoder,Uint8Array,console});
for(const name of ['generateAIPromptText','decodePlan']){const start=app.indexOf('function '+name+'('),end=app.indexOf('\n}\n',start)+3;vm.runInContext(app.slice(start,end),promptContext);}
const prompt=promptContext.generateAIPromptText('tokyo','2026-10-01','2026-10-01');
assert(prompt.includes('#trip~1&g~tokyo~2026-10-01~2026-10-01'));
assert(prompt.includes('[여행 일정 열기](https://minwoo19930301.github.io/tour-city-planner/#import-ai)'));
assert(prompt.includes('완성 URL 원문 한 줄'));
assert(!prompt.includes('[완성된 URL](<'));
assert(!prompt.includes('코드 실행 도구가 없다면'));
const example={v:4,g:[{d:'tokyo',s:'2026-10-01',e:'2026-10-01'}],i:[{a:[{id:'stop-1',r:'r1',h:'09:00',d:'tokyo',k:'landmark',l:'실제 장소명'},{id:'stop-2',r:'r2',h:'12:00',d:'tokyo',k:'utensils-crossed',l:'식당'}],e:[['stop-1','stop-2']]}]};
const encoded=Buffer.from(JSON.stringify(example)).toString('base64url');
assert.deepEqual(JSON.parse(JSON.stringify(promptContext.decodePlan(encoded))),example);
ctx.appState.segments=example.g;ctx.exampleDays=example.i;vm.runInContext("restored=buildItineraryFromSharedPayload(appState.segments,exampleDays)",ctx);
assert.equal(ctx.restored[0].activities[0].location,'실제 장소명');assert.equal(ctx.restored[0].links[0][1],'stop-2');
console.log('PASS: legacy UTF-8 Base64URL decode and itinerary import.');
const travelNotes='숙소: 힐튼 도쿄\n예약: 10월 3일 19:00 스시\n루트: 아사쿠사 → 우에노';
const customPrompt=promptContext.generateAIPromptText('tokyo','2026-10-02','2026-10-06',travelNotes);
assert(customPrompt.includes(travelNotes));
assert(customPrompt.includes('명시한 예약 날짜와 시간은 임의로 바꾸지 마세요'));
assert(customPrompt.includes('#trip~1&g~tokyo~2026-10-02~2026-10-06'));
console.log('PASS: readable AI link prompt preserves traveler notes, dates and reservation constraints.');
// AI output reported by the user: the memo omitted its closing quote/brace before the next stop.
const brokenMemo='{"v":4,"g":[{"d":"tokyo","s":"2026-10-02","e":"2026-10-06"}],"i":[{"a":[{"id":"d3-5","m":"신세카이 산책과 전망,{"id":"d3-6","m":"도톤보리"}],"e":[["d3-5","d3-6"]]}]}';
let repairCount=0;
const recovered=promptContext.decodePlan(Buffer.from(brokenMemo).toString('base64url'),{onRepair:()=>repairCount++});
assert.equal(repairCount,1);
assert.equal(recovered.i[0].a.length,2);
assert.equal(recovered.i[0].a[0].m,'신세카이 산책과 전망');
assert.equal(recovered.i[0].e[0][1],'d3-6');
const validWithQuotes={v:4,g:example.g,i:[{a:[{id:'a',m:'메모에 ,{"id": 와 "따옴표", 줄바꿈\n그대로'}],e:[]}]};
assert.deepEqual(JSON.parse(JSON.stringify(promptContext.decodePlan(Buffer.from(JSON.stringify(validWithQuotes)).toString('base64url'),{onRepair:()=>repairCount++}))),validWithQuotes);
assert.equal(repairCount,1);
assert.throws(()=>promptContext.decodePlan(Buffer.from('{"v":4,"i":[').toString('base64url')));
console.log('PASS: narrowly repair missing memo boundary, preserve valid quoted text, reject truncated links.');

const tripContext=vm.createContext({URL});vm.runInContext(fs.readFileSync('ai-link.js','utf8'),tripContext);
const parseTrip=(hash,options)=>JSON.parse(JSON.stringify(tripContext.AITripLink.parse(hash,options)));
const tripOptions={destinationIds:['tokyo','seoul'],iconIds:['landmark']};
const readable='#trip=1&g=tokyo~2026-10-01~2026-10-02'+
'&s=2026-10-01~a1~r1~09:00~tokyo~landmark~호텔+Tokyo'+
'&s=2026-10-01~a2~r2~10:00~tokyo~landmark~강+%26+River%7E%25%2B'+
'&s=2026-10-01~a3~r2~10:00~tokyo~landmark~센소지'+
'&s=2026-10-01~a4~r2~10:00~tokyo~landmark~東京タワー'+
'&s=2026-10-01~a5~r3~18:00~tokyo~landmark~식당'+
'&s=2026-10-02~b1~r1~09:00~tokyo~landmark~호텔'+
'&m=a1~메모+%22따옴표%22&q=a1~Hilton+Tokyo';
const parsed=parseTrip(readable,tripOptions);
assert.equal(parsed.i.length,2);assert.equal(parsed.i[0].a[1].l,'강 & River~%+');
assert.equal(parsed.i[0].a[0].m,'메모 "따옴표"');assert.equal(parsed.i[0].a[0].q,'Hilton Tokyo');
assert.deepEqual(parsed.i[0].e,[['a1','a2'],['a1','a3'],['a1','a4'],['a2','a5'],['a3','a5'],['a4','a5']]);
ctx.exampleDays=parsed.i;vm.runInContext('restored=buildItineraryFromSharedPayload(appState.segments,exampleDays)',ctx);
assert.deepEqual(Array.from(G.rows(ctx.restored[0]),row=>row.length),[1,3,1]);
assert.equal(ctx.restored[0].activities[1].location,'강 & River~%+');
assert.deepEqual(parseTrip(readable+'&e=a1~a3&e=a3~a5',tripOptions).i[0].e,[['a1','a3'],['a3','a5']]);
const overlapping=readable.replace('&g=tokyo','&g=seoul~2026-10-02~2026-10-02&g=tokyo');
assert.equal(parseTrip(overlapping,tripOptions).i.length,2);
for(const broken of [
 readable.replace('~09:00~','~25:00~'),
 readable.replace('~a3~','~a2~'),
 readable.replace('2026-10-02~b1','2026-10-03~b1'),
 readable.replace('2026-10-01~2026-10-02','2026-02-30~2026-10-02'),
 readable+'&e=a5~a1',readable+'&e=a1~b1',readable+'&unknown=x',
 readable+'&m=a1~%notencoded',
 readable.replace('&s=2026-10-02~b1~r1~09:00~tokyo~landmark~호텔','')
]) assert.throws(()=>parseTrip(broken,tripOptions));
console.log('PASS: readable links preserve Unicode/reserved characters, three branches and merges; invalid or missing data rejected.');

const wide=parseTrip(readable.replace('~r3~','~r2~'),tripOptions);
assert.equal(wide.i[0].a.filter(a=>a.r==='r2').length,4);
let wideDay={activities:[{id:'root'},...Array.from({length:7},(_,i)=>({id:'option'+i,row:'options'})),{id:'end'}]};
G.normalize(wideDay);assert.deepEqual(Array.from(G.rows(wideDay),r=>r.length),[1,7,1]);
assert.equal(wideDay.links.length,14);G.layout(wideDay);assert.deepEqual(Array.from(G.rows(wideDay),r=>r.length),[1,7,1]);
ctx.appState.itinerary=[wideDay];vm.runInContext('restored=buildItineraryFromSharedPayload(appState.segments,buildSharePayload().i)',ctx);
assert.deepEqual(Array.from(G.rows(ctx.restored[0]),r=>r.length),[1,7,1]);
for(const name of ['buildBranchLayout','graphLayoutAttributes','getAIPasteInstruction']){const start=app.indexOf('function '+name+'('),end=app.indexOf('\n}\n',start)+3;vm.runInContext(app.slice(start,end),ctx);}
const wideRows=G.rows(wideDay);
assert(ctx.graphLayoutAttributes(wideRows,wideRows[1][6]).includes('grid-column:1 / -1'));
assert.equal(ctx.buildBranchLayout(wideDay).get('option6').width,1/7);
assert(ctx.getAIPasteInstruction('MacIntel','Macintosh',0).includes('Command (⌘) + V'));
for(const platform of ['Win32','Windows','Linux x86_64'])assert(ctx.getAIPasteInstruction(platform,'Mozilla',0).includes('Ctrl + V'));
for(const [platform,ua,touch] of [['iPhone','iPhone',5],['Linux','Android',5],['MacIntel','Macintosh',5]]){
 const instruction=ctx.getAIPasteInstruction(platform,ua,touch);assert(instruction.includes('꾹 누른'));assert(!instruction.includes('우클릭'));
}
console.log('PASS: 7 parallel stops retain branches on layout/share, responsive positioning, and mobile/Mac/Windows/Linux paste instructions.');

const gesture={pointerId:null,active:false};let began=0,cancelled=0,prevented=0,hold;
const wrapper={},card={dataset:{dayIndex:'0',activityId:'a'},closest:()=>wrapper,classList:{add(){}}};
const dragContext=vm.createContext({placingStop:null,activityDragState:gesture,appState:{reorderMode:false},
 DRAG_HOLD_DELAY_REORDER:220,DRAG_HOLD_DELAY_DEFAULT:300,DRAG_START_THRESHOLD:6,DRAG_HOLD_CANCEL_DISTANCE:10,
 clearHoldTimer(){},window:{setTimeout(cb){hold=cb;return 1;}},
 beginActivityDrag(){began++;gesture.active=true;},cancelActivityDrag(){cancelled++;gesture.pointerId=null;gesture.active=false;},
 updateGhostPosition(){},updateDropTarget(){}});
for(const name of ['handleActivityPointerDown','handleActivityPointerMove']){const start=app.indexOf('function '+name+'('),end=app.indexOf('\n}\n',start)+3;vm.runInContext(app.slice(start,end),dragContext);}
const touch={pointerType:'touch',pointerId:1,button:0,clientX:0,clientY:0,cancelable:true,preventDefault(){prevented++;},target:{closest(selector){return selector==='[data-activity-card-id]'?card:null;}}};
dragContext.handleActivityPointerDown(touch);dragContext.handleActivityPointerMove({...touch,clientX:20});
assert.equal(cancelled,1);assert.equal(began,0);assert.equal(prevented,0);
dragContext.handleActivityPointerDown(touch);hold();dragContext.handleActivityPointerMove({...touch,clientX:20});
assert.equal(began,1);assert.equal(prevented,1);
console.log('PASS: a touch swipe remains native scrolling; holding starts drag and captures movement.');

let joined={activities:[{id:'start'},...Array.from({length:4},(_,i)=>({id:'p'+i,row:'parallel'})),{id:'moved'},{id:'finish'}]};
G.normalize(joined);assert.equal(G.join(joined,'moved','p2'),true);
assert.deepEqual(Array.from(G.rows(joined),row=>row.length),[1,5,1]);
console.log('PASS: moving an existing stop into a row of four keeps five parallel stops.');

// Pasting a whole answer must recover the generated plan, not the fixed import link.
const readAnswer=text=>JSON.parse(JSON.stringify(tripContext.AITripLink.readResponse(text,tripOptions)));
const fullURL='https://minwoo19930301.github.io/tour-city-planner/'+readable;
const answer='이 응답을 복사하세요.\n'+fullURL+'\n[여행 일정 열기](https://minwoo19930301.github.io/tour-city-planner/?import=ai)';
assert.deepEqual(readAnswer(answer).payload,parsed);
assert.deepEqual(readAnswer('[일정]('+fullURL+')\n'+fullURL).payload,parsed);
assert.deepEqual(readAnswer(fullURL.replace('#trip=','?utm_source=chatgpt.com&trip=')).payload,parsed);
assert.deepEqual(readAnswer(fullURL.replaceAll('&','&amp;')).payload,parsed);
// ChatGPT's copy button escapes tildes and emits a Markdown hard break after the URL.
assert.deepEqual(readAnswer(fullURL.replaceAll('~','\\~')+'\\\n[여행 일정 열기](<https://minwoo19930301.github.io/tour-city-planner/?import=ai>)').payload,parsed);
assert.throws(()=>readAnswer('https://evil.example/'+readable));
assert.throws(()=>readAnswer('https://minwoo19930301.github.io/tour-city-planner/?import=ai'));
assert.throws(()=>readAnswer(fullURL.replace('~09:00~','~29:00~')));
assert.throws(()=>readAnswer(fullURL+'\n'+fullURL.replace('~09:00~','~08:00~')));
assert.throws(()=>readAnswer(prompt));
console.log('PASS: whole AI response import, Markdown/HTML escapes, duplicate URLs, ambiguity and malformed answer rejection.');

// New delimiter-free sharing preserves old links and full graph payloads.
const noEquals=readable.replace(/(trip|g|s|e|m|q)=/g,'$1~');
assert.deepEqual(parseTrip(noEquals,tripOptions),parseTrip(readable,tripOptions));
assert.deepEqual(readAnswer('https://minwoo19930301.github.io/tour-city-planner/'+noEquals).payload,parsed);
const codec=vm.createContext({TextEncoder,TextDecoder,btoa,atob,URL});
vm.runInContext(app.slice(app.indexOf('const LZString = {'),app.indexOf('function setScrollLock(')),codec);
codec.appState=ctx.appState;codec.buildSharePayload=()=>parsed;
codec.window={location:{href:'https://minwoo19930301.github.io/tour-city-planner/?plan=old&utm_source=test#plan=old'},history:{replaceState:(_a,_b,url)=>codec.saved=url}};
for(const name of ['buildShareUrl','syncUrl']) {const a=app.indexOf('function '+name+'('),b=app.indexOf('\n}\n',a)+3;vm.runInContext(app.slice(a,b),codec);}
const shared=codec.buildShareUrl();assert(!shared.includes('='));assert(!shared.includes('?'));
assert.deepEqual(JSON.parse(JSON.stringify(codec.decodePlan(new URL(shared).hash.slice(1)))),parsed);
codec.appState.hasStarted=true;codec.syncUrl();assert.equal(codec.saved,shared);
console.log('PASS: no-equals readable import, compressed sharing, query cleanup and payload round trip.');
// Preview and drop use one operation; branch deletion and relocation preserve valid paths.
{const a=app.indexOf('function movePlacedActivity('),b=app.indexOf('\n}\n',a)+3;vm.runInContext(app.slice(a,b),ctx);}
ctx.moveDays=[{destinationId:'tokyo',activities:[{id:'a',time:'09:00'},{id:'b',row:'p',time:'11:00'},{id:'c',row:'p',time:'11:00'},{id:'d',time:'15:00'}],links:[['a','b'],['a','c'],['b','d'],['c','d']]}];
assert(ctx.movePlacedActivity(ctx.moveDays,0,0,'d',{target:'b',where:'before'}));
assert.deepEqual(Array.from(G.rows(ctx.moveDays[0]),r=>Array.from(r,a=>a.id)),[['a'],['d','c'],['b']]);
assert(!ctx.moveDays[0].links.some(e=>e[0]==='b'&&e[1]==='d'));
assert(ctx.moveDays[0].activities.every(a=>/^\d\d:\d\d$/.test(a.time)));
const phraseContext=vm.createContext({});vm.runInContext(fs.readFileSync('travel-phrases.js','utf8')+';globalThis.phrases=JAPANESE_TRAVEL_PHRASES',phraseContext);
assert(phraseContext.phrases.length>=100);assert.equal(new Set(phraseContext.phrases.map(p=>p.text)).size,phraseContext.phrases.length);assert(phraseContext.phrases.every(p=>p.text&&p.pron&&p.meaning));
{const a=app.indexOf('function getWeatherInfo('),b=app.indexOf('\n}\n',a)+3;vm.runInContext(app.slice(a,b),ctx);}
assert.equal(ctx.getWeatherInfo(0).color,'#f97316');assert.equal(ctx.getWeatherInfo(1).color,'#fbbf24');assert.equal(ctx.getWeatherInfo(0,false).icon,'moon');assert.equal(ctx.getWeatherInfo(2,false).icon,'cloud-moon');assert.equal(ctx.getWeatherInfo(3).icon,'cloud');assert.equal(ctx.getWeatherInfo(85).icon,'cloud-snow');
console.log('PASS: branch-aware sorting, complete Japanese phrase bank ('+phraseContext.phrases.length+'), consistent weather codes.');
{const a=app.indexOf('function moveTripDate('),b=app.indexOf('\nfunction commitTripDates',a);vm.runInContext(app.slice(a,b),ctx);}
ctx.formatYmd=d=>d.toISOString().slice(0,10);ctx.parseYmd=s=>new Date(s+'T00:00:00Z');ctx.addDays=(d,n)=>new Date(d.getTime()+n*86400000);
const dateDays=()=>['2026-10-02','2026-10-03','2026-10-04'].map((date,i)=>({date,activities:[{id:'date'+i}],links:[],destinationId:'osaka'}));
assert.deepEqual(Array.from(ctx.moveTripDate(dateDays(),0,'2026-09-25',true),d=>d.date),['2026-09-25','2026-09-26','2026-09-27']);
assert.deepEqual(Array.from(ctx.moveTripDate(dateDays(),1,'2026-10-05',false),d=>d.date),['2026-10-02','2026-10-04','2026-10-05']);
const mergedDates=ctx.moveTripDate(dateDays(),1,'2026-10-02',false);assert.equal(mergedDates.length,2);assert.equal(mergedDates[0].activities.length,2);
console.log('PASS: date shifting, sorted single-day move and collision merge preserve activities.');

const timed={activities:[{id:'start',time:'08:00'},{id:'a1',time:'09:00'},{id:'b1',time:'09:00'},{id:'a2',time:'10:00'},{id:'join',time:'12:00'}],links:[['start','a1'],['start','b1'],['a1','a2'],['a2','join'],['b1','join']]};
G.unfold(timed);const positions=ctx.buildBranchLayout(timed);
assert.equal(timed.activities.filter(a=>a.id.startsWith('join')).length,2);
assert(timed.activities.every(a=>timed.links.filter(e=>e[1]===a.id).length<=1));
assert.equal(positions.get('a1').left,positions.get('a2').left);
assert.equal(positions.get('b1').span,1);
const saved=JSON.stringify(timed);G.unfold(timed);assert.equal(JSON.stringify(timed),saved);
console.log('PASS: shared continuations are cloned once, branch lanes persist without time stretching.');
