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






test("Child Windows ", async ({ page }) => 
  
{
 const [newPage] = await Promise.all([
  page.waitForEvent("popup"),
  page.getByRole("button",{name:"New Tab"}),

 ]);

 await newPage.waitForLoadState("networkidle");

// 3. Interact with the new tab
console.log(`New Tab with in that browser: ${await newPage.title()}`);
await expect(newPage).toHaveURL(/expected-url-part/);
await newPage.locator('#username').fill('Piyush');

// 4. Close the new tab and switch focus back to the original page
await newPage.close();
await page.bringToFront();

});

test("Popup To new Browser complete", async({context,page})=>
{
  const [newTab] = await Promise.all(
    [
      context.waitForEvent('page'),
      page.getByRole("button",{name:"Popup Windows"}),

    ]
  );

  await newTab.waitForLoadState("domcontentloaded");

})



test("Handle  Simple ALerts Popups", async ({ page }) => {
  // Make the PlaywrightUnderstand there is event going to happen

  await page.once("dialog", async (dialog) => {
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
    path: 'screenshots/dialogueBox.png',   /// Path here 
    });
   await test.info().attach("dialogueBOX", {
      body: dialogueBox,
      contentType: "image/png",
    });

  await page.locator("#promptBtn").click();
});
