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

test.describe("i_1st_describe", () => {
  test("i test 1", async ({ page }) => {
    await page.waitForTimeout(18000);
    console.log("i test 1");
  });

  test("i test 2", async ({ page }) => {
    await page.waitForTimeout(18000);
    console.log("i test 2");
  });

  test("i test 3", async ({ page }) => {
    await page.waitForTimeout(18000);
    console.log("i test 3");
  });

  test("i test 4", async ({ page }) => {
    await page.waitForTimeout(18000);
    console.log("i test 4");
  });

  test("i test 5", async ({ page }) => {
    await page.waitForTimeout(18000);
    console.log("i test 5");
  });
});

test.describe("i_2nd_describe", () => {
  test("i test 6", async ({ page }) => {
    await page.waitForTimeout(18000);
    console.log("i test 6");
  });

  test("i test 7", async ({ page }) => {
    await page.waitForTimeout(18000);
    console.log("i test 7");
  });

  test("i test 8", async ({ page }) => {
    await page.waitForTimeout(18000);
    console.log("i test 8");
  });

  test("i test 9", async ({ page }) => {
    await page.waitForTimeout(18000);
    console.log("i test 9");
  });

  test("i test 10", async ({ page }) => {
    await page.waitForTimeout(18000);
    console.log("i test 10");
  });
});

test.describe("i_3rd_describe", () => {
  test("i test 11", async ({ page }) => {
    await page.waitForTimeout(18000);
    console.log("i test 11");
  });

  test("i test 12", async ({ page }) => {
    await page.waitForTimeout(18000);
    console.log("i test 12");
  });

  test("i test 13", async ({ page }) => {
    await page.waitForTimeout(18000);
    console.log("i test 13");
  });

  test("i test 14", async ({ page }) => {
    await page.waitForTimeout(18000);
    console.log("i test 14");
  });

  test("i test 15", async ({ page }) => {
    await page.waitForTimeout(18000);
    console.log("i test 15");
  });
});

test.describe("i_4th_describe", () => {
  test("i test 16", async ({ page }) => {
    await page.waitForTimeout(18000);
    console.log("i test 16");
  });

  test("i test 17", async ({ page }) => {
    await page.waitForTimeout(18000);
    console.log("i test 17");
  });

  test("i test 18", async ({ page }) => {
    await page.waitForTimeout(18000);
    console.log("i test 18");
  });

  test("i test 19", async ({ page }) => {
    await page.waitForTimeout(18000);
    console.log("i test 19");
  });

  test("i test 20", async ({ page }) => {
    await page.waitForTimeout(18000);
    console.log("i test 20");
  });
});
