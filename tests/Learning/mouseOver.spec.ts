import { test, Locator, expect } from "@playwright/test";
import {MouseOver} from "../../pageObject/MouseOver";

test("moverOverActions", async ({ page }) => {
  await page.goto(
    "https://testautomationpractice.blogspot.com/p/playwrightpractice.html",
  );

  await page.getByRole("button", { name: "Point Me" }).hover();
  const laptopsOption = page.getByRole("link", { name: "Laptops" });

  // 4. Assert visibility of the item after hover
  await expect(laptopsOption).toBeVisible();

  // 5. Click on the desired item
  await laptopsOption.click();

});

test("DoubleClick", async ({ page }) => {
  await page.goto(
    "https://testautomationpractice.blogspot.com/p/playwrightpractice.html",
  );
// 1. Target fields
const field1 = page.locator('#field1');
const field2 = page.locator('#field2');
const copyBtn = page.getByRole('button', { name: 'Copy Text' });

const mouseActions = new MouseOver(page);
// 2. Perform double click
await mouseActions.doubleClickOnCopyButton();

// 3. Verify Field2 now contains the copied text
await expect(field2).toHaveValue('Hello World!');

  
});

test("Drag and Drop", async ({ page }) => {
  await page.goto(
    "https://testautomationpractice.blogspot.com/p/playwrightpractice.html",
  );

// 1. Locate source (draggable element) and target (drop area)
const source = page.locator('#draggable'); // "Drag me to my target" box
const target = page.locator('#droppable'); // Target drop area

// 2. Perform the drag and drop action
await source.dragTo(target);

// 3. Verify the drop occurred (drop zone text changes to 'Dropped!')
await expect(target).toContainText('Dropped!');


// Here we Customise the action Time out

const subMitButton = page.getByRole('button', { name: 'Submit' });


// Using the function

await waitingForThaAPplication(subMitButton,5000);

// Custom timeout of 5 seconds on click
await page.getByRole('button', { name: 'Submit' }).click({ timeout: 5000 });

// Custom timeout of 7 seconds on fill
await page.getByLabel('Search').fill('Playwright', { timeout: 7000 });

  
});


async function waitingForThaAPplication( locator:Locator, waitTime : number ):Promise<void>
{
  await expect(locator).toBeVisible({timeout : waitTime});
  await locator.click({timeout : waitTime});
  await locator.fill("Piyush", {timeout : waitTime});
}


