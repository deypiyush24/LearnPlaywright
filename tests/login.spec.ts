import { test, expect } from "@playwright/test";
import { ColourCode } from "../src/utils/colourCode";
import { Login } from "../src/pageObject/login";
import { CommonUtils } from "../src/utils/commonUtils";
import { Constants } from "../src/utils/constants";
import { Logger } from "../src/utils/log";

let loginPage: Login;

test.beforeEach("Test Setup is done", async ({ page }) => {
  const titleOfThePage: string =
    "Test Login Page for Automation Testing Practice";
  const welcomeText: string = "Test Login page for Automation Testing Practice";
  const url: string = Constants.testLoginurl;
  await page.goto(url);
  Logger.successinfo(`URL clicked : ${Constants.testLoginurl}`);
  await expect(page).toHaveTitle(titleOfThePage);
  loginPage = new Login(page);
  await loginPage.verifyWelcomeText(welcomeText);
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

test(`@invalidUserName Invalid Username`, async ({ context, page }) => {
  console.log(`${test.info().title} for the ${test.info().project.name}`);
  const userName = "Piyush";
  const passwordText = await page.getByText("Password: SuperSecretPassword!", { exact: true }).textContent();
  const password = passwordText!.split(":")[1].trim(); // Here Values should be not null
  await loginPage.enterTheUserNameAndPassword(userName, password);
  await loginPage.clickOnTheLoginButton();
  await loginPage.verifyTheAlertForWrongCredentials("Your password is invalid!");
});

test(`@invalidPassword Invalid Password`, async ({ context, page }) => {
  console.log(`${test.info().title} for the ${test.info().project.name}`);
    const userNameText = await page
    .getByText("Username: practice", { exact: true })
    .textContent();
  const userName = userNameText!.split(":")[1].trim(); // Here Values should be not null
  const password = "WrongPassword"
  await loginPage.enterTheUserNameAndPassword(userName, password);
  await loginPage.clickOnTheLoginButton();
  await loginPage.verifyTheAlertForWrongCredentials("Your password is invalid!");
});

