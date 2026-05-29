exports.InventoryPage = class InventoryPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.title = page.locator('.title');
    this.addToCartBackpackButton = page.locator('#add-to-cart-sauce-labs-backpack');
    this.cartLink = page.locator('.shopping_cart_link');
  }

  async getTitleText() {
    return this.title.textContent();
  }

  async addBackpackToCart() {
    await this.addToCartBackpackButton.click();
  }

  async goToCart() {
    await this.cartLink.click();
  }
};
