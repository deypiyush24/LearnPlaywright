import { test, expect, Locator, Page, Expect } from "@playwright/test";
import { Logger as log } from "../../utils/log";

/*
1 )How to handle child windows
*/




async function waitForTheLocatorVisibleAndThenClick(locator:Locator, waitTime:number ):Promise<void> 
{

await expect(locator).toBeVisible({timeout: waitTime});
await locator.click();

}


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

test(`@WebTootl : DialogBox`, async ({ page }) => {

  // Here we are using test.step-> concept
  await test.step("Given we are on the Landing Page", async () => {
    await page.goto(
      "https://testautomationpractice.blogspot.com/p/playwrightpractice.html",
    );
  });

  await test.step("When we click on dialogue box ", async () => {
    const locatorForDialogBox = page.locator("//button[@id='alertBtn']");
    page.once("dialog", async (dialog) => {
      console.log(`Alert message: ${dialog.message()}`);
      await dialog.accept();
    });

    await locatorForDialogBox.click();
  });
});






test("Child Windows ", async ({ page }) => {

// 1. Wait for the popup event while clicking the trigger element
const [newTab] = await Promise.all([
  page.waitForEvent('popup'),
  page.getByRole("button",{name : "New Tab"}).click(),
]);



const [newPage] = await Promise.all(
[
 page.waitForEvent("popup"),
 page.getByRole("button",{name : "New Tab"}).click(),
]
);

// 2. Wait for the new tab to finish loading
await newPage.waitForLoadState("networkidle");

// 3. Interact with the new tab
console.log(`New Tab Title: ${await newPage.title()}`);
// await expect(newTab).toHaveURL(/expected-url-part/);
// await newTab.locator('#username').fill('Piyush');

// 4. Close the new tab and switch focus back to the original page
await newPage.close();
await page.bringToFront();

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
   const dialogueBox = await page.screenshot({ 
    fullPage: true,
    path: 'screenshots/dialogueBox.png',
    });
   await test.info().attach("dialogueBOX", {
      body: dialogueBox,
      contentType: "image/png",
    });

  await page.locator("#promptBtn").click();
});
