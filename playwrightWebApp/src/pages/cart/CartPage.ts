import { Page } from "@playwright/test";
import { BasePage } from "../../fixture/BasePage";

export class CartPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  get checkoutButton() {
    return this.page.locator('[data-test="checkout"]');
  }

  get continueShoppingButton() {
    return this.page.locator('[data-test="continue-shopping"]');
  }

  async goToCheckout() {
    await this.checkoutButton.click();
  }
}
