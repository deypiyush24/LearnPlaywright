import { test, expect, Locator, Page } from "@playwright/test";
import {Logger as log} from "../../utils/log";

/*
1 )How to handle child windows
*/
const selectURL = process.env.playwrightAutomation!;

test.beforeEach(async ({ page }) => {
  await test.step("Given User On the Page", async () => {
    await page.goto(selectURL);
    await expect(page).toHaveTitle(
      "Automation Testing Practice: PlaywrightPractice",
    );
    const titleValue = await page.title();

    // console.log(titleValue);
    // console.log(`${test.info().title}`);
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

test("Handle  Simple ALerts Popups", async ({ page }) => {
  // Make the PlaywrightUnderstand there is event going to happen

  page.once("dialog", async (dialog) => {
    console.log(`Alert message: ${dialog.message()}`);
    await dialog.accept();
  });
  await page.locator("#alertBtn").click();
});

test("Handle Confirmation ALerts Popups", async ({ page }) => {
  // Make the PlaywrightUnderstand there is event going to happen

  page.once("dialog", async (dialog) => {
    console.log(`Alert message: ${dialog.message()}`);
    await dialog.dismiss();
  });
  await page.locator("#confirmBtn").click();
});

test("Handle Prompt ALerts Popups", async ({ page }) => {
  // Make the PlaywrightUnderstand there is event going to happen

  page.once("dialog", async (dialog) => {
    console.log(`Prompt default: ${dialog.defaultValue()}`);
    await dialog.accept("Hello Piyush");
  });
  await page.locator("#promptBtn").click();
});
