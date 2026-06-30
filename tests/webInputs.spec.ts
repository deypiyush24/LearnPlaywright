import {test,expect} from "@playwright/test";
import {Constants} from "../src/utils/constants";
import {WebINPUT} from "../src/pageObject/webInput";
import {WebInputTestData} from "../src/testData/webInputTestData"



test("Successfull", async({page})=> 
{
    console.log(test.info().title + test.info().project.name);
    const title:string = "Web inputs page for Automation Testing Practice";
    const url:string = Constants.testWebInputURL;
    await page.goto(url);
    await expect(page).toHaveTitle(title);

    const welcomeText:string  ="Web inputs page for Automation Testing Practice";

    const webInputValue = new WebINPUT(page);
    await webInputValue.verifyWelcomeText(welcomeText);
})


WebInputTestData.forEach((eachTestData) => 
{
test(`@webInput WebInput: ${eachTestData.Scenario}`, async({page})=> 
{
    console.log(test.info().title + test.info().project.name);
    const title:string = "Web inputs page for Automation Testing Practice";
    const url:string = Constants.testWebInputURL;
    await page.goto(url);
    await expect(page).toHaveTitle(title);
    const welcomeText:string  ="Web inputs page for Automation Testing Practice";
    const webInputValue = new WebINPUT(page);
    await webInputValue.verifyWelcomeText(welcomeText);
    await webInputValue.enterTheNumberTextAndPassword(eachTestData.InputNumber,eachTestData.InputText,eachTestData.Password);

})

})


