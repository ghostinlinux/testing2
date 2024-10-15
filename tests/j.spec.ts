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

test.describe("j_1st_describe", () => {
  test("j test 1", async ({ page }) => {
    await page.waitForTimeout(20000);
    console.log("j test 1");
  });

  test("j test 2", async ({ page }) => {
    await page.waitForTimeout(20000);
    console.log("j test 2");
  });

  test("j test 3", async ({ page }) => {
    await page.waitForTimeout(20000);
    console.log("j test 3");
  });

  test("j test 4", async ({ page }) => {
    await page.waitForTimeout(20000);
    console.log("j test 4");
  });

  test("j test 5", async ({ page }) => {
    await page.waitForTimeout(20000);
    console.log("j test 5");
  });
});

test.describe("j_2nd_describe", () => {
  test("j test 6", async ({ page }) => {
    await page.waitForTimeout(20000);
    console.log("j test 6");
  });

  test("j test 7", async ({ page }) => {
    await page.waitForTimeout(20000);
    console.log("j test 7");
  });

  test("j test 8", async ({ page }) => {
    await page.waitForTimeout(20000);
    console.log("j test 8");
  });

  test("j test 9", async ({ page }) => {
    await page.waitForTimeout(20000);
    console.log("j test 9");
  });

  test("j test 10", async ({ page }) => {
    await page.waitForTimeout(20000);
    console.log("j test 10");
  });
});

test.describe("j_3rd_describe", () => {
  test("j test 11", async ({ page }) => {
    await page.waitForTimeout(20000);
    console.log("j test 11");
  });

  test("j test 12", async ({ page }) => {
    await page.waitForTimeout(20000);
    console.log("j test 12");
  });

  test("j test 13", async ({ page }) => {
    await page.waitForTimeout(20000);
    console.log("j test 13");
  });

  test("j test 14", async ({ page }) => {
    await page.waitForTimeout(20000);
    console.log("j test 14");
  });

  test("j test 15", async ({ page }) => {
    await page.waitForTimeout(20000);
    console.log("j test 15");
  });
});

test.describe("j_4th_describe", () => {
  test("j test 16", async ({ page }) => {
    await page.waitForTimeout(20000);
    console.log("j test 16");
  });

  test("j test 17", async ({ page }) => {
    await page.waitForTimeout(20000);
    console.log("j test 17");
  });

  test("j test 18", async ({ page }) => {
    await page.waitForTimeout(20000);
    console.log("j test 18");
  });

  test("j test 19", async ({ page }) => {
    await page.waitForTimeout(20000);
    console.log("j test 19");
  });

  test("j test 20", async ({ page }) => {
    await page.waitForTimeout(20000);
    console.log("j test 20");
  });
});
