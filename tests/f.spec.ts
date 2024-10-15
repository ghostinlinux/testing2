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

test.describe("f_1st_describe", () => {
  test("f test 1", async ({ page }) => {
    await page.waitForTimeout(12000);
    console.log("f test 1");
  });

  test("f test 2", async ({ page }) => {
    await page.waitForTimeout(12000);
    console.log("f test 2");
  });

  test("f test 3", async ({ page }) => {
    await page.waitForTimeout(12000);
    console.log("f test 3");
  });

  test("f test 4", async ({ page }) => {
    await page.waitForTimeout(12000);
    console.log("f test 4");
  });

  test("f test 5", async ({ page }) => {
    await page.waitForTimeout(12000);
    console.log("f test 5");
  });
});

test.describe("f_2nd_describe", () => {
  test("f test 6", async ({ page }) => {
    await page.waitForTimeout(12000);
    console.log("f test 6");
  });

  test("f test 7", async ({ page }) => {
    await page.waitForTimeout(12000);
    console.log("f test 7");
  });

  test("f test 8", async ({ page }) => {
    await page.waitForTimeout(12000);
    console.log("f test 8");
  });

  test("f test 9", async ({ page }) => {
    await page.waitForTimeout(12000);
    console.log("f test 9");
  });

  test("f test 10", async ({ page }) => {
    await page.waitForTimeout(12000);
    console.log("f test 10");
  });
});

test.describe("f_3rd_describe", () => {
  test("f test 11", async ({ page }) => {
    await page.waitForTimeout(12000);
    console.log("f test 11");
  });

  test("f test 12", async ({ page }) => {
    await page.waitForTimeout(12000);
    console.log("f test 12");
  });

  test("f test 13", async ({ page }) => {
    await page.waitForTimeout(12000);
    console.log("f test 13");
  });

  test("f test 14", async ({ page }) => {
    await page.waitForTimeout(12000);
    console.log("f test 14");
  });

  test("f test 15", async ({ page }) => {
    await page.waitForTimeout(12000);
    console.log("f test 15");
  });
});

test.describe("f_4th_describe", () => {
  test("f test 16", async ({ page }) => {
    await page.waitForTimeout(12000);
    console.log("f test 16");
  });

  test("f test 17", async ({ page }) => {
    await page.waitForTimeout(12000);
    console.log("f test 17");
  });

  test("f test 18", async ({ page }) => {
    await page.waitForTimeout(12000);
    console.log("f test 18");
  });

  test("f test 19", async ({ page }) => {
    await page.waitForTimeout(12000);
    console.log("f test 19");
  });

  test("f test 20", async ({ page }) => {
    await page.waitForTimeout(12000);
    console.log("f test 20");
  });
});
