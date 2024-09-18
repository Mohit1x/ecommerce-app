
const { test, expect } = require('@playwright/test');

const UI_URL = "http://localhost:5173/"

test('should show product', async ({ page }) => {
  await page.goto(UI_URL);

  await expect(page.getByText("Free Delivery!")).toBeVisible()

  await page.getByText("Browse Products").click()
  await expect(page.getByText("Mens Cotton Jacket")).toBeVisible()
});

test('should show product detail page',async({page})=>{
    await page.goto(UI_URL)

    const productSelecter = "#product-card"
    await page.getByText("Browse Products").click()
    
    await page.locator(productSelecter).nth(2).hover() 
    await page.getByText("View Product").click()
    await expect(page.getByText("Mens Cotton Jacket")).toBeVisible()
})

test("should add product to whishlist",async({page})=>{
    await page.goto(UI_URL)

    await page.getByText("Browse Product").click()
    
    const productHeartIcon = "#product-heart-icon"
    await page.locator(productHeartIcon).nth(2).click()

    const HeaderHeartIcon = "#header-heart-icon"
    await page.locator(HeaderHeartIcon).click()
    expect(page.getByText("Mens Cotton Jacket")).toBeVisible()
})