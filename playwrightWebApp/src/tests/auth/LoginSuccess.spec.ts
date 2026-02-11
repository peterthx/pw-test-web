import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pages/auth/LoginPage";
import { LogoutPage } from "../../pages/auth/LogoutPage";

test.describe("Login Form Tests", () => {
  let loginPage: LoginPage;
  let logoutPage: LogoutPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    logoutPage = new LogoutPage(page);
    await loginPage.navigate();
  });
  test("Login and Logout normal user #1", async ({ page }) => {
    // login
    await loginPage.login("standard_user", "secret_sauce");

    // login success
    await expect(page).toHaveURL(/inventory.html/);

    // Open menu and logout
    await logoutPage.openMenu();
    await logoutPage.logout();

    // logout success (back to login page)
    await expect(page).toHaveURL("/");
  });

  test("Login and Logout problem user #2", async ({ page }) => {
    // login
    await loginPage.login("problem_user", "secret_sauce");

    // login success
    await expect(page).toHaveURL(/inventory.html/);

    // Open menu and logout
    await logoutPage.openMenu();
    await logoutPage.logout();

    // logout success (back to login page)
    await expect(page).toHaveURL("/");
  });

  test("Login and Logout visual user #3", async ({ page }) => {
    // login
    await loginPage.login("visual_user", "secret_sauce");

    // login success
    await expect(page).toHaveURL(/inventory.html/);

    // Open menu and logout
    await logoutPage.openMenu();
    await logoutPage.logout();

    // logout success (back to login page)
    await expect(page).toHaveURL("/");
  });
});
