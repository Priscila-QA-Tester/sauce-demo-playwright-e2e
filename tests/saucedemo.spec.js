const { test, expect } = require('@playwright/test');

test.describe('SauceDemo E2E Tests', () => {

  // Scenario: Successfully add a backpack to the cart
  test('Successfully add a backpack to the cart', async ({ page }) => {
    
    // Given I am logged in as 'standard_user' and I am on the Products page
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    
    // Assert we are on the products page
    await expect(page.locator('.title')).toHaveText('Products');

    // When I click on the 'Add to cart' button for the 'Sauce Labs Backpack'
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

    // Then the shopping cart badge should display the number '1'
    const cartBadge = page.locator('.shopping_cart_badge');
    await expect(cartBadge).toHaveText('1');

    // And the backpack should be visible when I open the cart page
    await page.locator('.shopping_cart_link').click(); // abre o carrinho
    await expect(page.locator('.inventory_item_name')).toHaveText('Sauce Labs Backpack');
  });

});
