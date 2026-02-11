import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pages/auth/LoginPage";
import { InventoryPage } from "../../pages/inventory/InventoryPage";
import { CartPage } from "../../pages/cart/CartPage";
import { CheckoutPage } from "../../pages/cart/CheckoutPage";

test.describe("Remove Item from Cart Tests", () => {
  let loginPage: LoginPage;
  let inventoryPage: InventoryPage;
  let cartPage: CartPage;
  let checkoutPage: CheckoutPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);
    cartPage = new CartPage(page);
    checkoutPage = new CheckoutPage(page);

    await loginPage.navigate();
    await loginPage.login("standard_user", "secret_sauce");
  });

  test.afterEach(async () => {
    await checkoutPage.openMenu();
    await checkoutPage.logout();
  });

  test("should remove a single item from the cart", async () => {

    // Add a single item and verify it's in the cart
    await inventoryPage.addToCartSauceBackpackButton.click();
    await expect(inventoryPage.cartLink).toContainText("1");

    // Go to the cart and remove the item
    await inventoryPage.cartShopLink.click();
    await inventoryPage.removeSauceLabsBackpackButton.click();

    // Verify the cart is empty
    await expect(inventoryPage.cartLink).toHaveText("");
  });

  test("should remove one of multiple items from the cart", async ({ page }) => {

    // Add multiple items
    await inventoryPage.addToCartSaucelabsBoltTshirtButton.click();
    await inventoryPage.addToCartSauceLabsBikeLightButton.click();
    await inventoryPage.addToCartSauceLabsFleeceJacketButton.click();
    await expect(inventoryPage.cartLink).toContainText("3");

    // Go to the cart and remove one item
    await inventoryPage.cartShopLink.click();
    await inventoryPage.removeSauceLabsBikeLightButton.click();
    await expect(inventoryPage.cartLink).toContainText("2");
  });

  test("should remove all items from the cart", async ({ page }) => {

    // Add all items to the cart
    await inventoryPage.addAllItemsToCart();
    await expect(inventoryPage.cartLink).toContainText("6");

    // Go to the cart and remove all items
    await inventoryPage.cartShopLink.click();
    await cartPage.continueShoppingButton.click();
    await inventoryPage.removeAllTheThingsTshirtRedButton.click();
    await inventoryPage.removeSauceLabsFleeceJacketButton.click();
    await inventoryPage.removeSauceLabsBikeLightButton.click();
    await inventoryPage.removeSauceLabsBackpackButton.click();
    await inventoryPage.removeSauceLabsBoltTshirtButton.click();
    await inventoryPage.removeSauceLabsOnesieButton.click();

    // Verify the cart is empty
    await expect(inventoryPage.cartLink).toHaveText("");
  });
});
