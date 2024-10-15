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

test.describe("c_1st_describe", () => {
  test("c test 1", async ({ page }) => {
    await page.waitForTimeout(6000);
    console.log("c test 1");
  });

  test("c test 2", async ({ page }) => {
    await page.waitForTimeout(6000);
    console.log("c test 2");
  });

  test("c test 3", async ({ page }) => {
    await page.waitForTimeout(6000);
    console.log("c test 3");
  });

  test("c test 4", async ({ page }) => {
    await page.waitForTimeout(6000);
    console.log("c test 4");
  });

  test("c test 5", async ({ page }) => {
    await page.waitForTimeout(6000);
    console.log("c test 5");
  });
});

test.describe("c_2nd_describe", () => {
  test("c test 6", async ({ page }) => {
    await page.waitForTimeout(6000);
    console.log("c test 6");
  });

  test("c test 7", async ({ page }) => {
    await page.waitForTimeout(6000);
    console.log("c test 7");
  });

  test("c test 8", async ({ page }) => {
    await page.waitForTimeout(6000);
    console.log("c test 8");
  });

  test("c test 9", async ({ page }) => {
    await page.waitForTimeout(6000);
    console.log("c test 9");
  });

  test("c test 10", async ({ page }) => {
    await page.waitForTimeout(6000);
    console.log("c test 10");
  });
});

test.describe("c_3rd_describe", () => {
  test("c test 11", async ({ page }) => {
    await page.waitForTimeout(6000);
    console.log("c test 11");
  });

  test("c test 12", async ({ page }) => {
    await page.waitForTimeout(6000);
    console.log("c test 12");
  });

  test("c test 13", async ({ page }) => {
    await page.waitForTimeout(6000);
    console.log("c test 13");
  });

  test("c test 14", async ({ page }) => {
    await page.waitForTimeout(6000);
    console.log("c test 14");
  });

  test("c test 15", async ({ page }) => {
    await page.waitForTimeout(6000);
    console.log("c test 15");
  });
});

test.describe("c_4th_describe", () => {
  test("c test 16", async ({ page }) => {
    await page.waitForTimeout(6000);
    console.log("c test 16");
  });

  test("c test 17", async ({ page }) => {
    await page.waitForTimeout(6000);
    console.log("c test 17");
  });

  test("c test 18", async ({ page }) => {
    await page.waitForTimeout(6000);
    console.log("c test 18");
  });

  test("c test 19", async ({ page }) => {
    await page.waitForTimeout(6000);
    console.log("c test 19");
  });

  test("c test 20", async ({ page }) => {
    await page.waitForTimeout(6000);
    console.log("c test 20");
  });
});
