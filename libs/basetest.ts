import { test as baseTest, expect, type Page } from "@playwright/test";
import { measureExecutionTime } from "sharding-pk-play";

export const test = baseTest.extend({
  // Define global beforeEach hook
  page: async ({ page }, use, testInfo) => {
    await page.goto("https://demo.playwright.dev/todomvc");
    testInfo.duration; // Access test duration if needed
    await use(page);
  },
});

// Global afterEach hook
test.afterEach(async ({ page }, testInfo) => {
  measureExecutionTime(testInfo); // Custom function to measure time
});

export { expect };
export { Page };
