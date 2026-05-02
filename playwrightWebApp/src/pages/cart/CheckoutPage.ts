import { Page } from "@playwright/test";
import { BasePage } from "../../fixture/BasePage";

export class CheckoutPage extends BasePage {
  //-- Selectors --//
  constructor(page: Page) {
    super(page);
  }

  get firstNameInput() {
    return this.page.locator('[data-test="firstName"]');
  }

  get lastNameInput() {
    return this.page.locator('[data-test="lastName"]');
  }

  get postalCodeInput() {
    return this.page.locator('[data-test="postalCode"]');
  }

  get continueButton() {
    return this.page.locator('[data-test="continue"]');
  }

  get finishButton() {
    return this.page.locator('[data-test="finish"]');
  }
  get backToProductsButton() {
    return this.page.locator('[data-test="back-to-products"]');
  }
  get subtotalLabel() {
    return this.page.locator('[data-test="subtotal-label"]');
  }
  get taxLabel() {
    return this.page.locator('[data-test="tax-label"]');
  }
  get totalLabel() {
    return this.page.locator('[data-test="total-label"]');
  }
  get logoutButton() {
    return this.page.locator('[data-test="logout-sidebar-link"]');
  }
  get openMenuButton() {
    return this.page.getByRole("button", { name: "Open Menu" });
  }

  async inputAddress(firstName: string, lastName: string, postalCode: string) {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.postalCodeInput.fill(postalCode);
    await this.continueButton.click();
  }

  async finishCheckout() {
    await this.finishButton.click();
  }

  async backToProducts() {
    await this.backToProductsButton.click();
  }

  async openMenu() {
    await this.openMenuButton.click();
  }

  async logout() {
    await this.logoutButton.click();
  }
}
