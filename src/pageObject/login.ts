import { expect, Locator, Page } from "@playwright/test";
import { Logger } from "../utils/log";

export class Login {
  private readonly page: Page;
  private readonly welcomeText: Locator;
  private readonly userName: Locator;
  private readonly password: Locator;
  private readonly loginButton: Locator;
  private readonly loginPageText:Locator;
  private readonly greetingTextToUser:Locator;
   private readonly logutButton:Locator;
    private readonly logutSuccessMessage:Locator;
     private readonly wrongCredsMessage:Locator;

  constructor(page: Page) {
    this.page = page;
    this.welcomeText = page.getByRole("heading", {
      name: "Test Login page for Automation Testing Practice",
    });
    this.userName = page.getByRole("textbox", { name: "Username" });
    this.password = page.getByRole("textbox", { name: "Password" });
    this.loginButton = page.getByRole("button", { name: "Login" });
    this.loginPageText = page.getByText("You logged into a secure area!");
    this.greetingTextToUser = page.locator("#username");
    this.logutButton = page.getByRole("link",{name:"Logout"});
    this.logutSuccessMessage = page.getByText("You logged out of the secure area!");
     this.wrongCredsMessage = page.locator("#flash");
  }

  public async verifyWelcomeText(expected: string) {
    await expect(this.welcomeText).toHaveText(expected);
  }

  public async enterTheUserNameAndPassword(userName: string,password: string) 
  {
    await this.userName.fill(userName);
    await this.password.fill(password);
    Logger.successinfo("Creds are :" +userName + " " + password );
  }

  public async clickOnTheLoginButton()
  {
    await this.loginButton.click();
    Logger.successinfo("Login Button clicked Succesfully");
  }

  public async verifyTheLoginPageText(text:string,userName:string)
  {
    await expect(this.loginPageText).toHaveText(text);
    Logger.successinfo(`Verified the text ${text}`);
    await expect(this.greetingTextToUser).toContainText(userName);
    Logger.successinfo(`Verified the userName in the greeting ${userName}`);
  }

  public async logutOfTheApplication()
  {
    await this.logutButton.click();
    Logger.successinfo("Logout Button clicked Succesfully");

  }

  public async verifyTheAlertForWrongCredentials(errorMessage:string)
  {
    await expect(this.wrongCredsMessage).toHaveText(errorMessage)
  }


}
