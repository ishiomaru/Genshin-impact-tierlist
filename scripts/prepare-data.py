#!/usr/bin/env python3
"""Strict, source-linked adapter for the supplied research snapshot (not game verification)."""
from pathlib import Path
from decimal import Decimal
import re, json, hashlib

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / 'web-quality-research/source/report.md'
text = SOURCE.read_text()
digest = hashlib.sha256(SOURCE.read_bytes()).hexdigest()
weights = {'balanced': [45,35,20], 'abyss': [60,30,10], 'onslaught': [30,60,10], 'theater': [30,20,50]}

def tier(x):
    return next((label for bound,label in [('4.4','SS'),('3.8','S'),('3.2','A'),('2.6','B'),('2.0','C')] if x >= Decimal(bound)), 'D')

refs = {m[1]: {'id': m[1], 'title': m[2], 'url': m[3]} for m in re.finditer(r'^\| (C\d+|G\d+) \| \[(.+?)\]\((https?://[^\s)]+)\)', text, re.M)}
blocks = list(re.finditer(r'^#### (.+?) — (SS|S|A|B|C|D)（(.+?)）\s*$', text, re.M))
details = {}
for i,m in enumerate(blocks):
    end = blocks[i+1].start() if i+1<len(blocks) else text.index('\n## 7.')
    raw = re.split(r'\n### ', text[m.end():end])[0].strip()
    def field(label):
        match = re.search(r'\*\*'+label+r'：\*\* (.+)', raw)
        assert match, (m[1],label)
        return match[1]
    details[m[1]] = dict(element=m[3].split('、')[0], role=m[3].split('、')[1],
        verdict=field('判定'), caveat=field('制約・比較上の注意'), team=field('代表的な味方3枠'),
        references=[refs[k] for k in re.findall(r'\[(C\d+)\]', raw)],
        detailLine=text[:m.start()].count('\n')+1,
        detailScores=list(map(Decimal,re.search(r'モード点（螺旋／幽境／シアター）：\*\* ([\d.]+)／([\d.]+)／([\d.]+)', raw).groups())))

rows = text.split('## 付録A.')[1].split('## 付録B.')[0]
records=[]
assets_path = ROOT / 'src/data/assets.json'
assets = json.loads(assets_path.read_text()) if assets_path.exists() else {}
for line in rows.splitlines():
    cells = [c.strip() for c in line.strip('|').split('|')]
    if len(cells)!=8 or cells[1] not in ['主','派生']: continue
    name,group,a,b,c,total,band,confidence = cells
    scores = list(map(Decimal, [a,b,c]))
    assert all(0<=v<=5 and v % Decimal('.5')==0 for v in scores)
    totals={k: sum(s*Decimal(w)/100 for s,w in zip(scores,ws)) for k,ws in weights.items()}
    assert totals['balanced']==Decimal(total) and tier(totals['balanced'])==band, name
    detail=details.pop(name)
    assert detail.pop('detailScores')==scores, name
    records.append(dict(id='c-'+hashlib.sha256(name.encode()).hexdigest()[:10], name=name,
        group=group, scores=list(map(float,scores)), tier=band, confidence=confidence,
        total=total, profiles={k:tier(v) for k,v in totals.items()},
        sourceLine=text[:text.index(line)].count('\n')+1, **detail, **assets.get(name,{})))
assert not details
assert len(records)==77 and len(set(r['id'] for r in records))==77
assert sum(r['group']=='主' for r in records)==53
changed={k:sum(r['tier']!=r['profiles'][k] for r in records) for k in weights}
assert changed==dict(balanced=0,abyss=10,onslaught=14,theater=28)
profiles=list(weights)
examples=0
by_name={r['name']:r for r in records}
for line in text.split('## 7.')[1].split('## 8.')[0].splitlines():
    cells=[c.strip() for c in line.strip('|').split('|')]
    if len(cells)==5 and cells[0] in by_name:
        assert cells[1:]==list(by_name[cells[0]]['profiles'].values());examples+=1
assert examples==13
out=dict(sourceSha256=digest, weights=weights, records=records, changed=changed, references=list(refs.values()))
(ROOT/'src/data/research.json').write_text(json.dumps(out,ensure_ascii=False,indent=2)+'\n')
summary=dict(source_sha256=digest,records=len(records),main=53,derived=24,score_cells=231,
    weighted_totals=77,detail_score_triples=77,profile_examples=examples,changed=changed,
    confidence={v:sum(r['confidence']==v for r in records) for v in ['高','中','低']},
    tiers={v:sum(r['tier']==v for r in records) for v in ['SS','S','A','B','C','D']})
(ROOT/'work/data-audit.json').write_text(json.dumps(summary,ensure_ascii=False,indent=2)+'\n')
print(json.dumps(summary,ensure_ascii=False))
