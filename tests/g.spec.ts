import { test, expect, Page } from "../libs/basetest";

test.describe("g_1st_describe", () => {
  for (let i = 1; i <= 5; i++) {
    test(`g test ${i}`, async ({ page }) => {
      await page.waitForTimeout(14000);
      console.log(`g test ${i}`);
    });
  }
});

test.describe("g_2nd_describe", () => {
  for (let i = 1; i <= 5; i++) {
    test(`g test ${i + 5}`, async ({ page }) => {
      await page.waitForTimeout(14000);
      console.log(`g test ${i + 5}`);
    });
  }
});

test.describe("g_3rd_describe", () => {
  for (let i = 1; i <= 5; i++) {
    test(`g test ${i + 10}`, async ({ page }) => {
      await page.waitForTimeout(14000);
      console.log(`g test ${i + 10}`);
    });
  }
});

test.describe("g_4th_describe", () => {
  for (let i = 1; i <= 5; i++) {
    test(`g test ${i + 15}`, async ({ page }) => {
      await page.waitForTimeout(14000);
      console.log(`g test ${i + 15}`);
    });
  }
});
