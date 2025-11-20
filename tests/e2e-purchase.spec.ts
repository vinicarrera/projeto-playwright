import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { InventoryPage } from '../pages/InventoryPage.js';
import { CartPage } from '../pages/CartPage.js';
import { CheckoutPage } from '../pages/CheckoutPage.js';

test.describe('Fluxo de Compra E2E', () => {
    test('deve realizar a compra de um produto com sucesso', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const inventoryPage = new InventoryPage(page);
        const cartPage = new CartPage(page);
        const checkoutPage = new CheckoutPage(page);

        await loginPage.navigate();
        await loginPage.login('standard_user', 'secret_sauce');

        await inventoryPage.addItemToCart('sauce-labs-backpack');
        await expect(inventoryPage.cartBadge).toHaveText('1');

        await inventoryPage.goToCart();
        await expect(cartPage.pageTitle).toHaveText('Your Cart');
        await cartPage.validateItemInCart('Sauce Labs Backpack');

        await cartPage.goToCheckout();
        await expect(checkoutPage.pageTitle).toHaveText('Checkout: Your Information');

        await checkoutPage.fillInformation('Vinicius', 'Carrera', '12345-678');

        await expect(checkoutPage.pageTitle).toHaveText('Checkout: Overview');
        await checkoutPage.finishCheckout();

        await checkoutPage.validateOrderComplete();
        await checkoutPage.backHome();
        await inventoryPage.validateTitle('Products');
    });
});
