import { expect, Page } from "@playwright/test";
import { BasePage } from "../../fixture/BasePage";

export class LoginPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }
  get usernameInput() {
    return this.page.locator("#user-name");
  }

  get passwordInput() {
    return this.page.locator("#password");
  }

  get loginButton() {
    return this.page.locator("#login-button");
  }

  get errorMessage() {
    return this.page.locator('[data-test="error"]');
  }

  async navigate() {
    await this.page.goto("/");
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async assertErrorMessage(message: string) {
    await expect(this.errorMessage).toHaveText(message);
  }
}
