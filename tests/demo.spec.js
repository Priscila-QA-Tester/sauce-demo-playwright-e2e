const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
});

// --- FIRST TEST (POSITIVE SCENARIO) ---
test('Successful login and add product to cart', async ({ page }) => {

  await page.locator('#user-name').fill('standard_user');
  await page.locator('#password').fill('secret_sauce');
  await page.locator('#login-button').click();
  await expect(page.locator('.title')).toHaveText('Products');
  await page.locator('#add-to-cart-sauce-labs-backpack').click();
});

// --- SECOND TEST (NEGATIVE SCENARIO) ---
test('Validate login error with incorrect password', async ({ page }) => {

  await page.locator('#user-name').fill('standard_user');
  await page.locator('#password').fill('wrong_password_123');
  await page.locator('#login-button').click();
  await expect(page.locator('[data-test="error"]')).toHaveText('Epic sadface: Username and password do not match any user in this service');
});

// --- THIRD TEST (NEGATIVE SCENARIO) ---
test('Validate login error with locked out user', async ({ page }) => {
  
  await page.locator('#user-name').fill('locked_out_user');
  await page.locator('#password').fill('secret_sauce');
  await page.locator('#login-button').click();
  await expect(page.locator('[data-test="error"]')).toHaveText('Epic sadface: Sorry, this user has been locked out.');
});

// --- FOURTH TEST (FULL E2E PURCHASE FLOW) ---
test.only('Validate complete E2E purchase process', async ({ page }) => {
  // 1. Login with a valid user
  await page.locator('#user-name').fill('standard_user');
  await page.locator('#password').fill('secret_sauce');
  await page.locator('#login-button').click();
  
  // 2. Add the backpack to the cart
  await page.locator('#add-to-cart-sauce-labs-backpack').click();
  
  // 3. Click on the cart icon at the top of the page
  await page.locator('.shopping_cart_link').click();
  
  // 4. Click on the Checkout button
  await page.locator('#checkout').click();
  
  // 5. Fill in the delivery details
  await page.locator('#first-name').fill('Priscila');
  await page.locator('#last-name').fill('QA Senior');
  await page.locator('#postal-code').fill('12345-678');
  
  // 6. Click Continue and then Finish
  await page.locator('#continue').click();
  await page.locator('#finish').click();
  
  // 7. Final validation - verify the thank you message is displayed
  await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
});