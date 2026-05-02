import { test, expect } from "../../fixture/page-fixture";

test.describe("Shopping Cart – Add Item Tests", () => {
  test.beforeEach(async ({ loginPage, users }) => {
    await loginPage.navigate();
    await loginPage.login(
      users.standard_user.username,
      users.standard_user.password,
    );
  });

  test.afterEach(async ({ logoutPage }) => {
    await logoutPage.openMenu();
    await logoutPage.logout();
  });

  test("TC001 - User can add 1 item to the cart", async ({
    cartPage,
    checkoutPage,
    inventoryPage,
  }) => {
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

  test("TC002 - User can add multiple items to the cart", async ({
    cartPage,
    checkoutPage,
    inventoryPage,
  }) => {
    await inventoryPage.addToCartSauceBackpackButton.click();
    await inventoryPage.addToCartSaucelabsBoltTshirtButton.click();
    await inventoryPage.addToCartSauceLabsBikeLightButton.click();
    await expect(inventoryPage.cartLink).toContainText("3");
    await inventoryPage.cartLink.click();
    await cartPage.goToCheckout();

    await checkoutPage.inputAddress(
      "Lily",
      "Park",
      "77 Castro St, Mountain View, CA",
    );

    await expect(checkoutPage.subtotalLabel).toContainText("$55.97");
    await expect(checkoutPage.taxLabel).toContainText("$4.48");
    await expect(checkoutPage.totalLabel).toContainText("$60.45");

    await checkoutPage.finishCheckout();
    await checkoutPage.backToProducts();
  });

  test("TC003 - User can add all items to the cart", async ({
    cartPage,
    checkoutPage,
    inventoryPage,
  }) => {
    await inventoryPage.addAllItemsToCart();
    await expect(inventoryPage.cartLink).toContainText("6");
    await inventoryPage.cartLink.click();
    await cartPage.goToCheckout();

    await checkoutPage.inputAddress(
      "Noah",
      "Foster",
      "210 University Ave, Palo Alto, CA",
    );

    await expect(checkoutPage.subtotalLabel).toContainText("$129.94");
    await expect(checkoutPage.taxLabel).toContainText("$10.40");
    await expect(checkoutPage.totalLabel).toContainText("$140.34");

    await checkoutPage.finishCheckout();
    await checkoutPage.backToProducts();
  });
});
