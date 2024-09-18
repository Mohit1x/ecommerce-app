const { test, expect } = require("@playwright/test");

const UI_URL = "http://localhost:5173/";

test("should show header", async ({ page }) => {
  await page.goto(UI_URL);

  const headerLogo = "#header-logo";
  await expect(page.locator(headerLogo)).toBeVisible();
  const orderBag = "#order-bag";
  await expect(page.locator(orderBag)).toBeVisible();
  const userIcon = "#user-icon";
  await expect(page.locator(userIcon)).toBeVisible();
});
