import {chromium} from 'playwright';
import {expect} from '@playwright/test';
import {mkdirSync,writeFileSync} from 'node:fs';
mkdirSync('artifacts',{recursive:true});
const browser=await chromium.launch({channel:'chrome',headless:true});
const errors=[];const checks=[];const base=process.env.BASE_URL||'http://127.0.0.1:5173';
try{
for(const width of [1440,390]){
const page=await browser.newPage({viewport:{width,height:1000},reducedMotion:'reduce'});
page.on('pageerror',e=>errors.push(e.message));
const go=async route=>{await page.goto(`${base}/#${route}`);await page.locator('main h1').first().waitFor();};
const noOverflow=async name=>{const size=await page.evaluate(()=>({body:document.documentElement.scrollWidth,view:innerWidth}));expect(size.body,`${width} ${name} overflow`).toBeLessThanOrEqual(size.view);};
await go('overview');await expect(page.getByRole('heading',{name:'最上位の5運用'})).toBeVisible();await noOverflow('overview');await page.screenshot({path:`artifacts/overview-${width}.png`,fullPage:true});
await page.keyboard.press('Tab');await page.keyboard.press('Tab');
const outline=await page.locator(':focus').evaluate(el=>getComputedStyle(el).outlineStyle);expect(outline).not.toBe('none');
await go('explore');await page.getByRole('searchbox',{name:'名前を検索'}).focus();await page.keyboard.type('test');await page.keyboard.press('ControlOrMeta+A');await page.keyboard.press('Backspace');await noOverflow('explore');await page.screenshot({path:`artifacts/explore-${width}.png`,fullPage:true});await expect(page.locator('.entry-card')).toHaveCount(77);
await page.getByRole('searchbox',{name:'名前を検索'}).fill('ヌヴィレット');await expect(page.locator('.entry-card')).toHaveCount(1);
await page.getByRole('button',{name:'ヌヴィレットを比較に追加',exact:true}).focus();await page.keyboard.press('Enter');
await page.getByRole('searchbox',{name:'名前を検索'}).fill('存在しない運用');await expect(page.getByRole('heading',{name:'条件に合う運用がありません'})).toBeVisible();await noOverflow('empty');
await page.getByRole('button',{name:'すべての条件を解除',exact:true}).click();
await page.getByLabel('元素',{exact:true}).selectOption('雷');await page.getByLabel('区分',{exact:true}).selectOption('派生');await page.getByLabel('確度',{exact:true}).selectOption('低');await expect(page.locator('.entry-card')).toHaveCount(2);
await page.getByRole('button',{name:'条件をリセット'}).click();await expect(page.locator('.entry-card')).toHaveCount(77);
await page.getByRole('button',{name:'サンドローネを比較に追加',exact:true}).click();await page.getByRole('button',{name:'ヴェスナを比較に追加',exact:true}).click();await page.getByRole('button',{name:'フリンズを比較に追加',exact:true}).click();await expect(page.locator('.comparison-dock .selection-message')).toContainText('最大3運用');
await page.getByRole('link',{name:'比較を見る →'}).click();await expect(page.locator('.comparison')).toHaveCount(3);await noOverflow('compare');await page.screenshot({path:`artifacts/compare-${width}.png`,fullPage:true});
await page.getByRole('button',{name:'ヴェスナを比較から解除',exact:true}).click();await expect(page.locator('.comparison')).toHaveCount(2);await page.getByRole('button',{name:'比較をすべて解除'}).click();await expect(page.getByRole('heading',{name:'比較したい運用を選びましょう'})).toBeVisible();
await go('operation/entry-08');await expect(page.getByRole('heading',{name:'ヌヴィレット',exact:true})).toBeVisible();await expect(page.locator('.score-panel')).toContainText('4.5');await page.reload();await expect(page.getByRole('heading',{name:'ヌヴィレット',exact:true})).toBeVisible();await noOverflow('detail');await page.screenshot({path:`artifacts/detail-${width}.png`,fullPage:true});
await go('method');for(const [name,count] of [['螺旋重視',10],['幽境重視',14],['シアター重視',28],['基準',0]]){await page.getByRole('button',{name,exact:true}).click();await expect(page.locator('.changed b')).toHaveText(`${count} / 77運用`);await expect(page.locator('tr.is-changed')).toHaveCount(count);}await page.getByRole('button',{name:'シアター重視',exact:true}).click();await noOverflow('method');await page.screenshot({path:`artifacts/method-${width}.png`,fullPage:true});
await go('research');await expect(page.locator('.chapter')).toHaveCount(5);await noOverflow('research');
await go('library');await page.getByRole('searchbox',{name:'資料ID・資料名を検索'}).fill('C01');await expect(page.locator('.source-list>a')).toHaveCount(1);await page.locator('.source-list>a').click();await expect(page.getByRole('heading',{name:'採用範囲・留保'})).toBeVisible();await noOverflow('source');
await go('source/G12');await noOverflow('long URL');
await go('source/X00');await expect(page.getByRole('heading',{name:'参照先未解決'})).toBeVisible();
await go('document');await expect(page.getByRole('heading',{name:'原資料全文',exact:true})).toBeVisible();await noOverflow('document');
const response=await page.request.get(`${base}/report_2026-10-28.md`);expect(response.status()).toBe(200);
checks.push({width,result:'passed',coverage:'search, filters, reset, empty results, max-3 comparison, remove, direct detail/reload, presets 0/10/14/28, references, unresolved source, original, download, focus outline, overflow'});
await page.close();
}
expect(errors).toEqual([]);writeFileSync('artifacts/browser-results.json',JSON.stringify({checks,errors},null,2));console.log(JSON.stringify({checks,errors},null,2));
}finally{await browser.close()}
