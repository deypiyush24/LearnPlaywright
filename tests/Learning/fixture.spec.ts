import { test, expect } from "../../fixtures/hooks";

// Normally we use the .toHaveText ( when we filled text box with value), toHaveValue = value attribute, to toHaveScrenshots, toHaveTitle,

test("Uploading Single file", async ({ page }) => {
  const uploadButton = page.locator("#singleFileInput");

  await expect(page).toHaveScreenshot("ALPHomePage", {
    fullPage: true,
  });
  await uploadButton.scrollIntoViewIfNeeded(); // bY default it scrolls if need Here we can use it
  await uploadButton.setInputFiles("LearningSnapshots/describeFeature.png");
  await page.getByRole("button", { name: "Upload Single File" }).click();
  //  Browser Pass the Fake Path   Received: "C:\\fakepath\\describeFeature.png" So we should use Regex
  await expect(uploadButton).toHaveValue(/describeFeature\.png$/);

  // Types a single uppercase 'A' using the Shift shortcut
  await page.locator("#username").press("Shift+KeyA");
  // Or using lowercase letter notation with Shift
  await page.locator("#username").press("Shift+a");
});
