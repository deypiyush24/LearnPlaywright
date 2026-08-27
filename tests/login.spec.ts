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
  const userName = userNameText!.split(":")[1].trim(); // ! assert that Values should be not null
  const password = passwordText!.split(":")[1].trim(); // ! assert that Values should be not null

  await loginPage.enterTheUserNameAndPassword(userName, password);
  await loginPage.clickOnTheLoginButton();
  await loginPage.verifyTheLoginPageText(
    "You logged into a secure area!",
    userName,
  );

 

// Here Taking screenShot putting in folder path provided
// 1. Take the screenshot and save it to a file
 const screenshotPath:string = "screenshot.png";
  await page.screenshot({ path: screenshotPath })

  // 2. Attach the saved file directly to the test report
  await test.info().attach('Secure Area', 
    {
    path: screenshotPath,
    contentType: 'image/png'}
  )

  // Locator level which Not recommemded :Just put locator in front of screen shot
  // await page.locator().screenshot({pass: information})

  // Visual Regression : 
  await expect(page.screenshot()).toMatchSnapshot();

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

