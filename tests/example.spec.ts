import { test, expect } from "@playwright/test";
import{Login} from "../pageObject/login"


test("has title", async ({ page }) => {
  await page.goto("https://playwright.dev/");
  const testData1 = new Login("Piyush",23);
  console.log("This is Age " + testData1.getAge())
  console.log(test.info().title);
  await expect(page).toHaveTitle(/Playwright/);
});

test("get started link", async ({ page }) => {
  await page.goto("https://playwright.dev/");
    console.log(test.info().title);

  // Click the get started link.
  await page.getByRole("link", { name: "Get started" }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(
    page.getByRole("heading", { name: "Installation" }),
  ).toBeVisible();
});
