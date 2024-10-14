import { test, expect, Page } from "../libs/basetest";

test.describe("j_1st_describe", () => {
  for (let i = 1; i <= 5; i++) {
    test(`j test ${i}`, async ({ page }) => {
      await page.waitForTimeout(300000);
      console.log(`j test ${i}`);
    });
  }
});

test.describe("j_2nd_describe", () => {
  for (let i = 1; i <= 5; i++) {
    test(`j test ${i + 5}`, async ({ page }) => {
      await page.waitForTimeout(300000);
      console.log(`j test ${i + 5}`);
    });
  }
});

test.describe("j_3rd_describe", () => {
  for (let i = 1; i <= 5; i++) {
    test(`j test ${i + 10}`, async ({ page }) => {
      await page.waitForTimeout(300000);
      console.log(`j test ${i + 10}`);
    });
  }
});

test.describe("j_4th_describe", () => {
  for (let i = 1; i <= 5; i++) {
    test(`j test ${i + 15}`, async ({ page }) => {
      await page.waitForTimeout(300000);
      console.log(`j test ${i + 15}`);
    });
  }
});
