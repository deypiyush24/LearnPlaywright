import { test, expect } from "@playwright/test";

test("Visual homepage check", async ({ page }) => {
  await page.goto("https://www.google.com/");

  // Captures the page and matches it against the stored baseline image
  expect(await page.screenshot()).toMatchSnapshot("homepage-baseline.png");

  /*
  How to update snapshots when layouts intentionally change: If you update your website design, 
  your tests will fail because the new look won't match the old baseline. You can tell Playwright to overwrite the old baseline images with new ones by running this terminal command:
  npx playwright test --update-snapshots

Handling cross-platform differences: 
Screenshots taken on Windows, Mac, and Linux can look slightly different due to how fonts and graphics are rendered. Playwright automatically appends the operating system name to the snapshot filename to ensure your tests do not fail when run on different systems or CI/CD pipelines.
  
  */
});
