import { Page, Locator } from "@playwright/test";

export class InventoryPage {
  readonly page: Page;
  readonly cartLink: Locator;
  readonly cartShopLink: Locator;

  // add items
  readonly addToCartSauceBackpackButton: Locator;
  readonly addToCartSaucelabsBoltTshirtButton: Locator;
  readonly addToCartSauceLabsOnesieButton: Locator;
  readonly addToCartSauceLabsBikeLightButton: Locator;
  readonly addToCartSauceLabsFleeceJacketButton: Locator;
  readonly addToCartAllTheThingsShirtRedButton: Locator;

  // remove items
  readonly removeSauceLabsBackpackButton: Locator;
  readonly removeSauceLabsBoltTshirtButton: Locator;
  readonly removeSauceLabsOnesieButton: Locator;
  readonly removeSauceLabsBikeLightButton: Locator;
  readonly removeSauceLabsFleeceJacketButton: Locator;
  readonly removeAllTheThingsTshirtRedButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartLink = page.locator(".shopping_cart_link");
    this.cartShopLink = page.locator('[data-test="shopping-cart-link"]');


    // add item
    this.addToCartSauceBackpackButton = page.locator(
      '[data-test="add-to-cart-sauce-labs-backpack"]'
    );
    this.addToCartSaucelabsBoltTshirtButton = page.locator(
      '[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]'
    );
    this.addToCartSauceLabsOnesieButton = page.locator(
      '[data-test="add-to-cart-sauce-labs-onesie"]'
    );
    this.addToCartSauceLabsBikeLightButton = page.locator(
      '[data-test="add-to-cart-sauce-labs-bike-light"]'
    );
    this.addToCartSauceLabsFleeceJacketButton = page.locator(
      '[data-test="add-to-cart-sauce-labs-fleece-jacket"]'
    );
    this.addToCartAllTheThingsShirtRedButton = page.locator(
      '[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]'
    );

    // remove item
    this.removeSauceLabsBackpackButton = page.locator(
      '[data-test="remove-sauce-labs-backpack"]'
    );
    this.removeSauceLabsBoltTshirtButton = page.locator(
      '[data-test="remove-sauce-labs-bolt-t-shirt"]'
    );
    this.removeSauceLabsOnesieButton = page.locator(
      '[data-test="remove-sauce-labs-onesie"]'
    );
    this.removeSauceLabsBikeLightButton = page.locator(
      '[data-test="remove-sauce-labs-bike-light"]'
    );
    this.removeSauceLabsFleeceJacketButton = page.locator(
      '[data-test="remove-sauce-labs-fleece-jacket"]'
    );
    this.removeAllTheThingsTshirtRedButton = page.locator(
      '[data-test="remove-test.allthethings()-t-shirt-(red)"]'
    );
  }

  async addAllItemsToCart() {
    while (await this.page.locator('[data-test^="add-to-cart-"]').count() > 0) {
      await this.page.locator('[data-test^="add-to-cart-"]').first().click();
    }
  }
}
