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

test.describe("f_1st_describe", () => {
  for (let i = 1; i <= 5; i++) {
    test(`f test ${i}`, async ({ page }) => {
      await page.waitForTimeout(12000);
      console.log(`f test ${i}`);
    });
  }
});

test.describe("f_2nd_describe", () => {
  for (let i = 1; i <= 5; i++) {
    test(`f test ${i + 5}`, async ({ page }) => {
      await page.waitForTimeout(12000);
      console.log(`f test ${i + 5}`);
    });
  }
});

test.describe("f_3rd_describe", () => {
  for (let i = 1; i <= 5; i++) {
    test(`f test ${i + 10}`, async ({ page }) => {
      await page.waitForTimeout(12000);
      console.log(`f test ${i + 10}`);
    });
  }
});

test.describe("f_4th_describe", () => {
  for (let i = 1; i <= 5; i++) {
    test(`f test ${i + 15}`, async ({ page }) => {
      await page.waitForTimeout(60000);
      console.log(`f test ${i + 15}`);
    });
  }
});
