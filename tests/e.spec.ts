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

test.describe("e_1st_describe", () => {
  test("e test 1", async ({ page }) => {
    await page.waitForTimeout(10000);
    console.log("e test 1");
  });

  test("e test 2", async ({ page }) => {
    await page.waitForTimeout(10000);
    console.log("e test 2");
  });

  test("e test 3", async ({ page }) => {
    await page.waitForTimeout(10000);
    console.log("e test 3");
  });

  test("e test 4", async ({ page }) => {
    await page.waitForTimeout(10000);
    console.log("e test 4");
  });

  test("e test 5", async ({ page }) => {
    await page.waitForTimeout(10000);
    console.log("e test 5");
  });
});

test.describe("e_2nd_describe", () => {
  test("e test 6", async ({ page }) => {
    await page.waitForTimeout(10000);
    console.log("e test 6");
  });

  test("e test 7", async ({ page }) => {
    await page.waitForTimeout(10000);
    console.log("e test 7");
  });

  test("e test 8", async ({ page }) => {
    await page.waitForTimeout(10000);
    console.log("e test 8");
  });

  test("e test 9", async ({ page }) => {
    await page.waitForTimeout(10000);
    console.log("e test 9");
  });

  test("e test 10", async ({ page }) => {
    await page.waitForTimeout(10000);
    console.log("e test 10");
  });
});

test.describe("e_3rd_describe", () => {
  test("e test 11", async ({ page }) => {
    await page.waitForTimeout(10000);
    console.log("e test 11");
  });

  test("e test 12", async ({ page }) => {
    await page.waitForTimeout(10000);
    console.log("e test 12");
  });

  test("e test 13", async ({ page }) => {
    await page.waitForTimeout(10000);
    console.log("e test 13");
  });

  test("e test 14", async ({ page }) => {
    await page.waitForTimeout(10000);
    console.log("e test 14");
  });

  test("e test 15", async ({ page }) => {
    await page.waitForTimeout(10000);
    console.log("e test 15");
  });
});

test.describe("e_4th_describe", () => {
  test("e test 16", async ({ page }) => {
    await page.waitForTimeout(10000);
    console.log("e test 16");
  });

  test("e test 17", async ({ page }) => {
    await page.waitForTimeout(10000);
    console.log("e test 17");
  });

  test("e test 18", async ({ page }) => {
    await page.waitForTimeout(10000);
    console.log("e test 18");
  });

  test("e test 19", async ({ page }) => {
    await page.waitForTimeout(10000);
    console.log("e test 19");
  });

  test("e test 20", async ({ page }) => {
    await page.waitForTimeout(10000);
    console.log("e test 20");
  });
});
