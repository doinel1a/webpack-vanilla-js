/* eslint-disable unicorn/prefer-module */
// @ts-check
const { test, expect } = require('@playwright/test');

test('Test browsers', async ({ page }) => {
  await page.goto('https://studious-adventure-7vrx44grr663r95r-8080.app.github.dev');
  await expect(page).toHaveScreenshot('home.png');
  await page.pause();
});
