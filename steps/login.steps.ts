import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { LoginPage } from '../pages/LoginPage.js';

const { Given, When, Then } = createBdd();

Given('que estou na página de login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigate();
});

When('faço login com usuário {string} e senha {string}', async ({ page }, username: string, password: string) => {
  const loginPage = new LoginPage(page);
  await loginPage.login(username, password);
});

Then('devo ver a mensagem de erro {string}', async ({ page }, errorMessage: string) => {
  const loginPage = new LoginPage(page);
  await expect(loginPage.errorMessage).toContainText(errorMessage);
});

Then('devo ser redirecionado para a página de inventário', async ({ page }) => {
  await expect(page).toHaveURL(/inventory/);
});
