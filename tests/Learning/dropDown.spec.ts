import { test, expect, Locator } from "@playwright/test";

/* 
 1) Dropdown how to select 
 2 ) Chaining of Locators 
 */

const selectURL = "http://uitestingplayground.com/select";

test.beforeEach(async ({ page }) => {
  await page.goto(selectURL);
  await expect(page).toHaveTitle("Select");
});

test("DropDown with One Selections", async ({ page }) => {
  const playgroundHeadingLocator: Locator = page.getByRole("heading", {
    name: "Playground",
    exact: true,
  });
  await expect(playgroundHeadingLocator).toBeVisible({ timeout: 500 });
  console.log("Playground Heading is visible");
  const programingLang: Locator = page.getByLabel(
    "Programming Language (single-select)",
  );
  await programingLang.selectOption("Python");
  await expect(programingLang).toHaveValue("py"); // Option 1
  await expect(programingLang.locator("option:checked")).toHaveText("Python"); // Option 2
});

test("Fetch all the options from Dropdown", async({page})=>
{

    const cityLocators:Locator = page.getByLabel("City (contains non-breaking spaces)");
    await expect(cityLocators).toBeVisible({timeout:500});
    const allTheOptionsLocator = cityLocators.locator("option"); // This is called Chaining like in Selenium we use ./;
    const allOptions = await allTheOptionsLocator.all();

    for(const option of allOptions )
    {
        const text = await option.textContent();
        const value = await option.getAttribute("value");
        console.log(`This is the values ${value} ${text}`);

    }

});

test.only("Multiple Select", async({page})=>
{
const locators:Locator = page.getByLabel("Fruits (multi-select, some pre-selected)");
await expect(locators).toBeVisible({timeout:500});
const value1:string = "Apple";
const value2:string = "Banana";
await locators.selectOption([value1,value2]); // Here we have pass Arrayb of values 
await expect(locators.locator("option:checked")).toHaveText([value1,value2]);

});



