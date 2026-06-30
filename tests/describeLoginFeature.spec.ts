import { test, expect } from "@playwright/test";
import { Login } from "../src/pageObject/login";
import { Constants } from "../src/utils/constants";
import { Logger } from "../src/utils/log";
import { loginTestData } from "../src/testData/loginData";

let loginPage: Login;

/* 
Here we using feature test.describe it helps to group the functionality togethere
It is used to group related tests together: In Playwright, test.describe acts as a container or a "test suite." 
It allows you to organize multiple individual test blocks that belong to the same feature, page, or workflow.

It makes test reports clean and organized: When you run your tests, 
Playwright uses the name you give to your test.describe block as a heading in your HTML reports. 
This makes it easy to see which feature group passed or failed at a glance.

It allows you to share setup steps: You can place hooks like test.beforeEach or test.afterEach inside a test.describe block. 
These setup steps will then run only for the tests inside that specific group, keeping your setup localized.

It allows you to skip or target groups easily: 
You can apply modifiers to the entire group at once. For example, 
using test.describe.skip will skip all the tests inside that block without needing to add a skip flag to every single test individually.

*/

// Check The Readme for the Describe Report Snapshot

test.describe(`@Login functionality testing`, async () => {
  test.beforeEach("Test Setup is done", async ({ page }) => {
    const titleOfThePage: string =
      "Test Login Page for Automation Testing Practice";
    const welcomeText: string =
      "Test Login page for Automation Testing Practice";
    const url: string = Constants.testLoginurl;

    await test.step("Given the user navigates to the login page", async () => {
      await page.goto(url);
      Logger.successinfo(`User navigate to URL : ${Constants.testLoginurl}`);
      await expect(page).toHaveTitle(titleOfThePage);
      loginPage = new Login(page);
      await loginPage.verifyWelcomeText(welcomeText);
    });
  });

  test("Verify The Successfull Login", async ({ page }) => {
    console.log(`${test.info().title} for the ${test.info().project.name}`);
    const userNameText = await page
      .getByText("Username: practice", { exact: true })
      .textContent();
    const passwordText = await page
      .getByText("Password: SuperSecretPassword!", { exact: true })
      .textContent();
    const userName = userNameText!.split(":")[1].trim(); // Here Values should be not null
    const password = passwordText!.split(":")[1].trim(); // Here Values should be not null

    await loginPage.enterTheUserNameAndPassword(userName, password);
    await loginPage.clickOnTheLoginButton();
    await loginPage.verifyTheLoginPageText(
      "You logged into a secure area!",
      userName,
    );
    await loginPage.logutOfTheApplication();
  });

  test(`@invalidUserName Invalid Username`, async ({ page }) => {
    console.log(`${test.info().title} for the ${test.info().project.name}`);
    const userName = "Piyush";
    const passwordText = await page
      .getByText("Password: SuperSecretPassword!", { exact: true })
      .textContent();
    const password = passwordText!.split(":")[1].trim(); // Here Values should be not null
    await loginPage.enterTheUserNameAndPassword(userName, password);
    await loginPage.clickOnTheLoginButton();
    await loginPage.verifyTheAlertForWrongCredentials(
      "Your password is invalid!",
    );
  });

  test(`@invalidPassword Invalid Password`, async ({ page }) => {
    console.log(`${test.info().title} for the ${test.info().project.name}`);
    const userNameText = await page
      .getByText("Username: practice", { exact: true })
      .textContent();
    const userName = userNameText!.split(":")[1].trim(); // Here Values should be not null
    let password: string = "";
    loginTestData.forEach((eachTestData) => {
      if (eachTestData.scenario == "Invalid password") {
        password = eachTestData.password;
      }
    });
    await loginPage.enterTheUserNameAndPassword(userName, password);
    await loginPage.clickOnTheLoginButton();
    await loginPage.verifyTheAlertForWrongCredentials(
      "Your password is invalid!",
    );
  });
});
