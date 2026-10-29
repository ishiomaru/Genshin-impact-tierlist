import { chromium, expect } from '@playwright/test';
import { readFile, writeFile } from 'node:fs/promises';
const base = process.env.ATLAS_TEST_URL || 'http://127.0.0.1:4173';
const browser = await chromium.launch({ channel: 'chrome', headless: true });
const report = {
  browser: await browser.version(),
  base,
  checks: [],
  externalRequests: [],
  errors: [],
  accessibility: [],
};
const pass = (name) => {
  report.checks.push(name);
  console.log('PASS', name);
};
try {
  const context = await browser.newContext({
    viewport: { width: 1440, height: 1000 },
    reducedMotion: 'reduce',
  });
  await context.addInitScript(() => {
    window.__atlasMetrics = { lcp: 0, cls: 0 };
    new PerformanceObserver((entries) => {
      for (const item of entries.getEntries()) window.__atlasMetrics.lcp = item.startTime;
    }).observe({ type: 'largest-contentful-paint', buffered: true });
    new PerformanceObserver((entries) => {
      for (const item of entries.getEntries())
        if (!item.hadRecentInput) window.__atlasMetrics.cls += item.value;
    }).observe({ type: 'layout-shift', buffered: true });
  });
  await context.route('**/*', async (route) => {
    const url = route.request().url();
    if (!url.startsWith(base) && !url.startsWith('data:')) {
      report.externalRequests.push(url);
      await route.abort();
    } else await route.continue();
  });
  const page = await context.newPage();
  page.on('pageerror', (e) => report.errors.push(e.message));
  await page.goto(base, { waitUntil: 'networkidle' });
  await page.evaluate(async () => {
    const images = [...document.querySelectorAll('img')];
    images.forEach((i) => (i.loading = 'eager'));
    await Promise.all(images.map((i) => i.decode()));
  });
  expect(await page.locator('img').count()).toBe(78);
  pass('all 77 portraits and hero decode from local production assets');
  expect(report.externalRequests).toEqual([]);
  pass('production runtime makes no external network requests');
  await page.setViewportSize({ width: 390, height: 900 });
  await page.evaluate(() => scrollTo(0, 0));
  await page.screenshot({ path: 'work/screenshots/atlas-390.png' });
  await page.setViewportSize({ width: 1440, height: 1000 });
  report.localPerformance = await page.evaluate(() => ({
    ...window.__atlasMetrics,
    navigation: performance.getEntriesByType('navigation')[0].toJSON(),
    resources: performance.getEntriesByType('resource').map((r) => ({
      name: r.name,
      duration: r.duration,
      transferSize: r.transferSize,
    })),
    note: 'One unthrottled local Chrome run, not field performance or a CWV conformance claim.',
  }));
  const trigger = page.getByRole('button', { name: 'スクロースの評価詳細', exact: true });
  await trigger.focus();
  await page.keyboard.press('Enter');
  await expect(page.getByRole('dialog')).toBeVisible();
  for (let i = 0; i < 30; i++) {
    await page.keyboard.press('Tab');
    expect(
      await page.evaluate(() => document.querySelector('dialog').contains(document.activeElement)),
    ).toBe(true);
  }
  await page.keyboard.press('Shift+Tab');
  expect(
    await page.evaluate(() => document.querySelector('dialog').contains(document.activeElement)),
  ).toBe(true);
  await page.keyboard.press('Escape');
  await expect(trigger).toBeFocused();
  pass('keyboard Enter, 30 Tabs, Shift+Tab, Escape keep modal focus contained and restore it');
  for (const name of ['サンドローネ', 'ヴェスナ', 'フリンズ'])
    await page.getByRole('button', { name: `${name}を比較に追加`, exact: true }).click();
  await page.getByRole('button', { name: 'ネフェルを比較に追加', exact: true }).click();
  await expect(page.getByRole('status')).toContainText('比較は3運用まで');
  expect(new URLSearchParams(page.url().split('?')[1]).get('pick').split(',')).toHaveLength(3);
  pass('fourth comparison is rejected without losing the first three');
  await page.getByRole('link', { name: '運用を比較', exact: false }).click();
  await page.evaluate(() =>
    Object.defineProperty(navigator, 'clipboard', {
      configurable: true,
      value: {
        writeText: async () => {
          throw Error('blocked');
        },
      },
    }),
  );
  await page.getByRole('button', { name: '比較リンクを共有' }).click();
  const url = await page.locator('.share-fallback input').inputValue();
  expect(url).toContain('pick=');
  expect(url).not.toContain('notes');
  pass('clipboard-denied state provides usable share URL without personal notes');
  await page.getByRole('button', { name: '選択をクリア' }).click();
  await expect(page.locator('.compare-empty')).toBeVisible();
  pass('comparison clear has a useful empty state');
  const axe = await readFile('node_modules/axe-core/axe.min.js', 'utf8');
  for (const width of [768, 390, 320]) {
    await page.setViewportSize({ width, height: 900 });
    for (const path of ['#atlas', '#compare', '#saved', '#method', '#report']) {
      await page.goto(base + '/' + path, { waitUntil: 'networkidle' });
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(
        true,
      );
    }
    pass(`all five pages reflow without outer overflow at ${width}px`);
  }
  await page.goto(base + '/#atlas', { waitUntil: 'networkidle' });
  await page.getByRole('button', { name: 'スクロースの評価詳細', exact: true }).click();
  await page.addScriptTag({ content: axe });
  let a = await page.evaluate(
    async () =>
      await window.axe.run(document, {
        runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa', 'wcag21aa'] },
      }),
  );
  report.accessibility.push({ page: 'detail-320', violations: a.violations });
  await page.keyboard.press('Escape');
  await page.getByRole('link', { name: '運用を比較', exact: false }).click();
  await page.getByRole('button', { name: 'ヌヴィレットとスクロースで試す' }).click();
  await expect(page.locator('.mobile-compare-overview')).toBeVisible();
  await page.addScriptTag({ content: axe });
  a = await page.evaluate(
    async () =>
      await window.axe.run(document, {
        runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa', 'wcag21aa'] },
      }),
  );
  report.accessibility.push({ page: 'compare-320', violations: a.violations });
  pass('mobile side-by-side summary remains operable at 320px');
  await page.screenshot({ path: 'work/screenshots/production-compare-320.png', fullPage: true });
  await page.evaluate(() => {
    document.activeElement?.blur();
    const top = document.querySelector('.mobile-compare-overview').getBoundingClientRect().top;
    scrollTo(0, scrollY + top - 110);
  });
  await page.screenshot({ path: 'work/screenshots/production-compare-summary-320.png' });
  const bad = '{"broken":';
  await page.evaluate((raw) => localStorage.setItem('teyvat-atlas-v1', raw), bad);
  await page.goto(base + '/#saved', { waitUntil: 'networkidle' });
  await page.reload({ waitUntil: 'networkidle' });
  await expect(page.getByRole('alert')).toContainText('読み込めません');
  expect(await page.evaluate(() => localStorage.getItem('teyvat-atlas-v1'))).toBe(bad);
  pass('malformed saved state is reported and preserved until a new save');
  const denied = await browser.newContext({ viewport: { width: 390, height: 900 } });
  await denied.addInitScript(() => {
    Storage.prototype.setItem = function () {
      throw new DOMException('blocked', 'QuotaExceededError');
    };
  });
  const p = await denied.newPage();
  await p.goto(base);
  await p.getByRole('button', { name: 'ヌヴィレットの評価詳細', exact: true }).click();
  await p.getByRole('button', { name: 'マイリストに保存', exact: true }).click();
  await expect(p.getByRole('dialog').getByRole('alert')).toContainText('この端末に保存できません');
  await expect(p.getByRole('button', { name: '画面内で一時保持', exact: true })).toBeVisible();
  await p.getByRole('textbox', { name: 'ヌヴィレットのメモ' }).fill('保存不可時も一時保持');
  await expect(p.locator('.note-status')).toContainText('保存に失敗');
  await p.keyboard.press('Escape');
  await expect(p.getByRole('alert')).toContainText('この端末に保存できません');
  await p.getByRole('button', { name: 'ヌヴィレットの評価詳細', exact: true }).click();
  await expect(p.getByRole('textbox', { name: 'ヌヴィレットのメモ' })).toHaveValue(
    '保存不可時も一時保持',
  );
  pass('storage-denied state reports failure and retains in-session edits');
  await denied.close();
  const fallback = await browser.newContext();
  await fallback.route('**/UI_AvatarIcon_Neuvillette.webp', (r) => r.abort());
  const fp = await fallback.newPage();
  await fp.goto(base);
  await fp.getByRole('button', { name: 'ヌヴィレットの評価詳細', exact: true }).click();
  await expect(fp.getByRole('dialog').locator('.portrait-fallback')).toBeVisible();
  pass('failed portrait falls back to identifying text instead of broken image');
  await fallback.close();
  expect(report.errors).toEqual([]);
  expect(report.accessibility.flatMap((p) => p.violations)).toEqual([]);
  pass('extended production checks have no exceptions or automated accessibility violations');
} finally {
  await writeFile('work/edge-audit.json', JSON.stringify(report, null, 2) + '\n');
  await browser.close();
}
