import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pages/auth/LoginPage";
import { InventoryPage } from "../../pages/inventory/InventoryPage";
import { CartPage } from "../../pages/cart/CartPage";
import { CheckoutPage } from "../../pages/cart/CheckoutPage";

test.describe("Shopping Cart – Add Item Tests", () => {
  let loginPage: LoginPage;
  let inventoryPage: InventoryPage;
  let cartPage: CartPage;
  let checkoutPage: CheckoutPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);
    await loginPage.navigate();
    await loginPage.login("standard_user", "secret_sauce");
  });

  test.afterEach(async ({ page }) => {
    await page.getByRole("button", { name: "Open Menu" }).click();
    const logout = page.locator('[data-test="logout-sidebar-link"]');
    await expect(logout).toBeVisible();
    await logout.click();
  });

  test("User can add 1 item to the cart", async ({ page }) => {
    cartPage = new CartPage(page);
    checkoutPage = new CheckoutPage(page);

    await inventoryPage.addToCartSauceBackpackButton.click();
    await expect(inventoryPage.cartLink).toContainText("1");
    await inventoryPage.cartLink.click();
    await cartPage.goToCheckout();

    await checkoutPage.inputAddress("John", "Smith", "1989 San Francisco US");

    await expect(checkoutPage.subtotalLabel).toContainText("$29.99");
    await expect(checkoutPage.taxLabel).toContainText("$2.40");
    await expect(checkoutPage.totalLabel).toContainText("$32.39");

    await checkoutPage.finishCheckout();
    await checkoutPage.backToProducts();
  });

  test("User can add multiple items to the cart", async ({ page }) => {
    cartPage = new CartPage(page);
    checkoutPage = new CheckoutPage(page);

    await inventoryPage.addToCartSauceBackpackButton.click();
    await inventoryPage.addToCartSaucelabsBoltTshirtButton.click();
    await inventoryPage.addToCartSauceLabsBikeLightButton.click();
    await expect(inventoryPage.cartLink).toContainText("3");
    await inventoryPage.cartLink.click();
    await cartPage.goToCheckout();

    await checkoutPage.inputAddress(
      "Lily",
      "Park",
      "77 Castro St, Mountain View, CA"
    );

    await expect(checkoutPage.subtotalLabel).toContainText("$55.97");
    await expect(checkoutPage.taxLabel).toContainText("$4.48");
    await expect(checkoutPage.totalLabel).toContainText("$60.45");

    await checkoutPage.finishCheckout();
    await checkoutPage.backToProducts();
  });

  test("User can add all items to the cart", async ({ page }) => {
    cartPage = new CartPage(page);
    checkoutPage = new CheckoutPage(page);

    await inventoryPage.addAllItemsToCart();

    await expect(inventoryPage.cartLink).toContainText("6");
    await inventoryPage.cartLink.click();
    await cartPage.goToCheckout();

    await checkoutPage.inputAddress(
      "Noah",
      "Foster",
      "210 University Ave, Palo Alto, CA"
    );

    await expect(checkoutPage.subtotalLabel).toContainText("$129.94");
    await expect(checkoutPage.taxLabel).toContainText("$10.40");
    await expect(checkoutPage.totalLabel).toContainText("$140.34");

    await checkoutPage.finishCheckout();
    await checkoutPage.backToProducts();
  });
});