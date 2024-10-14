import { test, expect, Page } from "../libs/basetest";

test.describe("a_1st_describe", () => {
  for (let i = 1; i <= 5; i++) {
    test(`a test ${i}`, async ({ page }) => {
      await page.waitForTimeout(30000);
      console.log(`a test ${i}`);
    });
  }
});

test.describe("a_2nd_describe", () => {
  for (let i = 1; i <= 5; i++) {
    test(`a test ${i + 5}`, async ({ page }) => {
      await page.waitForTimeout(30000);
      console.log(`a test ${i + 5}`);
    });
  }
});

test.describe("a_3rd_describe", () => {
  for (let i = 1; i <= 5; i++) {
    test(`a test ${i + 10}`, async ({ page }) => {
      await page.waitForTimeout(30000);
      console.log(`a test ${i + 10}`);
    });
  }
});

test.describe("a_4th_describe", () => {
  for (let i = 1; i <= 5; i++) {
    test(`a test ${i + 15}`, async ({ page }) => {
      await page.waitForTimeout(30000);
      console.log(`a test ${i + 15}`);
    });
  }
});
