import { test, expect, type Page } from "@playwright/test";
import { measureExecutionTime } from "sharding-pk-play";

test.beforeEach(async ({ page }, testInfo) => {
  console.log(`Running beforeEach for ${testInfo.title} Before Each`);
  await page.goto("https://demo.playwright.dev/todomvc");
  testInfo.duration;
});

// Define a global afterEach hook
test.afterEach(async ({ page }, testInfo) => {
  console.log(`Running afterEach for ${testInfo.title} After Each`);
  measureExecutionTime(testInfo); // Custom function to measure time
});

test.describe("d_1st_describe", () => {
  test("d test 1", async ({ page }) => {
    await page.waitForTimeout(8000);
    console.log("d test 1");
  });

  test("d test 2", async ({ page }) => {
    await page.waitForTimeout(8000);
    console.log("d test 2");
  });

  test("d test 3", async ({ page }) => {
    await page.waitForTimeout(8000);
    console.log("d test 3");
  });

  test("d test 4", async ({ page }) => {
    await page.waitForTimeout(8000);
    console.log("d test 4");
  });

  test("d test 5", async ({ page }) => {
    await page.waitForTimeout(8000);
    console.log("d test 5");
  });
});

test.describe("d_2nd_describe", () => {
  test("d test 6", async ({ page }) => {
    await page.waitForTimeout(8000);
    console.log("d test 6");
  });

  test("d test 7", async ({ page }) => {
    await page.waitForTimeout(8000);
    console.log("d test 7");
  });

  test("d test 8", async ({ page }) => {
    await page.waitForTimeout(8000);
    console.log("d test 8");
  });

  test("d test 9", async ({ page }) => {
    await page.waitForTimeout(8000);
    console.log("d test 9");
  });

  test("d test 10", async ({ page }) => {
    await page.waitForTimeout(8000);
    console.log("d test 10");
  });
});

test.describe("d_3rd_describe", () => {
  test("d test 11", async ({ page }) => {
    await page.waitForTimeout(8000);
    console.log("d test 11");
  });

  test("d test 12", async ({ page }) => {
    await page.waitForTimeout(8000);
    console.log("d test 12");
  });

  test("d test 13", async ({ page }) => {
    await page.waitForTimeout(8000);
    console.log("d test 13");
  });

  test("d test 14", async ({ page }) => {
    await page.waitForTimeout(8000);
    console.log("d test 14");
  });

  test("d test 15", async ({ page }) => {
    await page.waitForTimeout(8000);
    console.log("d test 15");
  });
});

test.describe("d_4th_describe", () => {
  test("d test 16", async ({ page }) => {
    await page.waitForTimeout(8000);
    console.log("d test 16");
  });

  test("d test 17", async ({ page }) => {
    await page.waitForTimeout(8000);
    console.log("d test 17");
  });

  test("d test 18", async ({ page }) => {
    await page.waitForTimeout(8000);
    console.log("d test 18");
  });

  test("d test 19", async ({ page }) => {
    await page.waitForTimeout(8000);
    console.log("d test 19");
  });

  test("d test 20", async ({ page }) => {
    await page.waitForTimeout(8000);
    console.log("d test 20");
  });
});
