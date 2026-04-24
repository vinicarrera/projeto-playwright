import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { LoginPage } from '../pages/LoginPage.js';
import { InventoryPage } from '../pages/InventoryPage.js';
import { CartPage } from '../pages/CartPage.js';
import { CheckoutPage } from '../pages/CheckoutPage.js';

const { Given, When, Then } = createBdd();

Given('que estou logado com usuário {string} e senha {string}', async ({ page }, username: string, password: string) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigate();
  await loginPage.login(username, password);
});

When('adiciono o produto {string} ao carrinho', async ({ page }, productId: string) => {
  const inventoryPage = new InventoryPage(page);
  await inventoryPage.addItemToCart(productId);
});

Then('o badge do carrinho deve exibir {string}', async ({ page }, quantity: string) => {
  const inventoryPage = new InventoryPage(page);
  await expect(inventoryPage.cartBadge).toHaveText(quantity);
});

When('acesso o carrinho', async ({ page }) => {
  const inventoryPage = new InventoryPage(page);
  await inventoryPage.goToCart();
});

Then('devo ver o título {string}', async ({ page }, title: string) => {
  await expect(page.locator('.title')).toHaveText(title);
});

Then('o produto {string} deve estar no carrinho', async ({ page }, productName: string) => {
  const cartPage = new CartPage(page);
  await cartPage.validateItemInCart(productName);
});

When('prossigo para o checkout', async ({ page }) => {
  const cartPage = new CartPage(page);
  await cartPage.goToCheckout();
});

When('preencho os dados com nome {string}, sobrenome {string} e CEP {string}', async ({ page }, firstName: string, lastName: string, postalCode: string) => {
  const checkoutPage = new CheckoutPage(page);
  await checkoutPage.fillInformation(firstName, lastName, postalCode);
});

When('finalizo a compra', async ({ page }) => {
  const checkoutPage = new CheckoutPage(page);
  await checkoutPage.finishCheckout();
});

Then('devo ver a confirmação do pedido', async ({ page }) => {
  const checkoutPage = new CheckoutPage(page);
  await checkoutPage.validateOrderComplete();
});

When('volto para a página inicial', async ({ page }) => {
  const checkoutPage = new CheckoutPage(page);
  await checkoutPage.backHome();
});
