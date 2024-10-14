import { test, expect, Page } from "../libs/basetest";

test.describe("c_1st_describe", () => {
  for (let i = 1; i <= 5; i++) {
    test(`c test ${i}`, async ({ page }) => {
      await page.waitForTimeout(90000);
      console.log(`c test ${i}`);
    });
  }
});

test.describe("c_2nd_describe", () => {
  for (let i = 1; i <= 5; i++) {
    test(`c test ${i + 5}`, async ({ page }) => {
      await page.waitForTimeout(90000);
      console.log(`c test ${i + 5}`);
    });
  }
});

test.describe("c_3rd_describe", () => {
  for (let i = 1; i <= 5; i++) {
    test(`c test ${i + 10}`, async ({ page }) => {
      await page.waitForTimeout(90000);
      console.log(`c test ${i + 10}`);
    });
  }
});

test.describe("c_4th_describe", () => {
  for (let i = 1; i <= 5; i++) {
    test(`c test ${i + 15}`, async ({ page }) => {
      await page.waitForTimeout(90000);
      console.log(`c test ${i + 15}`);
    });
  }
});
