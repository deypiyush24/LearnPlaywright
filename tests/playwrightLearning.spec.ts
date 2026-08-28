import{expect,test,Locator} from "@playwright/test";
import{PageOperation} from "../src/pageObject/homePage";




test.describe(" locator functionality ", ()=>
{

//DefineThePageObject here
let pageOperation: PageOperation;


// BeforeEach or AfterEach doesn't takes Title as one of parameters
test.beforeEach(async({page})=>
{
const baseURL:string = "https://testautomationpractice.blogspot.com/p/playwrightpractice.html";
// page define one page of browser where we do operation
    await page.goto(baseURL);
    await expect(page).toHaveTitle("Automation Testing Practice: PlaywrightPractice");
    const titleValue = await page.title();
    console.log(titleValue);
    pageOperation = new PageOperation(page);

});


test("getByRole",async({page})=>
{
    const primaryButton:Locator =  page.getByRole("button",{name:"Primary Action", exact:true}); // Here we pass two values
    console.log(await primaryButton.textContent());
    const roletextBox:Locator = page.getByRole("textbox",{name:"Username:",exact:true});
    await expect(roletextBox).toBeEditable({timeout:10000}); // by default Type/JavaScript Does thing in miliseconds.
    const value:string = "HelloWorld";
    await roletextBox.fill(value);
    await expect(roletextBox).toHaveValue(value);// Validate the value is there
    console.log(await roletextBox.inputValue()); // Here we fetch have Value
    await page.getByRole("checkbox",{name:"Accept terms"}).check();
    await page.getByRole("checkbox",{name:"Accept terms"}).uncheck();


});


test(`@getByLabel: Loctor`, async({page})=>
{


});





});





