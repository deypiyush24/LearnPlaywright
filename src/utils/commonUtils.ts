import { Page, Locator, BrowserContext } from "@playwright/test";
import { Logger } from "./log";
import { TimeOutError, ElementNotFoundError } from "./errorUtil";

export class CommonUtils {
  private readonly page: Page;
  private readonly context: BrowserContext;

  constructor(page: Page, context: BrowserContext) {
    this.page = page;
    this.context = context;
  }

  // Here We have wait
  public async clickToOpenNewPage(locator: Locator): Promise<Page> {
    try {
      const pagePromise = await this.context.waitForEvent("page");
      await locator.click();
      const newPage = await pagePromise;
      await newPage.waitForLoadState();
      Logger.successinfo(`Page with text  has be opened `);
      return newPage;
    } catch (error) {
      // Handle your custom error specifically
      if (error instanceof ElementNotFoundError) {
        console.error(`[UI Error]: ${error.message}`);
        await this.page.screenshot({ path: "search-error.png" });
      } else {
        // Handle any other unexpected errors
        console.error(`[Unexpected Error]: ${error}`);
      }
      // Rethrow the error if you want the Playwright test to fail officially
      throw error;
    } finally {
      // This runs even if the test passes or fails
      console.log("Test execution finished. Cleaning up resources...");
      await this.page.close();
    }
  }
}
