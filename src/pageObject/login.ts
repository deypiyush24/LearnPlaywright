import { expect, Locator, Page } from "@playwright/test";

export class Login {
  private readonly page: Page;
  private readonly welcomeText: Locator;

  constructor(page: Page) {
    this.page = page;
    this.welcomeText = page.getByRole('heading', {
      name: 'Automation Testing Practice WebSite for QA and Developers',
    });
  }

  async verifyWelcomeText(expected: string) {
    await expect(this.welcomeText).toHaveText(expected);
  }
}
