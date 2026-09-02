import{test} from "../../fixtures/loginFixture";


test("Verify the login", async({page})=>
{

   const value = await page.getByRole("heading",{name : "Welcome to the Secure Area. When you are done click logout below.", exact:true}).innerText();

   console.log(value);


})