import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import {
  PROFILES,
  tierFor,
  normalize,
  parseRoute,
  routeHash,
  sharedMentions,
} from '../src/model.mjs';
const data = JSON.parse(readFileSync(new URL('../src/data/research.json', import.meta.url)));
test('dataset is tied to the unmodified source and covers 53+24 unique operations', () => {
  const raw = readFileSync(new URL('../web-quality-research/source/report.md', import.meta.url));
  assert.equal(createHash('sha256').update(raw).digest('hex'), data.sourceSha256);
  assert.equal(data.records.length, 77);
  assert.equal(data.records.filter((c) => c.group === '主').length, 53);
  assert.equal(new Set(data.records.map((c) => c.id)).size, 77);
});
test('all 308 computed tiers agree with source-adapter output; sensitivity counts are preserved', () => {
  const changes = [];
  for (const p of PROFILES) {
    let count = 0;
    for (const c of data.records) {
      assert.equal(tierFor(c.scores, p.weights), c.profiles[p.id], `${c.name}/${p.id}`);
      if (tierFor(c.scores, p.weights) !== c.tier) count++;
    }
    changes.push(count);
  }
  assert.deepEqual(changes, [0, 10, 14, 28]);
});
test('exact boundary cases do not drift due to floating point arithmetic', () => {
  assert.equal(tierFor([5, 5, 2], [45, 35, 20]), 'SS');
  assert.equal(tierFor([3, 2.5, 2.5], [45, 35, 20]), 'B');
  assert.equal(tierFor([2, 2, 2], [45, 35, 20]), 'C');
  assert.equal(tierFor([1.5, 2, 2], [45, 35, 20]), 'D');
});
test('share link round trips Unicode query, selected operations and perspective', () => {
  const ids = data.records.map((c) => c.id);
  const r = {
    page: 'compare',
    profile: 'theater',
    compare: ids.slice(0, 3),
    focus: '',
    query: 'ヌヴィレット',
  };
  assert.deepEqual(parseRoute(routeHash(r), ids), r);
  assert.deepEqual(
    parseRoute(
      '#compare?profile=invalid&pick=bad,' +
        ids[0] +
        ',' +
        ids[0] +
        ',' +
        ids[1] +
        ',' +
        ids[2] +
        ',' +
        ids[3],
      ids,
    ),
    { page: 'compare', profile: 'balanced', compare: ids.slice(0, 3), focus: '', query: '' },
  );
  assert.equal(parseRoute('#<script>', ids).page, 'atlas');
});
test('hiragana, katakana, spaces and width variants normalize for character search', () => {
  assert.equal(normalize('ぬゔぃれっと'), normalize('ヌヴィレット'));
  assert.equal(normalize('ｽｸﾛｰｽ'), normalize('スクロース'));
  assert.equal(normalize('主人公 氷'), normalize('主人公・氷'));
});
test('shared support mentions are counted per team, including optional alternatives without treating them as required', () => {
  assert.deepEqual(
    sharedMentions(
      ['フリーナ／シロネン、または鍾離型', 'シロネン／ベネット', 'ベネット、またはフリーナ型'],
      ['フリーナ', 'シロネン', '鍾離', 'ベネット'],
    ),
    ['フリーナ', 'シロネン', 'ベネット'],
  );
  assert.deepEqual(
    sharedMentions(['リネット／ベネット', 'リネット型'], ['リネ', 'リネット', 'ベネット']),
    ['リネット'],
  );
});
