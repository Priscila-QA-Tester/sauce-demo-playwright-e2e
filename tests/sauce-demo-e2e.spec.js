const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { InventoryPage } = require('../pages/InventoryPage');
const { CartPage } = require('../pages/CartPage');
const { CheckoutPage } = require('../pages/CheckoutPage');

test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
});

// --- FIRST TEST (POSITIVE SCENARIO) ---
test('Successful login and add product to cart', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  await loginPage.login('standard_user', 'secret_sauce');
  expect(await inventoryPage.getTitleText()).toBe('Products');
  await inventoryPage.addBackpackToCart();
});

// --- SECOND TEST (NEGATIVE SCENARIO) ---
test('Validate login error with incorrect password', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.login('standard_user', 'wrong_password_123');
  expect(await loginPage.getErrorMessage()).toBe('Epic sadface: Username and password do not match any user in this service');
});

// --- THIRD TEST (NEGATIVE SCENARIO) ---
test('Validate login error with locked out user', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.login('locked_out_user', 'secret_sauce');
  expect(await loginPage.getErrorMessage()).toBe('Epic sadface: Sorry, this user has been locked out.');
});

// --- FOURTH TEST (FULL E2E PURCHASE FLOW) ---
test('Validate complete E2E purchase process', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  // 1. Login with a valid user
  await loginPage.login('standard_user', 'secret_sauce');
  
  // 2. Add the backpack to the cart
  await inventoryPage.addBackpackToCart();
  
  // 3. Click on the cart icon at the top of the page
  await inventoryPage.goToCart();
  
  // 4. Click on the Checkout button
  await cartPage.proceedToCheckout();
  
  // 5. Fill in the delivery details
  await checkoutPage.fillDeliveryDetails('Priscila', 'QA Senior', '12345-678');
  
  // 6. Click Continue and then Finish
  await checkoutPage.continueCheckout();
  await checkoutPage.finishCheckout();
  
  // 7. Final validation - verify the thank you message is displayed
  expect(await checkoutPage.getCompleteMessage()).toBe('Thank you for your order!');
});
