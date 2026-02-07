import { Page, Locator } from "@playwright/test";

export class CartPage {
    readonly page: Page;
    readonly checkoutButton: Locator;
    readonly continueShoppingButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.checkoutButton = page.locator('[data-test="checkout"]');
        this.continueShoppingButton = page.locator('[data-test="continue-shopping"]')
    }

    async goToCheckout() {
        await this.checkoutButton.click();
    }
}
