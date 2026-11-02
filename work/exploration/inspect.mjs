import { chromium, expect } from '@playwright/test';
import { mkdir, writeFile, readFile } from 'node:fs/promises';
const base = 'http://127.0.0.1:5173';
const output = 'work/exploration/evidence';
await mkdir(output, {recursive:true});
const browser = await chromium.launch({channel:'chrome',headless:true});
const results = {date:'2026-10-29',browser:await browser.version(),checks:[],observations:{},screenshots:[],errors:[],accessibility:[]};
const pass = (name) => {results.checks.push(name);console.log('PASS',name);};
const capture = async (p,name,fullPage=false) => {await p.screenshot({path:`${output}/${name}.png`,fullPage});results.screenshots.push(name);};
try {
  const context = await browser.newContext({viewport:{width:1440,height:1040},reducedMotion:'reduce'});
  const page = await context.newPage();
  page.on('pageerror',e=>results.errors.push(e.message));
  await page.goto(base,{waitUntil:'networkidle'});
  await page.evaluate(()=>document.fonts.ready);
  results.observations.v1 = [];
  for (const width of [1440,390,320]) {
    await page.setViewportSize({width,height:900});
    await page.evaluate(()=>scrollTo(0,0));
    results.observations.v1.push(await page.evaluate(()=>({
      width:innerWidth,heroHeight:document.querySelector('.hero').getBoundingClientRect().height,
      searchY:document.querySelector('input[type=search]').getBoundingClientRect().top,
      firstCardY:document.querySelector('.character-card').getBoundingClientRect().top,
      chipFont:getComputedStyle(document.querySelector('.conditions-chips span')).fontSize,
      bodyOverflow:document.documentElement.scrollWidth>innerWidth
    })));
    await capture(page,`v1-first-screen-${width}`);
  }
  await page.setViewportSize({width:1440,height:1000});
  await page.getByRole('searchbox').fill('ヌヴィレット');
  const filteredCount=await page.locator('.character-card').count();
  const filteredUrl=page.url();
  await page.reload({waitUntil:'networkidle'});
  results.observations.searchReload={beforeCount:filteredCount,afterCount:await page.locator('.character-card').count(),url:filteredUrl};
  pass('observed whether typed search survives reload');
  await page.getByRole('button',{name:'ヌヴィレットの評価詳細',exact:true}).click();
  const detailUrl=page.url();
  await page.reload({waitUntil:'networkidle'});
  results.observations.detailReload={url:detailUrl,dialogVisible:await page.getByRole('dialog').isVisible()};
  pass('observed whether detail can be restored from URL');
  await page.getByRole('searchbox').fill('香菱');
  await expect(page.getByText('条件に合う運用が見つかりません')).toBeVisible();
  await capture(page,'v1-nr-search',true);
  await page.getByRole('button',{name:'絞り込みをリセット'}).click();
  await page.getByRole('link',{name:'運用を比較',exact:false}).click();
  await page.getByRole('button',{name:'ヌヴィレットとスクロースで試す'}).click();
  await page.getByRole('combobox',{name:'比較する運用 3',exact:true}).selectOption({label:'サンドローネ · 主対象'});
  for (const width of [1440,390]) {
    await page.setViewportSize({width,height:900});
    await page.evaluate(()=>scrollTo(0,0));
    results.observations[`comparison-${width}`]=await page.evaluate(()=>({height:document.documentElement.scrollHeight,sharedSupportY:document.querySelector('.support-notice').getBoundingClientRect().top,firstCaveatY:document.querySelector('.caveat-section').getBoundingClientRect().top}));
    if(width===390) {
      await page.locator('.mobile-compare-overview').scrollIntoViewIfNeeded();
      await capture(page,'v1-mobile-comparison-summary');
      await page.locator('.support-notice').scrollIntoViewIfNeeded();
      await capture(page,'v1-mobile-support-note');
    }
  }
  await context.close();

  const proto = await browser.newContext({viewport:{width:1440,height:1040},reducedMotion:'reduce'});
  const p = await proto.newPage();
  p.on('pageerror',e=>results.errors.push(e.message));
  const axe = await readFile('node_modules/axe-core/axe.min.js','utf8');
  for(const concept of ['a','b','c','plan']) {
    await p.goto(`${base}/work/exploration/?concept=${concept}`,{waitUntil:'networkidle'});
    await p.evaluate(()=>document.fonts.ready);
    await p.setViewportSize({width:1440,height:1040});
    await capture(p,`${concept}-desktop`,true);
    for(const width of [390,320]) {
      await p.setViewportSize({width,height:900});
      await p.evaluate(()=>scrollTo(0,0));
      expect(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
      await capture(p,`${concept}-${width}`,true);
      pass(`${concept}: no outer overflow at ${width}px`);
    }
    await p.addScriptTag({content:axe});
    const a=await p.evaluate(async()=>await window.axe.run(document,{runOnly:{type:'tag',values:['wcag2a','wcag2aa','wcag21aa']}}));
    results.accessibility.push({concept,width:320,violations:a.violations.map(v=>({id:v.id,nodes:v.nodes.map(n=>({target:n.target,summary:n.failureSummary}))}))});
    expect(a.violations).toEqual([]);
    if(concept==='a'){
      await p.getByRole('button',{name:'シアター重視',exact:true}).click();
      await expect(p.locator('.card').nth(1).locator('.tier')).toHaveText('SS');
      await expect(p.locator('.card').nth(2).locator('.tier')).toHaveText('A');
      await p.getByLabel('自分の★4は0〜2凸が中心').check();
      await expect(p.locator('#applicability')).toContainText('未検証');
      await capture(p,'a-outside-scope-320',true);
      pass('A: mode switching and low-constellation scope warning');
    }
    if(concept==='b'){
      await p.getByRole('combobox',{name:'編成 2の代表例'}).selectOption('vesna');
      await expect(p.locator('.ledger')).toContainText('重複：オデット');
      await expect(p.locator('.slot.conflict')).toHaveCount(2);
      await p.getByLabel('オデットを所持している').uncheck();
      await expect(p.locator('.slot.missing')).toHaveCount(2);
      await capture(p,'b-conflict-missing-320',true);
      await p.getByRole('combobox',{name:'編成 2の代表例'}).selectOption('sucrose');
      await expect(p.locator('.ledger')).toContainText('重複：なし');
      await p.getByRole('button',{name:'3編成',exact:true}).click();
      await expect(p.locator('.team')).toHaveCount(3);
      await p.getByRole('combobox',{name:'編成 3の代表例'}).selectOption('sucrose');
      await expect(p.locator('.ledger')).toContainText('重複を解く必要あり');
      pass('B: conflicts, missing roster, resolution and three-team state');
    }
    if(concept==='c'){
      await p.getByRole('button',{name:/公開180.56Kを採用しない理由/}).click();
      await expect(p.locator('.case')).toContainText('八重神子1凸・七七2凸');
      await capture(p,'c-evidence-320',true);
      await p.getByRole('button',{name:'シアター重視',exact:true}).click();
      await p.getByLabel('自分の比較メモ',{exact:false}).fill('味方の凸条件を先に確認。SSはDPS順を意味しない。');
      await p.getByRole('button',{name:'この版と比較条件を保存'}).click();
      await expect(p.getByRole('status')).toContainText('端末に保存しました');
      await p.reload({waitUntil:'networkidle'});
      await expect(p.getByLabel('自分の比較メモ',{exact:false})).toHaveValue('味方の凸条件を先に確認。SSはDPS順を意味しない。');
      await expect(p.getByRole('button',{name:'シアター重視',exact:true})).toHaveAttribute('aria-pressed','true');
      const saved=await p.evaluate(()=>JSON.parse(localStorage.getItem('genshin-exploration-notebook-v1')));
      expect(saved.sourceSha256).toHaveLength(64);
      expect(saved.comparedOperations).toHaveLength(3);
      pass('C: claim evidence and snapshot-bound note reload');
      await p.evaluate(()=>localStorage.setItem('genshin-exploration-notebook-v1',JSON.stringify({sourceSha256:'incompatible-test-fixture',memo:'他版テスト'})));
      await p.reload({waitUntil:'networkidle'});
      await expect(p.getByRole('status')).toContainText('別の資料版');
      await expect(p.getByLabel('自分の比較メモ',{exact:false})).toHaveValue('');
      pass('C: different snapshot is not silently applied');
    }
    if(concept==='plan'){
      await expect(p.locator('.plan-status')).toContainText('重複：オデット');
      await expect(p.locator('[data-apply-recipe=neuv]')).toHaveText('編成2に仮置き');
      await p.locator('#plan-roster').selectOption('missing');
      await expect(p.locator('.plan-board .slot.missing')).toHaveCount(2);
      await p.getByRole('button',{name:'シアター重視',exact:true}).click();
      await expect(p.locator('.plan-candidate').filter({hasText:'ヌヴィレット'}).locator('.tier')).toHaveText('SS');
      await capture(p,'plan-conflict-320',true);
      await p.locator('[data-apply-recipe=neuv]').click();
      await expect(p.locator('.plan-status')).toContainText('選択枠の重複なし');
      await expect(p.locator('.plan-board .team').nth(1)).toContainText('ヌヴィレット');
      await p.getByRole('button',{name:'この版の検討を保存',exact:true}).click();
      await expect(p.locator('#plan-message')).toContainText('端末に保存しました');
      await p.reload({waitUntil:'networkidle'});
      await expect(p.locator('.plan-board .team').nth(1)).toContainText('ヌヴィレット');
      await expect(p.getByRole('button',{name:'シアター重視',exact:true})).toHaveAttribute('aria-pressed','true');
      await expect(p.locator('#plan-roster')).toHaveValue('missing');
      await capture(p,'plan-resolved-320',true);
      pass('A+B: compare, preview conflict, place recipe, resolve overlap and reload saved snapshot');
      await p.locator('[data-active-target="0"]').click();
      await expect(p.locator('#plan-candidates')).toContainText('編成 1を検討中');
      await p.locator('[data-apply-recipe=sucrose]').click();
      await expect(p.locator('.plan-board .slot.missing')).toHaveCount(0);
      pass('A+B: return to another allocation slot and replace a missing-support recipe');
    }
  }
  await proto.close();
  const denied=await browser.newContext();
  await denied.addInitScript(()=>{Storage.prototype.setItem=function(){throw new DOMException('blocked','QuotaExceededError');};});
  const d=await denied.newPage();
  await d.goto(`${base}/work/exploration/?concept=c`,{waitUntil:'networkidle'});
  await d.getByLabel('自分の比較メモ',{exact:false}).fill('一時保持');
  await d.getByRole('button',{name:'この版と比較条件を保存'}).click();
  await expect(d.getByRole('status')).toContainText('端末に保存できません');
  await expect(d.getByLabel('自分の比較メモ',{exact:false})).toHaveValue('一時保持');
  pass('C: save failure is explicit and text stays in the session');
  await d.goto(`${base}/work/exploration/?concept=plan`,{waitUntil:'networkidle'});
  await d.locator('[data-apply-recipe=neuv]').click();
  await d.getByRole('button',{name:'この版の検討を保存',exact:true}).click();
  await expect(d.locator('#plan-message')).toContainText('端末に保存できません');
  await expect(d.locator('.plan-board .team').nth(1)).toContainText('ヌヴィレット');
  pass('A+B: storage denial keeps tentative allocation without claiming persistence');
  await denied.close();
  expect(results.errors).toEqual([]);
} finally {
  await writeFile(`${output}/inspection.json`,JSON.stringify(results,null,2)+'\n');
  await browser.close();
}
