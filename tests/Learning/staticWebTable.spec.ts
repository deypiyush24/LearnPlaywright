import { test, expect, Locator } from "@playwright/test";

const baseURL = process.env.playwrightAutomation!;

test.beforeEach(async ({ page }) => {
  await test.step("Given the User on the Page", async () => {
    await page.goto(baseURL);
    await expect(page).toHaveTitle(
      "Automation Testing Practice: PlaywrightPractice",
    );
    const titleValue = await page.title();
    console.log(titleValue);
  });
});

test("Static Webstable", async ({ page }) => {
  const cssToTable: string = "table[name='BookTable']";
  const table: Locator = page.locator(cssToTable);
  const headers: Locator = table.locator("tbody tr th");
  const rows: Locator = table.locator("tbody tr");

  // 1. Get total rows and columns count
  const rowCount = await rows.count();
  const colCount = await headers.count();
  console.log(`Total Rows: ${rowCount}, Total Columns: ${colCount}`);

  // 2. Read cell data from a specific row and column (e.g., Row 2, Column 1)

  for (let i = 1; i < rowCount; i++) {
    const currentRow = rows.nth(i); // we start with second row as first row have tr th not td;
    for (let j = 0; j < colCount; j++) {
      const eachCell: Locator = currentRow.locator("td").nth(j);
      const value = await eachCell.innerText();
      if (value === "Selenium") {
        console.log(`Row number ${i}: Coll Number: ${j} ` + value);
      }
    }
  }
});

test("Dyanamic table", async ({ page }) => {
  const value1 = (
    await page.getByText("CPU load of Chrome process: ").innerText()
  ).split(": ")[1];
  const value2 = (
    await page.getByText("Memory Size of Firefox process: ").innerText()
  ).split(": ")[1];
  const value3 = (
    await page.getByText("Network speed of Chrome process: ").innerText()
  ).split(": ")[1];
  const value4 = (
    await page.getByText("Disk space of Firefox process: ").innerText()
  ).split(": ")[1];

  const tableHeader:Locator = page.locator("#headers");
  const column =tableHeader.locator("th");
  const columnCount = await column.count();

  const tableBody:Locator = page.locator("#rows");
  const rows =tableBody.locator("tr");
  const rowsCount = await rows.count();

  console.log(`Row count ${rowsCount}: Coll count : ${columnCount}`);

  const mapOfValue = new Map<string,string>();

  for(let i= 0; i<rowsCount ; i++)
  {
    const currentRow = rows.nth(i);
    for(let j=0 ; j<columnCount; j++)
    {
      const value = await currentRow.locator("td").nth(j).innerText();
      if(value === value1 || value === value2 ||value === value3 ||value === value4)
      {
        const nameOfBrowser = await currentRow.locator("td").nth(0).innerText();
         console.log(nameOfBrowser + ` ${value}`);
         mapOfValue.set(value,nameOfBrowser);
      }

    }

  }
console.log(mapOfValue);

 
 
});
