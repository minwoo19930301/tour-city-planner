#!/usr/bin/env node
// Validates city fragment files against app.js conventions.
// usage: node scripts/verify_fragment.js scripts/new_cities_*.js
const fs = require('fs'), path = require('path');
const ROOT = path.dirname(__dirname);
const app = fs.readFileSync(path.join(ROOT, 'app.js'), 'utf8');
const icons = new Set([...app.matchAll(/type:\s*'([a-z0-9-]+)'/g)].map(m => m[1]));
const existingIds = new Set([...app.matchAll(/^\s+id:\s*['"]([a-z0-9-]+)['"],?\s*$/gm)].map(m => m[1]));
// accent → 그 accent 를 쓰는 기존 도시 id 목록 (자기 자신은 중복으로 치지 않기 위해)
const accentOwners = new Map();
for (const m of app.matchAll(/^    ([a-z0-9-]+): \{[\s\S]*?accent:\s*'(#[0-9A-Fa-f]{6})'/gm)) { const hex = m[2].toUpperCase(); if (!accentOwners.has(hex)) accentOwners.set(hex, []); accentOwners.get(hex).push(m[1]); }
const labelBlock = app.slice(app.indexOf('const LOCATION_LABELS'), app.indexOf('const LOCATION_LABELS') + 40000);
const esc = v => v.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const hasLabel = name => new RegExp(`^\\s*(?:'${esc(name).replace(/'/g, "\\'")}'|"${esc(name)}"|${esc(name)}): '`, 'm').test(labelBlock);
const required = ['id','city','country','summary','footer','heroImage','accent','accentRgb','ink','inkRgb','overlayTop','overlayBottom','timeZone','weather','currency','startOffsetDays','phraseLabel','phrases','itineraryTemplate'];
let problems = 0, total = 0; const seenAccent = new Map();
for (const f of process.argv.slice(2)) {
  const frag = require(path.resolve(f));
  for (const [key, d] of Object.entries(frag)) {
    total++; const err = [];
    for (const r of required) if (d[r] === undefined) err.push(`필드 없음 ${r}`);
    if (d.id !== key) err.push(`id(${d.id}) ≠ key(${key})`);
    const info = existingIds.has(key) ? ' (app.js에 이미 있음 → 교체 대상)' : '';
    const hex = (d.accent || '').toUpperCase();
    if (!/^#[0-9A-F]{6}$/.test(hex)) err.push('accent 형식');
    const rgb = hex.length === 7 ? [1,3,5].map(i => parseInt(hex.slice(i, i+2), 16)).join(', ') : '';
    if (rgb && d.accentRgb !== rgb) err.push(`accentRgb ${d.accentRgb} ≠ ${rgb}`);
    const owners = (accentOwners.get(hex) || []).filter(o => o !== key); if (owners.length) err.push(`accent ${hex} 기존 도시 ${owners.join(',')}와 중복`);
    if (seenAccent.has(hex)) err.push(`accent ${hex} ${seenAccent.get(hex)}와 중복`); seenAccent.set(hex, key);
    if (!fs.existsSync(path.join(ROOT, d.heroImage || ''))) err.push(`사진 없음 ${d.heroImage}`);
    if (!(d.phrases || []).length || d.phrases.length < 6) err.push(`표현 ${(d.phrases||[]).length}개`);
    const w = d.weather || {}; if (!(Math.abs(w.latitude) <= 90 && Math.abs(w.longitude) <= 180)) err.push('좌표 이상');
    const days = d.itineraryTemplate || []; if (days.length < 3) err.push(`일정 ${days.length}일`);
    days.forEach((day, i) => { (day.activities || []).forEach(a => {
      if (!icons.has(a.type)) err.push(`${i+1}일 아이콘 없음 '${a.type}'`);
      if (!/^\d\d:\d\d$/.test(a.time)) err.push(`${i+1}일 시간 '${a.time}'`);
      if (!a.location) err.push(`${i+1}일 location 비어 있음`);
    }); if ((day.activities || []).length < 3) err.push(`${i+1}일 활동 ${(day.activities||[]).length}개`); });
    if (!hasLabel(d.city)) err.push(`한글 라벨 없음: ${d.city}`);
    if (!hasLabel(d.country)) err.push(`나라 라벨 없음: ${d.country}`);
    if (!app.includes(`'${d.country}': 'asia'`) && !new RegExp(`^\\s*'?${d.country.replace(/'/g,"\\'")}'?: '(asia|north-america|europe|africa|resort|south-america)'`, 'm').test(app)) err.push(`COUNTRY_REGIONS 없음: ${d.country}`);
    const line = `${key.padEnd(12)} ${String(d.city).padEnd(14)} ${String(d.country).padEnd(14)} ${days.length}일 ${hex}${info}`;
    if (err.length) { problems++; console.log('✗ ' + line + '\n    - ' + err.join('\n    - ')); } else console.log('✓ ' + line);
  }
}
console.log(`\n${total}개 중 문제 ${problems}개`); process.exit(problems ? 1 : 0);
