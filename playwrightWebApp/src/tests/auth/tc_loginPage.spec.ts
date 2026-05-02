import { test, expect } from "../../fixture/page-fixture";
test.describe("Login Form Tests", () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.navigate();
  });
  test("TC001 - Login and Logout normal user #1", async ({
    loginPage,
    logoutPage,
    users,
  }) => {
    // login
    await loginPage.login(
      users.standard_user.username,
      users.standard_user.password,
    );

    // login success
    await expect(loginPage.page).toHaveURL(/inventory.html/);

    // Open menu and logout
    await logoutPage.openMenu();
    await logoutPage.logout();

    // logout success (back to login page)
    await expect(loginPage.page).toHaveURL("/");
  });

  test("TC002 - Login and Logout problem user #2", async ({
    loginPage,
    logoutPage,
    users,
  }) => {
    // login
    await loginPage.login(
      users.problem_user.username,
      users.problem_user.password,
    );

    // login success
    await expect(loginPage.page).toHaveURL(/inventory.html/);

    // Open menu and logout
    await logoutPage.openMenu();
    await logoutPage.logout();

    // logout success (back to login page)
    await expect(loginPage.page).toHaveURL("/");
  });

  test("TC003 - Login and Logout visual user #3", async ({
    loginPage,
    logoutPage,
    users,
  }) => {
    // login
    await loginPage.login(
      users.visual_user.username,
      users.visual_user.password,
    );

    // login success
    await expect(loginPage.page).toHaveURL(/inventory.html/);

    // Open menu and logout
    await logoutPage.openMenu();
    await logoutPage.logout();

    // logout success (back to login page)
    await expect(loginPage.page).toHaveURL("/");
  });
});
