#!/usr/bin/env python3
"""This report's strict adapter, not a general Markdown-to-website parser."""
from pathlib import Path
from decimal import Decimal
import hashlib, json, re, sys

root = Path(__file__).resolve().parents[1]
source = Path(sys.argv[1]) if len(sys.argv) > 1 else root / 'source/report.md'
dest = Path(sys.argv[2]) if len(sys.argv) > 2 else root / 'experiment/data.json'
text = source.read_text(encoding='utf-8')
lines = text.splitlines()
digest = hashlib.sha256(source.read_bytes()).hexdigest()

def tier(x):
    for bound, label in [('4.4','SS'),('3.8','S'),('3.2','A'),('2.6','B'),('2.0','C')]:
        if x >= Decimal(bound): return label
    return 'D'

profiles = {
    '基準':['0.45','0.35','0.20'], '螺旋重視':['0.60','0.30','0.10'],
    '幽境重視':['0.30','0.60','0.10'], 'シアター重視':['0.30','0.20','0.50']
}
records = []
inside = False
for n, line in enumerate(lines, 1):
    if line.startswith('## 付録A.'): inside = True; continue
    if inside and line.startswith('## '): break
    if not inside or not line.startswith('|'): continue
    cells = [v.strip() for v in line.strip('|').split('|')]
    if len(cells) != 8 or cells[1] not in ['主','派生']: continue
    name, group, a, b, c, total, band, confidence = cells
    scores = list(map(Decimal,[a,b,c]))
    assert all(0 <= v <= 5 and v % Decimal('.5') == 0 for v in scores), name
    results = {k:sum(v*Decimal(w) for v,w in zip(scores,weights)) for k,weights in profiles.items()}
    assert results['基準'] == Decimal(total), (name, total, results)
    assert tier(results['基準']) == band, name
    records.append(dict(id='c-'+hashlib.sha256(name.encode()).hexdigest()[:10],name=name,group=group,
        scores=[float(v) for v in scores],score_strings=[a,b,c],total=total,tier=band,confidence=confidence,
        profiles={k:tier(v) for k,v in results.items()},source_line=n))
assert len(records) == 77 and len({r['name'] for r in records}) == 77
assert sum(r['group']=='主' for r in records) == 53

blocks = list(re.finditer(r'^#### (.+?) — (SS|S|A|B|C|D)（(.+?)）\s*$', text, re.M))
assert len(blocks) == len(records)
by_name = {r['name']:r for r in records}
for i,m in enumerate(blocks):
    end = blocks[i+1].start() if i+1 < len(blocks) else text.index('\n## 7.')
    raw = re.split(r'\n### ',text[m.end():end])[0].strip()
    r = by_name[m[1]]
    assert r['tier']==m[2]
    score_match=re.search(r'モード点（螺旋／幽境／シアター）：\*\* ([\d.]+)／([\d.]+)／([\d.]+)',raw)
    assert score_match and list(map(float,score_match.groups()))==r['scores'],r['name']
    r.update(element=m[3].split('、')[0],raw=raw,detail_line=text[:m.start()].count('\n')+1)

changed={k:sum(r['tier']!=r['profiles'][k] for r in records) for k in profiles}
assert changed=={'基準':0,'螺旋重視':10,'幽境重視':14,'シアター重視':28},changed
section7=text.split('## 7.')[1].split('## 8.')[0]
checked_examples=0
for line in section7.splitlines():
    if line.startswith('|'):
        cells=[v.strip() for v in line.strip('|').split('|')]
        if len(cells)==5 and cells[0] in by_name:
            assert cells[1:]==list(by_name[cells[0]]['profiles'].values()),cells
            checked_examples+=1
assert checked_examples==13
result=dict(source_sha256=digest,characters=len(text),lines=len(lines),records=records,
    weights=profiles,changed_counts=changed,representative_rows_verified=checked_examples,
    notice='提供資料の表示検証。ゲーム内容の独立した再検証は行っていません。')
dest.parent.mkdir(parents=True,exist_ok=True)
dest.write_text(json.dumps(result,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
summary={k:v for k,v in result.items() if k!='records'}
summary.update(record_count=len(records),main_count=53,derived_count=24,
    score_cells_checked=77*3,weighted_totals_checked=77,detail_score_triples_checked=77,
    confidence_counts={v:sum(r['confidence']==v for r in records) for v in ['高','中','低']},
    tier_counts={v:sum(r['tier']==v for r in records) for v in ['SS','S','A','B','C','D']})
(root/'evidence/data-audit.json').write_text(json.dumps(summary,ensure_ascii=False,indent=2)+'\n')
print(json.dumps(summary,ensure_ascii=False,indent=2))
