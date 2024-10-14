import { test as baseTest, expect, type Page } from "@playwright/test";
import { measureExecutionTime } from "sharding-pk-play";

// Define a custom test fixture that includes beforeEach and afterEach hooks
export const test = baseTest.extend({
  // This runs before each test
  async beforeEach({ page }, use, testInfo) {
    await page.goto("https://demo.playwright.dev/todomvc");
    await use(page); // Pass control to the test
  },

  // This runs after each test
  async afterEach({ page }, use, testInfo) {
    measureExecutionTime(testInfo);
    await use(page); // Continue after teardown
  },
});

// Export expect for use in test files
export { expect };
export { Page };
