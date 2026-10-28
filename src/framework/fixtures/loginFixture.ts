import{test as base , expect, Page} from "@playwright/test";


type loginFixtures = {
  page: Page;
};


export const test = base.extend<loginFixtures>(

    // Here we start the Object Defined in loginFixture
    {
    page : async({page},use)=>
    {
        const url = process.env.expandTestLoginURL;
        if(!url)
        {
            throw new Error("Url is not defined in ENV file");
        }
        await page.goto(url);
        await expect(page).toHaveTitle("Test Login Page for Automation Testing Practice");
        console.log(`Login Successfull ${url}`);

        const userName = await page.locator('div.col-9 ul li:nth-child(1) b').innerText()
        const password = await page.locator('div.col-9 ul li:nth-child(2) b').innerText()

        await page.locator("#username").fill(userName);
        await page.locator("#password").fill(password);
        await page.getByRole("button",{name:"Login"}).click();

        const headingOfSecurePage = page.getByRole("heading",{name:"Hi, practice!"});
        await expect(headingOfSecurePage).toBeVisible({timeout:5000});
        await expect(page).toHaveTitle("Secure Page page for Automation Testing Practice");

        // finally return the Page;
        await use(page);

        // Teardown: runs automatically after test completes
        await page.getByRole("link",{name: " Logout"}).click();
        console.log('Logout done: Test finished');

    }


    }
)

export{expect};