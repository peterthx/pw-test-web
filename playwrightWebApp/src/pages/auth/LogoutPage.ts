import {type Locator, type Page } from '@playwright/test';

export class LogoutPage {
  readonly page: Page;
  readonly logoutSidebarLink: Locator;
  readonly burgerMenuBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.logoutSidebarLink = page.locator('[data-test="logout-sidebar-link"]');
    this.burgerMenuBtn = page.locator("#react-burger-menu-btn");
  }

  async navigate() {
    await this.page.goto('/');
  }

  async openMenu() {
    await this.burgerMenuBtn.click();
  }

  async logout() {
    await this.logoutSidebarLink.click();
  }
}
