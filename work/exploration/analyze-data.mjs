import {readFile,writeFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import assert from 'node:assert/strict';
import {PROFILES,TIERS,tierFor} from '../../src/model.mjs';
const data=JSON.parse(await readFile('src/data/research.json','utf8'));
const raw=await readFile('web-quality-research/source/report.md','utf8');
assert.equal(createHash('sha256').update(raw).digest('hex'),data.sourceSha256);
const selected=['サンドローネ','ヌヴィレット','スクロース'];
const profiles=PROFILES.map(p=>{
  const records=data.records.map(r=>{
    const cases=[];
    r.scores.forEach((s,i)=>[-.5,.5].forEach(delta=>{
      if(s+delta<0||s+delta>5)return;
      const next=[...r.scores];next[i]+=delta;
      cases.push({axis:i,delta,tier:tierFor(next,p.weights)});
    }));
    const original=tierFor(r.scores,p.weights);
    const tiers=[...new Set([original,...cases.map(c=>c.tier)])].sort((a,b)=>TIERS.indexOf(a)-TIERS.indexOf(b));
    return {name:r.name,id:r.id,scores:r.scores,original,tiers,crossesBoundary:tiers.length>1,cases};
  });
  return {profile:p.id,weights:p.weights,crossesBoundary:records.filter(r=>r.crossesBoundary).length,total:records.length,examples:records.filter(r=>selected.includes(r.name))};
});
const recipes=[
  ['サンドローネ','八重神子／オデット／エスコフィエ'],
  ['ヌヴィレット','フリーナ／シロネン／楓原万葉'],
  ['スクロース','イネファ／コロンビーナ／フィッシュル'],
  ['ヴェスナ','オデット／ヴォジャニーツァ／ファルザン'],
  ['マーヴィカ','シロネン／シトラリ／ベネット']
].map(([lead,team])=>{
  const r=data.records.find(r=>r.name===lead);
  assert.ok(r.team.startsWith(team),`${lead}: manual structured recipe matches original text`);
  return {lead,members:[lead,...team.split('／')],sourceLine:r.detailLine,origin:'original-example-manually-structured',unifiedDpsValidation:false};
});
const result={sourceSha256:data.sourceSha256,method:'Keep weights fixed. Change exactly one ordinal mode score by +0.5 or -0.5 within [0,5], include unchanged baseline. Recompute tiers. This is an arithmetic stress test, not probability, DPS, confidence interval, or proposed correction.',profiles,recipes,uniqueIndividualReferences:new Set(data.records.flatMap(r=>r.references.map(ref=>ref.url))).size};
await writeFile('work/exploration/evidence/data-study.json',JSON.stringify(result,null,2)+'\n');
console.log(JSON.stringify({profiles:profiles.map(({profile,crossesBoundary,total,examples})=>({profile,crossesBoundary,total,examples:examples.map(({name,original,tiers})=>({name,original,tiers}))})),recipesChecked:recipes.length,uniqueIndividualReferences:result.uniqueIndividualReferences}));
