export const TIERS = ['SS', 'S', 'A', 'B', 'C', 'D'];
export const PROFILES = [
  {
    id: 'balanced',
    label: '総合バランス',
    short: '基準',
    weights: [45, 35, 20],
    description: '3つの高難度を、資料の基準配分で見る。',
  },
  {
    id: 'abyss',
    label: '螺旋を重視',
    short: '螺旋重視',
    weights: [60, 30, 10],
    description: '多ウェーブ・複数部屋の攻略を重く見る。',
  },
  {
    id: 'onslaught',
    label: '幽境を重視',
    short: '幽境重視',
    weights: [30, 60, 10],
    description: '高HPの単体・固有ギミックを重く見る。',
  },
  {
    id: 'theater',
    label: 'シアターを重視',
    short: 'シアター重視',
    weights: [30, 20, 50],
    description: '出場可能な期の、不完全編成への耐性を重く見る。',
  },
];
export const MODES = ['深境螺旋', '幽境の激戦', '幻想シアター'];
export const TIER_DESCRIPTIONS = {
  SS: '完成編成で最上位候補',
  S: '極めて強い総合戦力',
  A: '高難度で十分強い',
  B: '条件選択・運用上の工夫が増える',
  C: '攻略余裕を作るうえで大きな代償',
  D: '標準条件では特殊運用向け',
};
/** @param {number[]} scores @param {number[]} weights */
export function tierFor(scores, weights) {
  // Half-step scores and integer percentages keep threshold comparisons exact.
  const code = scores.reduce((sum, s, i) => sum + Math.round(s * 2) * weights[i], 0);
  return code >= 880
    ? 'SS'
    : code >= 760
      ? 'S'
      : code >= 640
        ? 'A'
        : code >= 520
          ? 'B'
          : code >= 400
            ? 'C'
            : 'D';
}
/** @param {string} text */
export function normalize(text) {
  return text
    .normalize('NFKC')
    .replace(/[\u30a1-\u30f6]/g, (c) => String.fromCharCode(c.charCodeAt(0) - 0x60))
    .toLowerCase()
    .replace(/[\s・]/g, '');
}
/** @param {string} hash @param {string[]} validIds */
export function parseRoute(hash, validIds) {
  const [path, query = ''] = hash.replace(/^#\/?/, '').split('?');
  const params = new URLSearchParams(query);
  const page = ['atlas', 'compare', 'saved', 'method', 'report'].includes(path) ? path : 'atlas';
  const profile = PROFILES.find((p) => p.id === params.get('profile'))?.id || 'balanced';
  const compare = [...new Set((params.get('pick') || '').split(','))]
    .filter((id) => validIds.includes(id))
    .slice(0, 3);
  return { page, profile, compare, focus: params.get('focus') || '', query: params.get('q') || '' };
}
/** @param {{page: string, profile: string, compare: string[], focus?: string, query?: string}} route */
export function routeHash(route) {
  const p = new URLSearchParams();
  if (route.profile !== 'balanced') p.set('profile', route.profile);
  if (route.compare.length) p.set('pick', route.compare.join(','));
  if (route.focus) p.set('focus', route.focus);
  if (route.query) p.set('q', route.query);
  return `#${route.page}${p.size ? '?' + p.toString() : ''}`;
}
/** @param {string[]} teams @param {string[]} names */
export function sharedMentions(teams, names) {
  const escaped = [...names]
    .sort((a, b) => b.length - a.length)
    .map((n) => n.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  const pattern = new RegExp(escaped.join('|'), 'g');
  const mentions = teams.map((t) => new Set(t.match(pattern) || []));
  return names.filter((name) => mentions.filter((set) => set.has(name)).length > 1);
}
