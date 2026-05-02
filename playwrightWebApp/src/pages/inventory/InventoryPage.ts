import { Page } from "@playwright/test";
import { BasePage } from "../../fixture/BasePage";

export class InventoryPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  //-- elements inventory page ---//
  get cartLink() {
    return this.page.locator(".shopping_cart_link");
  }
  get cartShopLink() {
    return this.page.locator('[data-test="shopping-cart-link"]');
  }

  //--- add items ---//
  get addToCartSauceBackpackButton() {
    return this.page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
  }
  get addToCartSaucelabsBoltTshirtButton() {
    return this.page.locator(
      '[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]',
    );
  }
  get addToCartSauceLabsOnesieButton() {
    return this.page.locator('[data-test="add-to-cart-sauce-labs-onesie"]');
  }

  get addToCartSauceLabsBikeLightButton() {
    return this.page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]');
  }

  get addToCartSauceLabsFleeceJacketButton() {
    return this.page.locator(
      '[data-test="add-to-cart-sauce-labs-fleece-jacket"]',
    );
  }
  get addToCartAllTheThingsShirtRedButton() {
    return this.page.locator(
      '[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]',
    );
  }

  //--- remove items ---//
  get removeSauceLabsBackpackButton() {
    return this.page.locator('[data-test="remove-sauce-labs-backpack"]');
  }
  get removeSauceLabsBoltTshirtButton() {
    return this.page.locator('[data-test="remove-sauce-labs-bolt-t-shirt"]');
  }
  get removeSauceLabsOnesieButton() {
    return this.page.locator('[data-test="remove-sauce-labs-onesie"]');
  }

  get removeSauceLabsBikeLightButton() {
    return this.page.locator('[data-test="remove-sauce-labs-bike-light"]');
  }

  get removeSauceLabsFleeceJacketButton() {
    return this.page.locator('[data-test="remove-sauce-labs-fleece-jacket"]');
  }
  get removeAllTheThingsTshirtRedButton() {
    return this.page.locator(
      '[data-test="remove-test.allthethings()-t-shirt-(red)"]',
    );
  }

  async addAllItemsToCart() {
    while (
      (await this.page.locator('[data-test^="add-to-cart-"]').count()) > 0
    ) {
      await this.page.locator('[data-test^="add-to-cart-"]').first().click();
    }
  }
}
