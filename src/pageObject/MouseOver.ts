import { Page, Locator, expect } from "@playwright/test";

export class MouseOver {
  private readonly page: Page;
  private readonly field1: Locator;
  private readonly field2: Locator;
  private readonly copyBtn: Locator;

  constructor(page: Page) 
  {
    this.page = page;
    this.field1 = page.locator("#field1");
    this.field2 = page.locator("#field2");
    this.copyBtn = page.getByRole("button", { name: "Copy Text" });
  }


  async doubleClickOnCopyButton():Promise<void>
  {
    await this.copyBtn.dblclick();
  }
}
