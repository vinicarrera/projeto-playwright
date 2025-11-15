import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  reporter: [
    ['list'],
    ['allure-playwright']
  ],
  // outras configurações opcionais, como timeout, retries, browsers, etc.
});
