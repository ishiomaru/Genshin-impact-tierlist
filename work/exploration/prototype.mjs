import research from '/src/data/research.json';
import { PROFILES, TIERS, tierFor } from '/src/model.mjs';

// 原文の評価を再利用。原文にない数値をゲーム性能として生成しない。
const names = ['サンドローネ', 'ヌヴィレット', 'スクロース'];
const records = names.map((name) => research.records.find((r) => r.name === name));
const app = document.querySelector('#app');
const params = new URLSearchParams(location.search);
const concept = ['a', 'b', 'c', 'plan'].includes(params.get('concept')) ? params.get('concept') : 'a';
document.querySelector(`[href="?concept=${concept}"]`).setAttribute('aria-current', 'page');
let profile = 'balanced';
let lowConstellation = false;
let selectedCase = 0;
let teams = ['sand', 'neuv'];
let ownsOdette = true;
let memo = '';
let savedMessage = '';
let activeTeam = 1;
let planCandidateIds = ['vesna', 'neuv', 'sucrose'];
let rosterOdette = 'unknown';
let planMessage = '';
const key = 'genshin-exploration-notebook-v1';
if (concept === 'c') try {
  const saved = JSON.parse(localStorage.getItem(key) || 'null');
  if (saved?.sourceSha256 === research.sourceSha256) {
    memo = typeof saved.memo === 'string' ? saved.memo.slice(0, 2000) : '';
    if (PROFILES.some((p) => p.id === saved.profile)) profile = saved.profile;
    if (Number.isInteger(saved.case) && saved.case >= 0 && saved.case < 3) selectedCase = saved.case;
    savedMessage = 'この版に保存したメモを復元しました。';
  } else if (saved) savedMessage = '別の資料版の保存データです。自動適用していません。';
} catch { savedMessage = '保存データを読み込めません。新たに保存するまで変更しません。'; }
const esc = (v) => String(v).replace(/[&<>"']/g, (c) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const getProfile = () => PROFILES.find((p) => p.id === profile);
const source = (r) => `/#report?focus=source-${r.id}`;
const portrait = (r) => `<img src="${r.portrait}" width="60" height="60" alt="" />`;
const intro = (letter, title, description) => `<div class="intro"><div><div class="kicker">構想 ${letter}</div><h1>${title}</h1><p>${description}</p></div><div class="edition">研究素材 77運用から<br>代表3運用を試作</div></div>`;
const profiles = () => `<div class="profiles" aria-label="評価の重み">${PROFILES.map((p) => `<button data-profile="${p.id}" aria-pressed="${p.id === profile}">${p.short}</button>`).join('')}</div>`;
const bars = (r) => ['螺旋', '幽境', 'シアター'].map((mode, i) => `<div class="metric"><span>${mode}</span><div class="track"><i style="width:${r.scores[i] * 20}%"></i></div><b>${r.scores[i]}</b></div>`).join('');
const band = (scores, weights) => {
  const values = [tierFor(scores, weights)];
  scores.forEach((s, i) => [-0.5, 0.5].forEach((delta) => {
    if (s + delta < 0 || s + delta > 5) return;
    const next = [...scores]; next[i] += delta;
    values.push(tierFor(next, weights));
  }));
  return [...new Set(values)].sort((a, b) => TIERS.indexOf(a) - TIERS.indexOf(b));
};

function renderA() {
  const p = getProfile();
  app.innerHTML = intro('A', 'どの舞台なら、評価が変わる？', '攻略したい舞台から比較する。モード点と、条件が合わない部分を一緒に見る。') +
    `<div class="bar">${profiles()}<span class="small">配分 ${p.weights.join(' / ')}%（螺旋 / 幽境 / シアター）</span></div>
    <label class="toggle-label"><input id="low-constellation" type="checkbox" ${lowConstellation ? 'checked' : ''} /> 自分の★4は0〜2凸が中心</label>
    <p class="note ${lowConstellation ? 'warning' : ''}" id="applicability">${lowConstellation ? '★4完凸の評価条件から外れます。スクロース本人と各編成の★4支援は個別確認が必要です。元のTierを自分の結果として使わず、未検証と扱います。' : '原文の条件：★5無凸・★4完凸・原則Lv.90・非モチーフ。モード点は原著者の0〜5の序数で、DPSや倍率ではありません。'}</p>
    <div class="mobile-matrix"><h2>比較の要点</h2><table><caption>原著者の序数0〜5 / 現在の重み ${p.short}</caption><thead><tr><th scope="col">運用</th>${records.map(r=>`<th scope="col">${r.name}</th>`).join('')}</tr></thead><tbody><tr><th scope="row">Tier</th>${records.map(r=>`<td>${tierFor(r.scores,p.weights)}</td>`).join('')}</tr>${['螺旋','幽境','シアター'].map((mode,i)=>`<tr><th scope="row">${mode}</th>${records.map(r=>`<td>${r.scores[i]}</td>`).join('')}</tr>`).join('')}</tbody></table><p class="small">強みと留保は各運用の説明で確認。</p></div>
    <div class="columns">${records.map((r) => `<article class="card">
      <div class="identity">${portrait(r)}<div><strong>${r.name}</strong><div class="small muted">${r.group === '主' ? '主対象' : '前衛ドライバー'} / 原文の確度 ${r.confidence}</div></div><b class="tier">${tierFor(r.scores,p.weights)}</b></div>
      <span class="origin">原著者の点数</span><div>${bars(r)}</div><p class="small muted">基準 ${r.tier} → ${p.short} ${tierFor(r.scores,p.weights)} / 点数は固定</p>
      <p class="verdict">${r.verdict}</p>
      <p class="caveat"><b>結論と一緒に読む条件</b>${r.caveat}</p>
      <div class="sensitivity"><span class="origin calculation">今回の算術</span><br>1軸だけ±0.5を仮置きすると <b>${band(r.scores,p.weights).join(' / ')}</b><br><span class="small">統計的な区間でも、評価の修正案でもありません。</span></div>
      <details><summary>編成と原文を見る</summary><p>${r.team}</p><a href="${source(r)}">原文 ${r.detailLine}行付近を確認 →</a></details>
    </article>`).join('')}</div>
    <p class="version">重みの変更と、モード点を仮に変える検査は別の操作です。所持・凸・敵に合わせたTierの自動再評価は行っていません。</p>`;
}

// 明示された4人の代表例を人手で分離。曖昧な「等」「または」を全候補へ展開しない。
const recipes = [
  {id:'sand',lead:'サンドローネ',members:['サンドローネ','八重神子','オデット','エスコフィエ'],line:238,note:'個別欄の代表例。八重は基準の無凸。八重1凸の外部公開値とは別条件。'},
  {id:'neuv',lead:'ヌヴィレット',members:['ヌヴィレット','フリーナ','シロネン','楓原万葉'],line:310,note:'個別欄の最初の型。鍾離＋異元素2枠型は具体枠が未確定のため自動生成しない。'},
  {id:'sucrose',lead:'スクロース',members:['スクロース','イネファ','コロンビーナ','フィッシュル'],line:400,note:'前衛ドライバーの代表例。スクロース本人とフィッシュルは基準の完凸。'},
  {id:'vesna',lead:'ヴェスナ',members:['ヴェスナ','オデット','ヴォジャニーツァ','ファルザン'],line:248,note:'個別欄の代表例。原文のヴェスナとサンドローネはオデットを共有。'},
  {id:'mavuika',lead:'マーヴィカ',members:['マーヴィカ','シロネン','シトラリ','ベネット'],line:290,note:'個別欄の代表例。ベネットは基準の完凸。'}
];
if (concept === 'plan') {
  teams = ['sand','vesna'];
  try {
    const saved = JSON.parse(localStorage.getItem('genshin-exploration-plan-v1') || 'null');
    if (saved?.sourceSha256 === research.sourceSha256 && Array.isArray(saved.teams) && [2,3].includes(saved.teams.length) && saved.teams.every(id=>recipes.some(r=>r.id===id))) {
      teams=saved.teams;
      if(PROFILES.some(p=>p.id===saved.profile))profile=saved.profile;
      if(['unknown','owned','missing'].includes(saved.rosterOdette))rosterOdette=saved.rosterOdette;
      planMessage='この資料版の検討を復元しました。';
    } else if(saved) planMessage='保存した資料版または形式が異なるため、自動適用していません。';
  } catch {planMessage='保存データを読み込めません。新たに保存するまで変更しません。';}
}
function renderB() {
  const current = teams.map((id) => recipes.find((r) => r.id === id));
  const counts = new Map();
  current.forEach((r) => r.members.forEach((name) => counts.set(name,(counts.get(name)||0)+1)));
  const conflicts = [...counts].filter(([,n]) => n>1).map(([name])=>name);
  const missing = !ownsOdette && counts.has('オデット') ? ['オデット'] : [];
  app.innerHTML = intro('B', '強い編成を、同時に組めるか。', '具体的な4枠を並べ、取り合う支援と未所持枠を見つける。Tierの合計から最適編成を作らない。') +
    `<div class="bar"><div class="profiles"><button data-count="2" aria-pressed="${teams.length===2}">2編成</button><button data-count="3" aria-pressed="${teams.length===3}">3編成</button></div><label class="toggle-label"><input id="owns-odette" type="checkbox" ${ownsOdette?'checked':''} /> オデットを所持している</label></div>
    <p class="allocation-summary ${conflicts.length||missing.length?'warning':''}" aria-live="polite">選択した枠の照合：重複 ${conflicts.length?conflicts.join('、'):'なし'} / 未所持 ${missing.length?missing.join('、'):'指定範囲ではなし'}<br><span class="small">攻略可否・未入力の所持状況は未判定。</span></p>
    <div class="allocation"><div class="teams">${current.map((r,i)=>`<article class="team"><div class="team-top"><b>編成 ${i+1}</b><select aria-label="編成 ${i+1}の代表例" data-team="${i}">${recipes.map((option)=>`<option value="${option.id}" ${r.id===option.id?'selected':''}>${option.lead}の代表例</option>`).join('')}</select></div>
    <div class="slots">${r.members.map((name,j)=>`<div class="slot ${conflicts.includes(name)?'conflict':''} ${missing.includes(name)?'missing':''}"><small>${j===0?'前衛':'味方'}</small><b>${name}</b>${conflicts.includes(name)?'<small>枠が重複</small>':''}${missing.includes(name)?'<small>未所持</small>':''}</div>`).join('')}</div><p>${r.note}</p><a class="small" href="${source(research.records.find(c=>c.name===r.lead))}">原文 ${r.line}行付近 →</a></article>`).join('')}</div>
    <aside class="ledger" aria-live="polite"><span class="label">割当の確認 / 今回の集合照合</span><h2>${conflicts.length?'重複を解く必要あり':missing.length?'未所持枠あり':'選択例の枠重複なし'}</h2>
    <strong>重複：${conflicts.length?conflicts.join('、'):'なし'}</strong><strong>未所持：${missing.length?missing.join('、'):'この試作で指定した範囲ではなし'}</strong>
    <p class="small">${conflicts.length?'同じキャラを別の編成へ同時に割り当てています。代表例を変えて確認できます。':'重複がないことだけを確認しました。敵との相性・攻略成功は未判定です。'}</p>
    <p class="note warning">所持入力はオデットだけの試作です。全所持・凸・育成が揃う判定ではありません。自動の代替推薦はありません。</p><p class="small">幻想シアターの活力・元素制約・期別出場条件はこの配分モデルの対象外です。</p>
    </aside></div>
    <details class="collapsed-bar"><summary>比較に使った原文の3運用</summary><div class="columns">${records.map(r=>`<article class="card"><h3>${r.name} / 原文 ${r.tier}</h3><p>${r.verdict}</p><p class="caveat">${r.caveat}</p></article>`).join('')}</div></details>`;
}

function renderPlan() {
  const current=teams.map(id=>recipes.find(r=>r.id===id));
  const counts=new Map();
  current.forEach(r=>r.members.forEach(name=>counts.set(name,(counts.get(name)||0)+1)));
  const conflicts=[...counts].filter(([,n])=>n>1).map(([name])=>name);
  const others=new Set(current.filter((_,i)=>i!==activeTeam).flatMap(r=>r.members));
  app.innerHTML=intro('A＋B','比べて、仮置きして、編成を決める。','評価の高さと、同時に組めることを分けて検討する。支援の取り合いがあれば、候補の比較へ戻る。')+
    `<div class="bar">${profiles()}<span class="small">原文の点数固定 / 配分 ${getProfile().weights.join('・')}%</span></div>
    <p class="note">Tierは完成編成に対する原著者の参考評価です。仮置きした4人のDPS・今期ボスの適性・攻略成功は計算していません。★5無凸・★4完凸などの原文条件を維持します。</p>
    <div class="plan-layout"><section class="plan-board" id="plan-allocation" aria-label="現在の編成配分"><div class="section-title"><h2>いまの配分</h2><div class="profiles"><button data-count="2" aria-pressed="${teams.length===2}">2編成</button><button data-count="3" aria-pressed="${teams.length===3}">3編成</button></div></div>
    <p class="plan-status ${conflicts.length?'warning':''}" aria-live="polite">${conflicts.length?`重複：${conflicts.join('、')}`:'選択枠の重複なし'}<br><span class="small">所持・凸・育成が揃う判定は未完了。</span></p>
    ${current.map((r,i)=>`<article class="team ${activeTeam===i?'target-team':''}"><div class="target-heading"><h3>編成 ${i+1} / ${r.lead}</h3><button data-active-target="${i}" aria-pressed="${activeTeam===i}">${activeTeam===i?'比較中':'この枠を比較'}</button></div><div class="slots">${r.members.map((name,j)=>`<div class="slot ${conflicts.includes(name)?'conflict':''} ${name==='オデット'&&rosterOdette==='missing'?'missing':''}"><small>${j===0?'前衛':'味方'}</small><b>${name}</b>${conflicts.includes(name)?'<small>枠が重複</small>':''}${name==='オデット'&&rosterOdette==='missing'?'<small>未所持</small>':''}</div>`).join('')}</div></article>`).join('')}
    <label class="roster-field">オデットの所持状況<select id="plan-roster">${[['unknown','未入力'],['owned','所持'],['missing','未所持']].map(([v,t])=>`<option value="${v}" ${rosterOdette===v?'selected':''}>${t}</option>`).join('')}</select></label><p class="small muted">所持入力は1人だけの試作。他のキャラは未入力として扱います。</p>
    <div class="plan-save"><button id="save-plan">この版の検討を保存</button><p id="plan-message" role="status">${esc(planMessage)}</p></div></section>
    <section id="plan-candidates" class="plan-candidates" aria-label="編成候補の比較"><div class="section-title"><div><span class="kicker">編成 ${activeTeam+1}を検討中</span><h2>候補を比べ、4枠を仮置きする</h2></div><label class="small">比較候補3<select aria-label="比較候補3" id="plan-candidate-third">${recipes.map(r=>`<option value="${r.id}" ${planCandidateIds[2]===r.id?'selected':''}>${r.lead}</option>`).join('')}</select></label></div>
    <div class="plan-candidate-list">${planCandidateIds.map(id=>{
      const recipe=recipes.find(r=>r.id===id),r=research.records.find(r=>r.name===recipe.lead);
      const overlaps=recipe.members.filter(name=>others.has(name));
      return `<article class="card plan-candidate"><div class="identity">${portrait(r)}<div><strong>${r.name}</strong><div class="small muted">原文の参考Tier / ${getProfile().short}</div></div><b class="tier">${tierFor(r.scores,getProfile().weights)}</b></div><div class="plan-candidate-content"><div><p class="small"><b>モード点：${r.scores.join(' / ')}</b><br>螺旋 / 幽境 / シアター、序数0〜5</p><p class="verdict">${r.verdict}</p><p class="caveat">${r.caveat}</p></div><div><span class="origin calculation">他の編成との集合照合</span><p class="overlap ${overlaps.length?'warning':''}">${overlaps.length?`仮置きすると重複：${overlaps.join('、')}`:'他の編成との枠重複なし'}</p><p class="small">${recipe.members.join(' / ')}</p>${recipe.members.includes('オデット')&&rosterOdette!=='owned'?`<p class="small warning">オデット：${rosterOdette==='missing'?'未所持':'所持未入力'}</p>`:''}<button data-apply-recipe="${id}">編成${activeTeam+1}に仮置き</button><details><summary>この代表例の条件・根拠</summary><p>${recipe.note}</p><a href="${source(r)}">原文 ${recipe.line}行付近 →</a></details></div></div></article>`;
    }).join('')}</div><p class="version">代表例5件だけの試作です。任意の4人編成や自動代替は未実装。枠重複がない候補でも、最適・攻略可能とは判定しません。</p></section></div>`;
}

const cases = [
  {question:'なぜSからSSになる？',index:1,claim:'ヌヴィレットは、シアター重視でSS。',context:'シアターの出場可能な期に、不完全編成への耐性を重く見た結果。出場できない月を0点にした評価ではありません。',external:'参照先C19の本文を取得。強化重撃と前衛運用の説明を確認しました。表示版は「Luna IV」であり、7.1のTier判断全体を検証したものではありません。',url:'https://keqingmains.com/q/neuvillette-quickguide/',ref:'C19 / KQM',status:'仕様説明の一部を照合 / Tierは独立未検証'},
  {question:'スクロースのSは何の強さ？',index:2,claim:'本人の直接火力だけを評価したSではない。',context:'能動的な拡散・支援で編成全体を成立させる前衛の評価です。同じSでも、ヌヴィレットとダメージの分担が同じとは限りません。',external:'参照先C74の本文を取得。熟知支援と、前衛ドライバーになれる型の説明を確認しました。表示版は「Luna VI」。原文のSという採点を直接裏づける統一比較ではありません。',url:'https://keqingmains.com/q/sucrose-quickguide/',ref:'C74 / KQM',status:'役割説明の一部を照合 / Tierは独立未検証'},
  {question:'公開180.56Kを採用しない理由は？',index:0,claim:'無凸サンドローネの標準DPSとして使わない。',context:'外部の公開計算は八重神子1凸・七七2凸。本人が無凸でも「全員無凸」の比較にはなりません。無凸の数値へ補正していません。',external:'G14の本文に180.56K、20秒、八重神子C1・七七C2の表記を確認しました。計算エンジンの全仮定や原文のSS判定の妥当性は、今回検証していません。',url:'https://gwisted.com/games/genshin-impact/calculations/510c773f-db9e-4428-a4aa-0f93aa8cdf63',ref:'G14 / Gwisted',status:'公開値の条件差を照合 / DPSの再現は未実施'}
];
function renderC() {
  const c=cases[selectedCase],r=records[c.index],p=getProfile();
  app.innerHTML = intro('C', 'その判断を、あとから確かめられる。', '結論・条件・確かめた範囲をひと続きに読む。比較の前提と自分の判断を、資料の版に結びつけて残す。') +
    `<div class="notebook"><nav class="questions" aria-label="研究の問い">${cases.map((item,i)=>`<button data-case="${i}" aria-pressed="${selectedCase===i}"><small>問い ${i+1}</small>${item.question}</button>`).join('')}<p class="small muted">サンドローネ・ヌヴィレット・スクロースの3事例。外部照合：2026.10.29</p></nav>
    <article class="case"><div class="case-head"><div><span class="kicker">問い ${selectedCase+1} / ${r.name}</span><h2>${c.claim}</h2></div>${portrait(r)}</div>
    <section class="trace"><div class="step">01</div><div><span class="origin">原著者の判断 / 2026.10.28</span><h3>${r.name}：基準 ${r.tier}</h3><p>${r.verdict}</p><p class="note warning">${r.caveat}</p><a href="${source(r)}">研究原文 ${r.detailLine}行付近 →</a></div></section>
    <section class="trace"><div class="step">02</div><div><span class="origin calculation">同じ点数から再計算</span>${profiles()}<div class="math">${r.tier} → ${tierFor(r.scores,p.weights)} <small>${p.short} / ${p.weights.join('・')}%</small></div><p>点数 ${r.scores.join(' / ')} は固定。序数の重み付けで、実測の再評価ではありません。</p><p class="note">${c.context}</p></div></section>
    <section class="trace"><div class="step">03</div><div><span class="origin external">今回の外部照合 / 本文取得</span><h3>${c.status}</h3><p>${c.external}</p><p class="source-meta">取得日 2026.10.29 / 元資料の主張と今回の確認を分離</p><a href="${c.url}" target="_blank" rel="noreferrer">${c.ref}の本文（新しいタブ）→</a></div></section>
    <details class="collapsed-bar"><summary>3運用の現在の比較を開く</summary><div class="columns">${records.map(item=>`<div class="sensitivity"><b>${item.name} ${tierFor(item.scores,p.weights)}</b><br>${item.scores.join(' / ')}<br><span class="small">${item.caveat}</span></div>`).join('')}</div></details>
    <div class="memo"><label for="memo">自分の比較メモ <span class="small muted">端末内保存 / 2000文字まで</span></label><textarea id="memo" maxlength="2000" placeholder="この条件を自分の編成に使えるか、次に確かめたいこと…">${esc(memo)}</textarea><button id="save-note">この版と比較条件を保存</button><span role="status">${esc(savedMessage)}</span></div>
    <p class="version">研究版：2026.10.28 / SHA-256 ${research.sourceSha256}<br>過去版はまだありません。重み切替は過去の更新履歴とは区別します。別の資料版のメモは自動で読み替えません。</p></article></div>`;
}
function render(focusSelector) {
  ({a:renderA,b:renderB,c:renderC,plan:renderPlan}[concept])();
  if(focusSelector) app.querySelector(focusSelector)?.focus({preventScroll:true});
}
app.addEventListener('click',(event)=>{
  const button=event.target.closest('button');
  if(!button)return;
  if(button.dataset.profile){profile=button.dataset.profile;savedMessage='';planMessage='比較条件は未保存です。';render(`[data-profile="${profile}"]`);}
  if(button.dataset.count){teams=Number(button.dataset.count)===2?teams.slice(0,2):[...teams.slice(0,2),recipes.find(r=>!teams.slice(0,2).includes(r.id)).id];activeTeam=Math.min(activeTeam,teams.length-1);planMessage='配分は未保存です。';render(`[data-count="${teams.length}"]`);}
  if(button.dataset.activeTarget!==undefined){activeTeam=Number(button.dataset.activeTarget);render(`[data-active-target="${activeTeam}"]`);app.querySelector('#plan-candidates').scrollIntoView({block:'start'});}
  if(button.dataset.applyRecipe){teams[activeTeam]=button.dataset.applyRecipe;planMessage='仮置きしました。配分は未保存です。';render(`[data-active-target="${activeTeam}"]`);app.querySelector('#plan-allocation').scrollIntoView({block:'start'});}
  if(button.id==='save-plan'){
    try{localStorage.setItem('genshin-exploration-plan-v1',JSON.stringify({schemaVersion:1,sourceSha256:research.sourceSha256,teams,profile,rosterOdette}));planMessage='この資料版・比較条件・配分を端末に保存しました。';}
    catch{planMessage='端末に保存できません。配分は画面内だけに保持しています。';}
    app.querySelector('#plan-message').textContent=planMessage;
  }
  if(button.dataset.case){selectedCase=Number(button.dataset.case);savedMessage='';render(`[data-case="${selectedCase}"]`);}
  if(button.id==='save-note'){
    try{localStorage.setItem(key,JSON.stringify({schemaVersion:1,sourceSha256:research.sourceSha256,profile,case:selectedCase,memo,comparedOperations:records.map(r=>r.id)}));savedMessage='この版・比較条件・メモを端末に保存しました。';}
    catch{savedMessage='端末に保存できません。入力はこの画面内だけに保持しています。';}
    app.querySelector('[role=status]').textContent=savedMessage;
  }
});
app.addEventListener('change',(event)=>{
  const target=event.target;
  if(target.id==='low-constellation'){lowConstellation=target.checked;render('#low-constellation');}
  if(target.id==='owns-odette'){ownsOdette=target.checked;render('#owns-odette');}
  if(target.dataset.team!==undefined){teams[Number(target.dataset.team)]=target.value;render(`[data-team="${target.dataset.team}"]`);}
  if(target.id==='plan-candidate-third'){planCandidateIds[2]=target.value;render('#plan-candidate-third');}
  if(target.id==='plan-roster'){rosterOdette=target.value;planMessage='所持設定は未保存です。';render('#plan-roster');}
});
app.addEventListener('input',(event)=>{if(event.target.id==='memo'){memo=event.target.value;savedMessage='未保存の変更があります。';app.querySelector('[role=status]').textContent=savedMessage;}});
render();
