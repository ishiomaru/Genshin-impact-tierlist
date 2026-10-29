import { chromium, expect } from '@playwright/test';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
const base = process.env.ATLAS_TEST_URL || 'http://127.0.0.1:5173';
const visual = process.argv.includes('--visual-only');
await mkdir('work/screenshots', { recursive: true });
const browser = await chromium.launch({ channel: 'chrome', headless: true });
const results = {
  browser: await browser.version(),
  base,
  checks: [],
  screenshots: [],
  consoleErrors: [],
  localFailures: [],
  accessibility: [],
};
const check = (name) => {
  results.checks.push(name);
  console.log('PASS', name);
};
try {
  const context = await browser.newContext({
    viewport: { width: 1440, height: 1040 },
    deviceScaleFactor: 1,
  });
  const page = await context.newPage();
  page.on('pageerror', (e) => results.consoleErrors.push(e.message));
  page.on('response', (r) => {
    if (r.url().startsWith(base) && r.status() >= 400)
      results.localFailures.push({ url: r.url(), status: r.status() });
  });
  async function shot(name, fullPage = false) {
    await page.screenshot({ path: `work/screenshots/${name}.png`, fullPage });
    results.screenshots.push(name);
  }
  await page.goto(base, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  await page.evaluate(() => scrollTo(0, 0));
  await expect(page.locator('.character-card')).toHaveCount(77);
  check('77 operations visible on baseline atlas');
  await shot('atlas-1440');
  await shot('atlas-full-1440', true);
  if (!visual) {
    for (const [label, count] of [
      ['螺旋を重視', 10],
      ['幽境を重視', 14],
      ['シアターを重視', 28],
    ]) {
      await page.getByRole('button', { name: label, exact: true }).click();
      await expect(page.locator('.change-summary')).toContainText(`${count}運用`);
      check(`${label}: ${count} tier changes`);
    }
    await expect(page.locator('.row-SS')).toContainText('ヌヴィレット');
    await page.getByRole('checkbox', { name: '変動のみ' }).check();
    await expect(page.locator('.character-card')).toHaveCount(28);
    check('changed-only filter matches 28 operations');
    await page.getByRole('button', { name: '総合バランス', exact: true }).click();
    await page.getByRole('combobox', { name: '運用の区分' }).selectOption('derived');
    await expect(page.locator('.character-card')).toHaveCount(24);
    check('derived scope has 24 operations');
    await page.getByRole('combobox', { name: '運用の区分' }).selectOption('all');
    await page.getByRole('button', { name: '水', exact: true }).click();
    await expect(page.locator('.character-card')).toHaveCount(9);
    check('element filter water matches source');
    await page.getByRole('button', { name: 'すべて', exact: true }).click();
    await page.getByRole('searchbox').fill('ぬゔぃれっと');
    await expect(page.locator('.character-card')).toHaveCount(1);
    await expect(page.getByRole('searchbox')).toBeFocused();
    check('hiragana search works without losing input focus');
    await page.getByRole('searchbox').fill('存在しないキャラ');
    await expect(page.getByText('条件に合う運用が見つかりません')).toBeVisible();
    await page.getByRole('button', { name: '絞り込みをリセット' }).click();
    await expect(page.locator('.character-card')).toHaveCount(77);
    check('empty state reset restores atlas');
    await page.getByRole('button', { name: '採点表表示' }).click();
    await expect(page.locator('.data-table tbody tr')).toHaveCount(77);
    check('score table contains all 77 operations');
    await page.getByRole('button', { name: 'Tierボード表示' }).click();
    await page.getByRole('button', { name: 'ヌヴィレットの評価詳細', exact: true }).click();
    await expect(page.getByRole('dialog')).toBeVisible();
    await expect(page.getByRole('dialog')).toContainText('無凸の中断リスク');
    await page.getByRole('button', { name: 'マイリストに保存', exact: true }).click();
    await page
      .getByRole('textbox', { name: 'ヌヴィレットのメモ' })
      .fill('シアター用。フリーナの活力を温存する編成も検討。');
    await page.keyboard.press('Escape');
    await expect(page.getByRole('dialog')).not.toBeVisible();
    await expect(
      page.getByRole('button', { name: 'ヌヴィレットの評価詳細', exact: true }),
    ).toBeFocused();
    check('dialog Escape restores trigger focus');
    await page.reload({ waitUntil: 'networkidle' });
    await page.getByRole('button', { name: 'ヌヴィレットの評価詳細', exact: true }).click();
    await expect(page.getByRole('textbox', { name: 'ヌヴィレットのメモ' })).toHaveValue(
      'シアター用。フリーナの活力を温存する編成も検討。',
    );
    await expect(page.getByRole('button', { name: '保存済み', exact: true })).toHaveAttribute(
      'aria-pressed',
      'true',
    );
    check('saved operation and note survive reload');
    await page.getByRole('button', { name: '比較リストに追加', exact: true }).click();
    await page.getByRole('button', { name: '研究原文の該当箇所へ' }).click();
    await expect(page.locator('.report-content')).toBeVisible();
    await expect(page.locator('.report-content h4')).toHaveCount(77);
    check('full report has 77 detail headings and navigates to selected source');
    const id = await page
      .locator('.report-content h4')
      .filter({ hasText: 'ヌヴィレット —' })
      .getAttribute('id');
    await expect(page.locator('#' + id)).toBeFocused();
    await page.getByRole('link', { name: 'マイリスト', exact: false }).click();
    await expect(page.locator('.character-card')).toHaveCount(1);
    check('my list filters saved operations');
    const download = page.waitForEvent('download');
    await page.getByRole('button', { name: 'メモごと書き出す' }).click();
    const file = await download;
    const path = await file.path();
    const json = JSON.parse(await readFile(path, 'utf8'));
    expect(json.saved.length).toBe(1);
    expect(Object.values(json.notes)[0]).toContain('シアター用');
    check('export downloads actual saved state and notes');
    await page.getByRole('link', { name: '運用を比較', exact: false }).click();
    await page
      .getByRole('combobox', { name: '比較する運用 2', exact: true })
      .selectOption({ label: 'スクロース · 派生' });
    await page
      .getByRole('combobox', { name: '比較する運用 3', exact: true })
      .selectOption({ label: 'サンドローネ · 主対象' });
    await expect(page.locator('.compare-card')).toHaveCount(3);
    await expect(page.locator('.compare-card').filter({ hasText: 'スクロース' })).toContainText(
      '本人の直接ダメージ',
    );
    check('three-way comparison preserves driver caveat');
    await page.getByRole('button', { name: 'シアターを重視', exact: true }).click();
    const link = page.url();
    const shared = await context.newPage();
    await shared.goto(link);
    await expect(shared.locator('.compare-card')).toHaveCount(3);
    await expect(
      shared.getByRole('button', { name: 'シアターを重視', exact: true }),
    ).toHaveAttribute('aria-pressed', 'true');
    await shared.close();
    check('shared URL restores comparison and weights');
    await shot('compare-1440');
    await page.getByRole('button', { name: '比較リンクを共有' }).click();
    check('share action executes');
    await page.getByRole('link', { name: '評価の読み方', exact: true }).click();
    await expect(
      page.getByRole('heading', { name: 'NRは、「Dより下」ではありません。' }),
    ).toBeVisible();
    check('NR explanation and evidence conditions available');
    await shot('method-1440', true);
  }
  for (const width of [768, 390, 320]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto(base + '/#atlas', { waitUntil: 'networkidle' });
    await page.evaluate(() => document.fonts.ready);
    await page.evaluate(() => scrollTo(0, 0));
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(
      true,
    );
    check(`atlas no page overflow at ${width}px`);
    await shot('atlas-' + width);
    if (width === 390) await shot('atlas-full-390', true);
    await page.getByRole('button', { name: 'ヌヴィレットの評価詳細', exact: true }).click();
    await expect(page.getByRole('dialog')).toBeVisible();
    await shot('detail-' + width);
    expect(await page.getByRole('dialog').evaluate((el) => el.scrollWidth <= el.clientWidth)).toBe(
      true,
    );
    check(`detail fits at ${width}px`);
    await page.keyboard.press('Escape');
    if (width === 390) {
      await page.getByRole('link', { name: '運用を比較', exact: false }).click();
      if (!(await page.locator('.compare-card').count()))
        await page.getByRole('button', { name: 'ヌヴィレットとスクロースで試す' }).click();
      await shot('compare-390', true);
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(
        true,
      );
      check('mobile comparison fits viewport');
    }
  }
  if (!visual) {
    const axe = await readFile('node_modules/axe-core/axe.min.js', 'utf8');
    for (const [name, path] of [
      ['atlas', '#atlas'],
      ['compare', '#compare'],
      ['method', '#method'],
      ['report', '#report'],
    ]) {
      await page.setViewportSize({ width: 1440, height: 1000 });
      await page.goto(base + '/' + path, { waitUntil: 'networkidle' });
      await page.addScriptTag({ content: axe });
      const r = await page.evaluate(
        async () =>
          await window.axe.run(document, {
            runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa', 'wcag21aa'] },
          }),
      );
      results.accessibility.push({
        name,
        violations: r.violations.map((v) => ({
          id: v.id,
          impact: v.impact,
          description: v.description,
          nodes: v.nodes.map((n) => ({ target: n.target, summary: n.failureSummary })),
        })),
      });
    }
  }
  await page.setViewportSize({ width: 1100, height: 900 });
  await page.goto(base + '/work/prototypes/');
  await page.getByRole('combobox').selectOption('theater');
  await expect(page.locator('#app')).toContainText('ヌヴィレット');
  await shot('prototype-a');
  await page.getByRole('button', { name: 'B / 条件比較ラボ' }).click();
  await expect(page.locator('.lab')).toContainText('基準 S → 現在 SS');
  await shot('prototype-b');
  check('both prototypes have working condition switching and details');
  expect(results.consoleErrors).toEqual([]);
  expect(results.localFailures).toEqual([]);
  expect(results.accessibility.flatMap((page) => page.violations)).toEqual([]);
  check('no JavaScript exceptions or missing local resources');
} finally {
  await writeFile('work/browser-audit.json', JSON.stringify(results, null, 2) + '\n');
  await browser.close();
}
