import { test as base } from "@playwright/test";
import { LoginPage } from "../pages/auth/LoginPage";
import { LogoutPage } from "../pages/auth/LogoutPage";
import { CartPage } from "../pages/cart/CartPage";
import { CheckoutPage } from "../pages/cart/CheckoutPage";
import { InventoryPage } from "../pages/inventory/InventoryPage";
import { Users } from "../data/users";

type PageFixtures = {
  loginPage: LoginPage;
  logoutPage: LogoutPage;
  cartPage: CartPage;
  checkoutPage: CheckoutPage;
  inventoryPage: InventoryPage;
  users: ReturnType<typeof Users>;
};

export const test = base.extend<PageFixtures>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },
  logoutPage: async ({ page }, use) => {
    const logoutPage = new LogoutPage(page);
    await use(logoutPage);
  },
  cartPage: async ({ page }, use) => {
    const cartPage = new CartPage(page);
    await use(cartPage);
  },
  checkoutPage: async ({ page }, use) => {
    const checkoutPage = new CheckoutPage(page);
    await use(checkoutPage);
  },
  inventoryPage: async ({ page }, use) => {
    const inventoryPage = new InventoryPage(page);
    await use(inventoryPage);
  },
  users: async ({}, use) => {
    const users = Users();
    await use(users);
  },
});

export { expect } from "@playwright/test";
