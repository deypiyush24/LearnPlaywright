import { Page, Locator, BrowserContext } from "@playwright/test";
import { Logger } from "./log";

export class CommonUtils {
  private readonly page: Page;
  private readonly context: BrowserContext;

  constructor(page: Page, context: BrowserContext) {
    this.page = page;
    this.context = context;
  }

  // Here We have wait
  public async clickToOpenNewPage(locator: Locator): Promise<Page> {
    const pagePromise = await this.context.waitForEvent("page");
    // const textFromTheLink = await locator.textContent();
    await locator.click();
    const newPage = await pagePromise;
    await newPage.waitForLoadState();
    Logger.successinfo(`Page with text  has be opened `);
    return newPage;
  }
}
