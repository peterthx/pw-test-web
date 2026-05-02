import { Page } from "@playwright/test";
import { BasePage } from "../../fixture/BasePage";

export class LogoutPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  get logoutSidebarLink() {
    return this.page.locator('[data-test="logout-sidebar-link"]');
  }

  get burgerMenuBtn() {
    return this.page.locator("#react-burger-menu-btn");
  }

  async navigate() {
    await this.page.goto("/");
  }

  async openMenu() {
    await this.burgerMenuBtn.click();
  }

  async logout() {
    await this.logoutSidebarLink.click();
  }
}
