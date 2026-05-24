const { createBdd } = require('playwright-bdd');
const { Given, When, Then } = createBdd();
const { expect } = require('@playwright/test');

Given('I am on the SauceDemo login page', async ({ page }) => {
  await page.goto('/'); // Vai usar o baseURL que configuramos!
});

When('I fill the username with {string}', async ({ page }, username) => {
  await page.locator('[data-test="username"]').fill(username);
});

When('I fill the password with {string}', async ({ page }, password) => {
  await page.locator('[data-test="password"]').fill(password);
});

When('I click the Login button', async ({ page }) => {
  await page.locator('[data-test="login-button"]').click();
});

Then('I should be redirected to the Products page', async ({ page }) => {
  await expect(page.locator('.title')).toHaveText('Products');
});