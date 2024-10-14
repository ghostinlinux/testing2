import { test, expect, Page } from "../libs/basetest";

test.describe("b_1st_describe", () => {
  for (let i = 1; i <= 5; i++) {
    test(`b test ${i}`, async ({ page }) => {
      await page.waitForTimeout(60000);
      console.log(`b test ${i}`);
    });
  }
});

test.describe("b_2nd_describe", () => {
  for (let i = 1; i <= 5; i++) {
    test(`b test ${i + 5}`, async ({ page }) => {
      await page.waitForTimeout(60000);
      console.log(`b test ${i + 5}`);
    });
  }
});

test.describe("b_3rd_describe", () => {
  for (let i = 1; i <= 5; i++) {
    test(`b test ${i + 10}`, async ({ page }) => {
      await page.waitForTimeout(60000);
      console.log(`b test ${i + 10}`);
    });
  }
});

test.describe("b_4th_describe", () => {
  for (let i = 1; i <= 5; i++) {
    test(`b test ${i + 15}`, async ({ page }) => {
      await page.waitForTimeout(60000);
      console.log(`b test ${i + 15}`);
    });
  }
});
