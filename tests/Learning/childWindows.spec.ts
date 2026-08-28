import { test, expect, Locator, Page } from "@playwright/test";

/*
1 )How to handle child windows
*/
const selectURL ="https://testautomationpractice.blogspot.com/p/playwrightpractice.html#";

test.beforeEach(async ({ page }) => {

  await test.step("Given User On the Page", async()=>
  { 
  await page.goto(selectURL);
  await expect(page).toHaveTitle("Automation Testing Practice: PlaywrightPractice");
  const titleValue = await page.title();
  console.log(titleValue);
  console.log(`${test.info().title}`)
  });

});

test("Child Windows ", async ({ page }) => {
  // Make the Playwright there will be event
  const popUpPromise = await page.waitForEvent("popup");
  const homeLink: Locator = page.getByRole("link", {
    name: "Home",
    exact: true,
  });
  await homeLink.click();
  const homePage = await popUpPromise;
  await homePage.waitForLoadState("domcontentloaded");
  console.log(await homePage.url());
});
