import { test, expect, Page } from "../libs/basetest";

test.describe("f_1st_describe", () => {
  for (let i = 1; i <= 5; i++) {
    test(`f test ${i}`, async ({ page }) => {
      await page.waitForTimeout(180000);
      console.log(`f test ${i}`);
    });
  }
});

test.describe("f_2nd_describe", () => {
  for (let i = 1; i <= 5; i++) {
    test(`f test ${i + 5}`, async ({ page }) => {
      await page.waitForTimeout(180000);
      console.log(`f test ${i + 5}`);
    });
  }
});

test.describe("f_3rd_describe", () => {
  for (let i = 1; i <= 5; i++) {
    test(`f test ${i + 10}`, async ({ page }) => {
      await page.waitForTimeout(180000);
      console.log(`f test ${i + 10}`);
    });
  }
});

test.describe("f_4th_describe", () => {
  for (let i = 1; i <= 5; i++) {
    test(`f test ${i + 15}`, async ({ page }) => {
      await page.waitForTimeout(180000);
      console.log(`f test ${i + 15}`);
    });
  }
});
