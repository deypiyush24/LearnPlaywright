import { test, expect, Locator } from "@playwright/test";

test("How to fetch the CSS Value", async ({ page }) => {
  const locatorOfCSSValue: Locator = page.getByLabel("Hello world");
  // with reference to this Locator

  const backGroundClour = await locatorOfCSSValue.evaluate((e1) => {
    return window.getComputedStyle(e1).getPropertyValue("background-color");
  });
});

test("Store Token to Windows local storage ", async ({ page }) => {
  const tokenValue = "Piyush";
  // This pure JavaScript Language,
  await page.evaluate((Token) => {
    window.localStorage.setItem("authToken", Token); // This Actual line  for Local storage
    window.cookieStore.set("authToken", Token); // Example set the cookkies etc
  }, tokenValue);
});

test("How Handle the Frames ", async ({ page }) => {
  await page
    .frameLocator("#Piyush")
    .getByRole("heading", { name: "Hello World" })
    .click();

  await expect.soft(page.getByTestId("user-name")).toHaveText("John Doe");
  await expect
    .soft(page.getByTestId("user-email"))
    .toHaveText("john@example.com");
  await expect.soft(page.getByTestId("user-status")).toHaveText("Active");
  test.info().errors;

  await test.info().attach("PLIYUU", {
    body: "screenShot",
    contentType: "image/png",
  });
});
