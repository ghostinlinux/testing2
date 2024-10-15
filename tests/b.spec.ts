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

test.describe("b_1st_describe", () => {
  test("b test 1", async ({ page }) => {
    await page.waitForTimeout(4000);
    console.log("b test 1");
  });

  test("b test 2", async ({ page }) => {
    await page.waitForTimeout(4000);
    console.log("b test 2");
  });

  test("b test 3", async ({ page }) => {
    await page.waitForTimeout(4000);
    console.log("b test 3");
  });

  test("b test 4", async ({ page }) => {
    await page.waitForTimeout(4000);
    console.log("b test 4");
  });

  test("b test 5", async ({ page }) => {
    await page.waitForTimeout(4000);
    console.log("b test 5");
  });
});

test.describe("b_2nd_describe", () => {
  test("b test 6", async ({ page }) => {
    await page.waitForTimeout(4000);
    console.log("b test 6");
  });

  test("b test 7", async ({ page }) => {
    await page.waitForTimeout(120000);
    console.log("b test 7");
  });

  test("b test 8", async ({ page }) => {
    await page.waitForTimeout(4000);
    console.log("b test 8");
  });

  test("b test 9", async ({ page }) => {
    await page.waitForTimeout(4000);
    console.log("b test 9");
  });

  test("b test 10", async ({ page }) => {
    await page.waitForTimeout(4000);
    console.log("b test 10");
  });
});

test.describe("b_3rd_describe", () => {
  test("b test 11", async ({ page }) => {
    await page.waitForTimeout(4000);
    console.log("b test 11");
  });

  test("b test 12", async ({ page }) => {
    await page.waitForTimeout(4000);
    console.log("b test 12");
  });

  test("b test 13", async ({ page }) => {
    await page.waitForTimeout(4000);
    console.log("b test 13");
  });

  test("b test 14", async ({ page }) => {
    await page.waitForTimeout(4000);
    console.log("b test 14");
  });

  test("b test 15", async ({ page }) => {
    await page.waitForTimeout(4000);
    console.log("b test 15");
  });
});

test.describe("b_4th_describe", () => {
  test("b test 16", async ({ page }) => {
    await page.waitForTimeout(4000);
    console.log("b test 16");
  });

  test("b test 17", async ({ page }) => {
    await page.waitForTimeout(4000);
    console.log("b test 17");
  });

  test("b test 18", async ({ page }) => {
    await page.waitForTimeout(4000);
    console.log("b test 18");
  });

  test("b test 19", async ({ page }) => {
    await page.waitForTimeout(4000);
    console.log("b test 19");
  });

  test("b test 20", async ({ page }) => {
    await page.waitForTimeout(4000);
    console.log("b test 20");
  });
});
