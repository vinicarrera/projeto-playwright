import { defineConfig } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';

const bddTestDir = defineBddConfig({
  features: 'features/*.feature',
  steps: 'steps/*.ts',
});

export default defineConfig({
  projects: [
    {
      name: 'e2e',
      testDir: './tests',
    },
    {
      name: 'bdd',
      testDir: bddTestDir,
    },
  ],
  use: {
    baseURL: 'https://www.saucedemo.com',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    headless: !!process.env.CI,
  },
  reporter: [
    ['list'],
    ['allure-playwright']
  ],
});
