import { test, expect } from '@playwright/test';

test('deve exibir mensagem de erro ao fazer login inválido', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');
  await page.fill('#username', 'usuario_teste');
  await page.fill('#password', 'senha_errada');
  await page.click('button[type="submit"]');
  await expect(page.locator('#flash')).toContainText('Your username is invalid!');
});
