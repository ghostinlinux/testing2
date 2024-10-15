import { test as baseTest, expect, type Page } from "@playwright/test";
import { measureExecutionTime } from "sharding-pk-play";

// Extend the base test with custom beforeEach and afterEach
export const test = baseTest.extend({});

// Define a global beforeEach hook
test.beforeEach(async ({ page }, testInfo) => {
  console.log(`Running beforeEach for ${testInfo.title} Before Each`);
  await page.goto('https://demo.playwright.dev/todomvc');
  testInfo.duration
});

// Define a global afterEach hook
test.afterEach(async ({ page }, testInfo) => {
  console.log(`Running afterEach for ${testInfo.title} After Each`);
  measureExecutionTime(testInfo); // Custom function to measure time
});

// Export the custom test object and expect for use in other test files
export { expect };
export { Page };
