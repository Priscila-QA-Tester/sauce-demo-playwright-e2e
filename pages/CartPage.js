exports.CartPage = class CartPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.checkoutButton = page.locator('#checkout');
  }

  async proceedToCheckout() {
    await this.checkoutButton.click();
  }
};
