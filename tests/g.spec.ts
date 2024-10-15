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

test.describe("g_1st_describe", () => {
  test("g test 1", async ({ page }) => {
    await page.waitForTimeout(14000);
    console.log("g test 1");
  });

  test("g test 2", async ({ page }) => {
    await page.waitForTimeout(14000);
    console.log("g test 2");
  });

  test("g test 3", async ({ page }) => {
    await page.waitForTimeout(14000);
    console.log("g test 3");
  });

  test("g test 4", async ({ page }) => {
    await page.waitForTimeout(14000);
    console.log("g test 4");
  });

  test("g test 5", async ({ page }) => {
    await page.waitForTimeout(14000);
    console.log("g test 5");
  });
});

test.describe("g_2nd_describe", () => {
  test("g test 6", async ({ page }) => {
    await page.waitForTimeout(14000);
    console.log("g test 6");
  });

  test("g test 7", async ({ page }) => {
    await page.waitForTimeout(14000);
    console.log("g test 7");
  });

  test("g test 8", async ({ page }) => {
    await page.waitForTimeout(14000);
    console.log("g test 8");
  });

  test("g test 9", async ({ page }) => {
    await page.waitForTimeout(14000);
    console.log("g test 9");
  });

  test("g test 10", async ({ page }) => {
    await page.waitForTimeout(14000);
    console.log("g test 10");
  });
});

test.describe("g_3rd_describe", () => {
  test("g test 11", async ({ page }) => {
    await page.waitForTimeout(14000);
    console.log("g test 11");
  });

  test("g test 12", async ({ page }) => {
    await page.waitForTimeout(14000);
    console.log("g test 12");
  });

  test("g test 13", async ({ page }) => {
    await page.waitForTimeout(14000);
    console.log("g test 13");
  });

  test("g test 14", async ({ page }) => {
    await page.waitForTimeout(14000);
    console.log("g test 14");
  });

  test("g test 15", async ({ page }) => {
    await page.waitForTimeout(14000);
    console.log("g test 15");
  });
});

test.describe("g_4th_describe", () => {
  test("g test 16", async ({ page }) => {
    await page.waitForTimeout(14000);
    console.log("g test 16");
  });

  test("g test 17", async ({ page }) => {
    await page.waitForTimeout(14000);
    console.log("g test 17");
  });

  test("g test 18", async ({ page }) => {
    await page.waitForTimeout(14000);
    console.log("g test 18");
  });

  test("g test 19", async ({ page }) => {
    await page.waitForTimeout(14000);
    console.log("g test 19");
  });

  test("g test 20", async ({ page }) => {
    await page.waitForTimeout(14000);
    console.log("g test 20");
  });
});
