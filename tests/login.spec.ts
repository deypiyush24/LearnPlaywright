import { test, expect } from "@playwright/test";
import { ColourCode } from "../src/utils/colourCode";
import { Login }  from "../src/pageObject/login"; 


test.only("Starting of test", async ({ context,page }) => {
  console.log(test.info().title);
  const titleOfThePage: string ="Automation Testing Practice Website for QA and Developers | UI and API";
  await page.goto("https://practice.expandtesting.com/");
  await expect(page).toHaveTitle(titleOfThePage)
  const welcomeText:string = "Automation Testing Practice WebSite for QA and Developers";
  const loginPage = new Login(page);
  await loginPage.verifyWelcomeText(welcomeText);
  // 1. Start waiting for the new page event BEFORE clicking
const pagePromise = context.waitForEvent('page');
  // 2. Click the element that opens the new window
  await page.getByRole('link',{name:'Test Login Page'}).click();

  // 3. Resolve the promise to get the new page object
  const newPage = await pagePromise;

  // 4. Wait for the new page to load its DOM content
  await newPage.waitForLoadState();



  

});
