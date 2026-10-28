import { test as base, expect, Page } from "@playwright/test";

type Hooks = {
  // Here Just we Define the Application not Loading to memory so const and let not used.
  loginToApplication: Page;
};

export const test  = base.extend<Hooks>({
  loginToApplication: async({page},use)=>
  {

    const url = "https://testautomationpractice.blogspot.com/p/playwrightpractice.html";
    await page.goto(url);
    await expect(page).toHaveTitle("Automation Testing Practice: PlaywrightPractice");
    console.log(`User Landed on Page : ${page.url()}`);
    await use(page);
    // use word pass the Fixture to test  


    // This below line is executed later stage.
    console.log('Test Completed');

  }
});

export {expect};