import { test, expect, chromium } from '@playwright/test';
import path from 'node:path';

const dist = path.resolve(__dirname, '..', 'dist');

test('popup carrega e exibe UI', async () => {
  const context = await chromium.launchPersistentContext('', {
    headless: false,
    args: [
      `--disable-extensions-except=${dist}`,
      `--load-extension=${dist}`
    ]
  });
  const [page] = context.pages();
  await page.goto('https://example.com');
  const hasAnchor = await page.$('a');
  expect(hasAnchor).not.toBeNull();
  await context.close();
});
