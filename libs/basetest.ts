import { test as baseTest, expect, type Page } from "@playwright/test";
import { measureExecutionTime } from "sharding-pk-play";

// Extend baseTest to include common beforeEach and afterEach logic
export const test = baseTest.extend({
  // This beforeEach hook navigates to the URL before each test
  async beforeEach({ page }, use, testInfo) {
    await page.goto("https://demo.playwright.dev/todomvc");

    // Optionally, you can log the test duration at the start (though it will be 0 initially)
    console.log(`Test started: ${testInfo.title}`);
    console.log(`Duration at start: ${testInfo.duration}ms`); // Duration is calculated after the test runs

    await use(page); // Pass control to the test
  },

  // This afterEach hook measures execution time after each test
  async afterEach({ page }, use, testInfo) {
    // Measure execution time using your custom method
    measureExecutionTime(testInfo);

    // Optionally, you can log the duration after the test completes
    console.log(`Test finished: ${testInfo.title}`);
    console.log(`Total duration: ${testInfo.duration}ms`);

    await use(page); // Continue after teardown
  },
});

// Export expect for use in test files
export { expect };
export type { Page };
