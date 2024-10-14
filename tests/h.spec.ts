import { test, expect, Page } from "../libs/basetest";

test.describe("h_1st_describe", () => {
  for (let i = 1; i <= 5; i++) {
    test(`h test ${i}`, async ({ page }) => {
      await page.waitForTimeout(240000);
      console.log(`h test ${i}`);
    });
  }
});

test.describe("h_2nd_describe", () => {
  for (let i = 1; i <= 5; i++) {
    test(`h test ${i + 5}`, async ({ page }) => {
      await page.waitForTimeout(240000);
      console.log(`h test ${i + 5}`);
    });
  }
});

test.describe("h_3rd_describe", () => {
  for (let i = 1; i <= 5; i++) {
    test(`h test ${i + 10}`, async ({ page }) => {
      await page.waitForTimeout(240000);
      console.log(`h test ${i + 10}`);
    });
  }
});

test.describe("h_4th_describe", () => {
  for (let i = 1; i <= 5; i++) {
    test(`h test ${i + 15}`, async ({ page }) => {
      await page.waitForTimeout(240000);
      console.log(`h test ${i + 15}`);
    });
  }
});
