import { test, expect } from "@playwright/test";
import { Login } from "../src/pageObject/login";
import { Constants } from "../src/utils/constants";
import { Logger } from "../src/utils/log";
import { loginTestData } from "../src/testData/loginData";

let loginPage: Login;

test.beforeEach("Test Setup is done", async ({ page }) => {
  const titleOfThePage: string =
    "Test Login Page for Automation Testing Practice";
  const welcomeText: string = "Test Login page for Automation Testing Practice";
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
  let password:string =""; 
  loginTestData.forEach( (eachTestData)=> { if (eachTestData.scenario =="Invalid password" )
  {password = eachTestData.password}
  })
  await loginPage.enterTheUserNameAndPassword(userName, password);
  await loginPage.clickOnTheLoginButton();
  await loginPage.verifyTheAlertForWrongCredentials(
    "Your password is invalid!",
  );
});

loginTestData.forEach((testData) => {
  test(`@Login Login Verification: ${testData.scenario}`, async ({
    page,
  }) => {
    await test.step("When they enter valid credentials", async () => {
      await loginPage.enterTheUserNameAndPassword(
        testData.username,
        testData.password,
      );
      await loginPage.clickOnTheLoginButton();
    });

    await test.step("Then they see the Message", async () => {
      if (testData.scenario == "Valid credentials") {
        await loginPage.verifyTheLoginPageText(
          testData.expectedMessage,
          testData.username,
        );
        await loginPage.logutOfTheApplication();
      } else {
        await loginPage.verifyTheAlertForWrongCredentials(
          testData.expectedMessage,
        );
      }
    });
  });
});
