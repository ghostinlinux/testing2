import { test, expect, type Page } from '@playwright/test';
import { measureExecutionTime } from "sharding-pk-play";

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

test.describe("b_1st_describe", () => {
  for (let i = 1; i <= 5; i++) {
    test(`b test ${i}`, async ({ page }) => {
      await page.waitForTimeout(4000);
      console.log(`b test ${i}`);
    });
  }
});

test.describe("b_2nd_describe", () => {
  for (let i = 1; i <= 5; i++) {
    test(`b test ${i + 5}`, async ({ page }) => {
      await page.waitForTimeout(20000);
      console.log(`b test ${i + 5}`);
    });
  }
});

test.describe("b_3rd_describe", () => {
  for (let i = 1; i <= 5; i++) {
    test(`b test ${i + 10}`, async ({ page }) => {
      await page.waitForTimeout(4000);
      console.log(`b test ${i + 10}`);
    });
  }
});

test.describe("b_4th_describe", () => {
  for (let i = 1; i <= 5; i++) {
    test(`b test ${i + 15}`, async ({ page }) => {
      await page.waitForTimeout(4000);
      console.log(`b test ${i + 15}`);
    });
  }
});
