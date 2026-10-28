import { test as base, expect,Page } from '@playwright/test';


// 1. Define the type of your custom fixtures like a POJO Class What all variables it should return
type SimpleFixtures = {
  goToPageUrl: Page;
};

// Syntax is --> base.extend<FixtureName> ( {nameofProperty : async({page},use)=> { Code what we write }});   ----> use word act as return statement

// 2. Extend base test with the custom fixture
export const test = base.extend<SimpleFixtures>
(    
{
  // Define the fixture name
  goToPageUrl: async ({page}, use) => 
{
    // Setup: prepare the value or action
    const url = process.env.playwrightAutomation;
    if (!url) {
      throw new Error("Environment variable 'playwrightAutomation' is not defined.");
    }
    console.log(`Nagivating to the URL ${url}`);
    await page.goto(url);
    await use(page);

    // Teardown: runs automatically after test completes
    console.log('Teardown: Test finished');
  },
}
);

export { expect };
