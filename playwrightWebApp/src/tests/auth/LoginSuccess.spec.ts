import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pages/auth/LoginPage";

test.describe("Login Form Tests", () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });
  test("Login and Logout normal user #1", async ({ page }) => {
    // login
    await loginPage.login("standard_user", "secret_sauce");

    // login success
    await expect(page).toHaveURL(/inventory.html/);

    // Open menu and logout
    await page.locator("#react-burger-menu-btn").click();
    await page.locator('[data-test="logout-sidebar-link"]').click();

    // logout success (back to login page)
    await expect(page).toHaveURL("/");
  });

  test("Login and Logout problem user #2", async ({ page }) => {
    // login
    await loginPage.login("problem_user", "secret_sauce");

    // login success
    await expect(page).toHaveURL(/inventory.html/);

    // Open menu and logout
    await page.locator("#react-burger-menu-btn").click();
    await page.locator('[data-test="logout-sidebar-link"]').click();

    // logout success (back to login page)
    await expect(page).toHaveURL("/");
  });

  test("Login and Logout visual user #3", async ({ page }) => {
    // login
    await loginPage.login("visual_user", "secret_sauce");

    // login success
    await expect(page).toHaveURL(/inventory.html/);

    // Open menu and logout
    await page.locator("#react-burger-menu-btn").click();
    await page.locator('[data-test="logout-sidebar-link"]').click();

    // logout success (back to login page)
    await expect(page).toHaveURL("/");
  });
});
