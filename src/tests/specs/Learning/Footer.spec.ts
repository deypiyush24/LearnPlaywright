import{test,expect,Locator} from "@playwright/test";


test("@Footer Links : Indentify the footer links", async({page})=>{


    await test.step("Given user on the Automation Page", async()=>
    {
        await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");

        await expect(page).toHaveTitle("Automation Testing Practice: PlaywrightPractice");
       const homeScreenScreenShot = await page.screenshot(
        {
        fullPage: true,
        path : "screenshots/homePage.png",
       });
        test.info().attach("URL of The Page", 
            {
                body: homeScreenScreenShot,
                contentType: "image/png"
            }
        )
        console.log(page.url());

    })

    const footerLocator: Locator = page.locator("#PageList1");

    const allTheLinkInFooterSection = footerLocator.locator("li a");
    const countOfLinks = await allTheLinkInFooterSection.count();

    for(let i =0; i<countOfLinks; i++)
    {
       const link = allTheLinkInFooterSection.nth(i);
       console.log( await link.textContent());
       await link.click();

       await page.waitForLoadState();
       await page.screenshot({fullPage: true, path : `screenshots/NewPage_${i}.png`})
       await expect(page).toHaveTitle("Automation Testing Practice: PlaywrightPractice");


    }



})