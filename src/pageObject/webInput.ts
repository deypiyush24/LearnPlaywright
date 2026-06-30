import { Page, Locator, expect } from "@playwright/test";

export class WebINPUT {
  private readonly page: Page;
  private readonly welcomeText: Locator;
  private readonly inputNumber: Locator;
  private readonly inputText: Locator;
  private readonly inputPassword: Locator;
  private readonly inputDate: Locator;

  constructor(page: Page) {
    this.page = page;
    this.welcomeText = page.getByRole("heading", {
      name: "Web inputs page for Automation Testing Practice",
    });
    this.inputNumber = page.getByRole("textbox", { name: "Input: Number" });
    this.inputText = page.getByRole("textbox", { name: "Input: Text" });
    this.inputPassword = page.getByRole("textbox", { name: "Input: Password" });
    this.inputDate = page.getByRole("textbox", { name: "Input: Date" });
  }

  public async verifyWelcomeText(expected: string) {
    await expect(this.welcomeText).toHaveText(expected);
  }

  public async enterTheNumberTextAndPassword(
    value: number,
    text: string,
    password: string,
  ) {
    await this.inputNumber.fill(`${value}`);
    await this.inputText.fill(text);
    await this.inputPassword.fill(password);
  }

  
}
