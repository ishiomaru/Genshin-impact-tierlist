// One-time local asset optimization. Re-run after fetch-assets.py when refreshing imagery.
import { chromium } from '@playwright/test';
import { readdir, readFile, writeFile, mkdir, rename } from 'node:fs/promises';
const browser = await chromium.launch({ channel: 'chrome', headless: true });
try {
  const page = await browser.newPage();
  await page.goto('http://127.0.0.1:5173/');
  const files = (await readdir('public/assets')).filter((f) => f.endsWith('.png'));
  let before = 0,
    after = 0;
  await mkdir('/private/tmp/teyvat-atlas-raw-assets', { recursive: true });
  for (const file of files) {
    const result = await page.evaluate(
      async ({ file }) => {
        const img = new Image();
        img.src = '/assets/' + file;
        await img.decode();
        const max = file.startsWith('neuvillette-splash') ? 1100 : 160;
        const scale = Math.min(1, max / Math.max(img.naturalWidth, img.naturalHeight));
        const canvas = document.createElement('canvas');
        canvas.width = Math.round(img.naturalWidth * scale);
        canvas.height = Math.round(img.naturalHeight * scale);
        canvas.getContext('2d').drawImage(img, 0, 0, canvas.width, canvas.height);
        return canvas.toDataURL('image/webp', 0.87).split(',')[1];
      },
      { file },
    );
    const buffer = Buffer.from(result, 'base64');
    before += (await readFile('public/assets/' + file)).length;
    after += buffer.length;
    await writeFile('public/assets/' + file.replace(/\.png$/, '.webp'), buffer);
    await rename('public/assets/' + file, '/private/tmp/teyvat-atlas-raw-assets/' + file);
  }
  const map = JSON.parse(await readFile('src/data/assets.json', 'utf8'));
  for (const item of Object.values(map))
    if (item.portrait) item.portrait = item.portrait.replace(/\.png$/, '.webp');
  await writeFile('src/data/assets.json', JSON.stringify(map, null, 2) + '\n');
  console.log(
    JSON.stringify({
      images: files.length,
      bytesBefore: before,
      bytesAfter: after,
      reduction: 1 - after / before,
    }),
  );
} finally {
  await browser.close();
}
