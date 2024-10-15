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

test.describe("a_1st_describe", () => {
  test("a test 1", async ({ page }) => {
    await page.waitForTimeout(2000);
    console.log("a test 1");
  });

  test("a test 2", async ({ page }) => {
    await page.waitForTimeout(2000);
    console.log("a test 2");
  });

  test("a test 3", async ({ page }) => {
    await page.waitForTimeout(2000);
    console.log("a test 3");
  });

  test("a test 4", async ({ page }) => {
    await page.waitForTimeout(2000);
    console.log("a test 4");
  });

  test("a test 5", async ({ page }) => {
    await page.waitForTimeout(2000);
    console.log("a test 5");
  });
});

test.describe("a_2nd_describe", () => {
  test("a test 6", async ({ page }) => {
    await page.waitForTimeout(2000);
    console.log("a test 6");
  });

  test("a test 7", async ({ page }) => {
    await page.waitForTimeout(2000);
    console.log("a test 7");
  });

  test("a test 8", async ({ page }) => {
    await page.waitForTimeout(2000);
    console.log("a test 8");
  });

  test("a test 9", async ({ page }) => {
    await page.waitForTimeout(2000);
    console.log("a test 9");
  });

  test("a test 10", async ({ page }) => {
    await page.waitForTimeout(2000);
    console.log("a test 10");
  });
});

test.describe("a_3rd_describe", () => {
  test("a test 11", async ({ page }) => {
    await page.waitForTimeout(2000);
    console.log("a test 11");
  });

  test("a test 12", async ({ page }) => {
    await page.waitForTimeout(2000);
    console.log("a test 12");
  });

  test("a test 13", async ({ page }) => {
    await page.waitForTimeout(2000);
    console.log("a test 13");
  });

  test("a test 14", async ({ page }) => {
    await page.waitForTimeout(2000);
    console.log("a test 14");
  });

  test("a test 15", async ({ page }) => {
    await page.waitForTimeout(2000);
    console.log("a test 15");
  });
});

test.describe("a_4th_describe", () => {
  test("a test 16", async ({ page }) => {
    await page.waitForTimeout(2000);
    console.log("a test 16");
  });

  test("a test 17", async ({ page }) => {
    await page.waitForTimeout(2000);
    console.log("a test 17");
  });

  test("a test 18", async ({ page }) => {
    await page.waitForTimeout(2000);
    console.log("a test 18");
  });

  test("a test 19", async ({ page }) => {
    await page.waitForTimeout(2000);
    console.log("a test 19");
  });

  test("a test 20", async ({ page }) => {
    await page.waitForTimeout(2000);
    console.log("a test 20");
  });
});
