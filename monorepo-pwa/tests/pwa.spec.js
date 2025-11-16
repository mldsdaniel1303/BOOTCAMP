import { test, expect } from '@playwright/test';
test('PWA consome API', async ({page})=>{
  await page.goto('/');
  await page.fill('input', '01001000');
  await page.click('button');
  await page.waitForSelector('[data-testid="api-ok"]');
});
