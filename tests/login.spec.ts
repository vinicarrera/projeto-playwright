import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';

test.describe('Funcionalidade de Login', () => {
  // Teste de sucesso removido pois já é coberto pelo fluxo E2E

  test('deve exibir mensagem de erro ao fazer login com credenciais inválidas', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate();
    await loginPage.login('usuario_invalido', 'senha_errada');

    await expect(loginPage.errorMessage).toContainText('Epic sadface: Username and password do not match any user in this service');
  });
});
