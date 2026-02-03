import { defineConfig, devices } from '@playwright/test';

/**
 * Playwright configuration for Storybook-based component testing.
 */
export default defineConfig({
  testDir: './src',
  testMatch: '**/*.test.ts',
  timeout: 30000,
  reporter: 'html',

  use: {
    baseURL: 'http://localhost:6006',
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],

  webServer: {
    command: 'npm run storybook',
    url: 'http://localhost:6006',
    reuseExistingServer: !process.env.CI,
    timeout: 120 * 1000,
  },
});
