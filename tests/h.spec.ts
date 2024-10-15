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

test.describe("h_1st_describe", () => {
  test("h test 1", async ({ page }) => {
    await page.waitForTimeout(16000);
    console.log("h test 1");
  });

  test("h test 2", async ({ page }) => {
    await page.waitForTimeout(16000);
    console.log("h test 2");
  });

  test("h test 3", async ({ page }) => {
    await page.waitForTimeout(16000);
    console.log("h test 3");
  });

  test("h test 4", async ({ page }) => {
    await page.waitForTimeout(16000);
    console.log("h test 4");
  });

  test("h test 5", async ({ page }) => {
    await page.waitForTimeout(16000);
    console.log("h test 5");
  });
});

test.describe("h_2nd_describe", () => {
  test("h test 6", async ({ page }) => {
    await page.waitForTimeout(16000);
    console.log("h test 6");
  });

  test("h test 7", async ({ page }) => {
    await page.waitForTimeout(16000);
    console.log("h test 7");
  });

  test("h test 8", async ({ page }) => {
    await page.waitForTimeout(16000);
    console.log("h test 8");
  });

  test("h test 9", async ({ page }) => {
    await page.waitForTimeout(16000);
    console.log("h test 9");
  });

  test("h test 10", async ({ page }) => {
    await page.waitForTimeout(16000);
    console.log("h test 10");
  });
});

test.describe("h_3rd_describe", () => {
  test("h test 11", async ({ page }) => {
    await page.waitForTimeout(16000);
    console.log("h test 11");
  });

  test("h test 12", async ({ page }) => {
    await page.waitForTimeout(16000);
    console.log("h test 12");
  });

  test("h test 13", async ({ page }) => {
    await page.waitForTimeout(16000);
    console.log("h test 13");
  });

  test("h test 14", async ({ page }) => {
    await page.waitForTimeout(16000);
    console.log("h test 14");
  });

  test("h test 15", async ({ page }) => {
    await page.waitForTimeout(16000);
    console.log("h test 15");
  });
});

test.describe("h_4th_describe", () => {
  test("h test 16", async ({ page }) => {
    await page.waitForTimeout(16000);
    console.log("h test 16");
  });

  test("h test 17", async ({ page }) => {
    await page.waitForTimeout(16000);
    console.log("h test 17");
  });

  test("h test 18", async ({ page }) => {
    await page.waitForTimeout(16000);
    console.log("h test 18");
  });

  test("h test 19", async ({ page }) => {
    await page.waitForTimeout(16000);
    console.log("h test 19");
  });

  test("h test 20", async ({ page }) => {
    await page.waitForTimeout(16000);
    console.log("h test 20");
  });
});
