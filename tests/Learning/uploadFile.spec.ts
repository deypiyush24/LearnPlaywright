import { test, expect, Locator, Page } from "@playwright/test";

const url = "https://testautomationpractice.blogspot.com/p/playwrightpractice.html#";
const baseURL = process.env.BASE_URL!;

test("Uploading Single file", async({page})=>
{
    await page.goto(url);
    await expect(page).toHaveTitle("Automation Testing Practice: PlaywrightPractice");
    const uploadButton = page.locator("#singleFileInput");
    await uploadButton.scrollIntoViewIfNeeded(); // bY default it scrolls if need Here we can use it 
    await uploadButton.setInputFiles("LearningSnapshots/describeFeature.png");
    await page.getByRole("button",{name:"Upload Single File"}).click();
//  Browser Pass the Fake Path   Received: "C:\\fakepath\\describeFeature.png" So we should use Regex
    await expect(uploadButton).toHaveValue(/describeFeature\.png$/); 

});

test("Uploading Multiple file", async({page})=>
{
    await page.goto(url);
    await expect(page).toHaveTitle("Automation Testing Practice: PlaywrightPractice");
    const uploadButton = page.locator("#multipleFilesInput");
    await uploadButton.scrollIntoViewIfNeeded(); // bY default it scrolls if need Here we can use it 
    await uploadButton.setInputFiles(["LearningSnapshots/describeFeature.png","LearningSnapshots/describeFeature.png"]);
    await page.getByRole("button",{name:"Upload Multiple Files"}).click();
//  Browser Pass the Fake Path   Received: "C:\\fakepath\\describeFeature.png" So we should use Regex
    await expect(uploadButton).toHaveValue(/describeFeature\.png$/); 

});