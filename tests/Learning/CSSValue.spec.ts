import { test, expect, Locator } from "@playwright/test";


test("How to fetch the CSS Value", async({page})=>
{

    const locatorOfCSSValue :Locator = page.getByLabel("Hello world");
    // with reference to this Locator 

    const backGroundClour = await locatorOfCSSValue.evaluate( (e1) => 
    {
        return window.getComputedStyle(e1).getPropertyValue('background-color');
    })

} );