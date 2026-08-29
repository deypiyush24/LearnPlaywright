// import{test,expect,Page,request,Locator} from "@playwright/test";

import { test,expect } from "../../fixtures/simpleFixtures";


test('Verify page after automatic navigation via fixture', async ({ goToPageUrl }) => {
  // 'goToPageUrl' is the ready-to-use Page object already navigated to your URL
  
  // The block of code written inside goToPageUrl will execute first before it move further
  // Perform assertions or actions directly
  await expect(goToPageUrl).toHaveTitle("Automation Testing Practice: PlaywrightPractice");

});