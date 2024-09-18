const { test, expect } = require("@playwright/test");

const UI_URL = "http://localhost:5173/";

test.beforeEach("should show product detail page", async ({ page }) => {
  await page.goto(UI_URL);

  const productSelecter = "#product-card";
  await page.getByText("Browse Products").click();

  await page.locator(productSelecter).nth(2).hover();
  await page.getByText("View Product").click();
  await expect(page.getByText("Mens Cotton Jacket")).toBeVisible();

  await expect(page.getByText("Choose a size")).toBeVisible();
  await page.getByText("XXL").click();
  await page.getByRole("button", { name: "Add" }).click();
  await expect(page.getByText("Added to cart!")).toBeVisible();

  const cart = "#cart";
  await page.locator(cart).click();
  await expect(page.getByText("Mens Cotton Jacket")).toBeVisible();
  await expect(page.getByText("XXL")).toBeVisible();
});

test("should delete product from cart", async ({ page }) => {
  // product delete from cart
  await page.getByText("Delete").click();
  await expect(page.getByText("Product Removed!")).toBeVisible();
});

test("should add discount after apllying coupen", async ({ page }) => {
  // test of discount
  await page.getByText("MOHIT20").click();
  await page.getByRole("button", { name: "Apply" }).click();
  await expect(page.getByText("MOHIT20 has been applied!!🎉🎉")).toBeVisible();
  await expect(page.getByText("$47.59")).toBeVisible();

  await page.getByRole("button", { name: "Proceed To Payment" }).click()

  //should show shipping detail form && fill proper details
  await expect(page.getByText("Shipping details")).toBeVisible()
  await page.locator("[name=country]").fill("India")
  await page.locator("[name=email]").fill("mohitvyas746@gmail.com")
  await page.locator("[name=name]").fill("John Snow")
  await page.locator("[name=address]").fill("Nepean Sea street")
  await page.locator("[name=contact]").fill("7912984242")
  await page.locator("[name=pinCode]").fill("401101")
  await page.selectOption("[name=method]","cash on delivery")
  await page.getByRole("button",{name:"Save"}).click()

  // should show user details
  await expect(page.getByText("Payment Information")).toBeVisible()
  await expect(page.getByText("John Snow")).toBeVisible()
  await expect(page.getByText("$47.59")).toBeVisible()
  await page.getByRole("button",{name:"Place Order"}).click()
  
  // should place order
   await expect(page.getByText("Order Placed Successfully!")).toBeVisible()
   await expect(page.getByText("Mens cotton jacket")).toBeVisible()
  
   // should clear orders data
   await page.getByText("clear data").click()
   await expect(page.getByText("cleared orders data!")).toBeVisible()
});
