import { test, expect, Page } from "../libs/basetest";

test.describe("d_1st_describe", () => {
  for (let i = 1; i <= 5; i++) {
    test(`d test ${i}`, async ({ page }) => {
      await page.waitForTimeout(8000);
      console.log(`d test ${i}`);
    });
  }
});

test.describe("d_2nd_describe", () => {
  for (let i = 1; i <= 5; i++) {
    test(`d test ${i + 5}`, async ({ page }) => {
      await page.waitForTimeout(8000);
      console.log(`d test ${i + 5}`);
    });
  }
});

test.describe("d_3rd_describe", () => {
  for (let i = 1; i <= 5; i++) {
    test(`d test ${i + 10}`, async ({ page }) => {
      await page.waitForTimeout(8000);
      console.log(`d test ${i + 10}`);
    });
  }
});

test.describe("d_4th_describe", () => {
  for (let i = 1; i <= 5; i++) {
    test(`d test ${i + 15}`, async ({ page }) => {
      await page.waitForTimeout(8000);
      console.log(`d test ${i + 15}`);
    });
  }
});
