import { test, expect, Page } from "../libs/basetest";

test.describe("e_1st_describe", () => {
  for (let i = 1; i <= 5; i++) {
    test(`e test ${i}`, async ({ page }) => {
      await page.waitForTimeout(10000);
      console.log(`e test ${i}`);
    });
  }
});

test.describe("e_2nd_describe", () => {
  for (let i = 1; i <= 5; i++) {
    test(`e test ${i + 5}`, async ({ page }) => {
      await page.waitForTimeout(10000);
      console.log(`e test ${i + 5}`);
    });
  }
});

test.describe("e_3rd_describe", () => {
  for (let i = 1; i <= 5; i++) {
    test(`e test ${i + 10}`, async ({ page }) => {
      await page.waitForTimeout(30000);
      console.log(`e test ${i + 10}`);
    });
  }
});

test.describe("e_4th_describe", () => {
  for (let i = 1; i <= 5; i++) {
    test(`e test ${i + 15}`, async ({ page }) => {
      await page.waitForTimeout(10000);
      console.log(`e test ${i + 15}`);
    });
  }
});
