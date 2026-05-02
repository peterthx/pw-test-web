import { test, expect } from "../../fixture/page-fixture";

test.describe("Remove Item from Cart Tests", () => {

  test.beforeEach(async ({ loginPage, users}) => {
    await loginPage.navigate();
    await loginPage.login(users.standard_user.username, users.standard_user.password);
  });

  test.afterEach(async ({ checkoutPage }) => {
    await checkoutPage.openMenu();
    await checkoutPage.logout();
  });

  test("TC001 - should remove a single item from the cart", async ({inventoryPage}) => {

    // Add a single item and verify it's in the cart
    await inventoryPage.addToCartSauceBackpackButton.click();
    await expect(inventoryPage.cartLink).toContainText("1");

    // Go to the cart and remove the item
    await inventoryPage.cartShopLink.click();
    await inventoryPage.removeSauceLabsBackpackButton.click();

    // Verify the cart is empty
    await expect(inventoryPage.cartLink).toHaveText("");
  });

  test("TC002 - should remove one of multiple items from the cart", async ({inventoryPage}) => {

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

  test("TC003 - should remove all items from the cart", async ({inventoryPage, cartPage}) => {

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
