import{test,expect,request} from "@playwright/test";
import{Logger} from "../src/utils/log"


test("Health check of an API", async({request,page})=>{

    const baseAPIURL:string = process.env.BASE_API_URL!; // The ! assert that value is never null
    Logger.successinfo("The Base URL is :" + baseAPIURL);
    const getTheURL = baseAPIURL + "/health-check";
    const dummyURL = "https://jsonplaceholder.typicode.com/posts";

    const responseBody = await request.get(dummyURL);

    // Validations 
    await expect(responseBody.ok()).toBeTruthy();
    await expect(responseBody.status()).toBe(200);

    console.log(responseBody.body().toString());

})


test.skip("Get Health check of an API", async({request,page})=>{

    const baseAPIURL:string = process.env.BASE_API_URL!; // The ! assert that value is never null
    Logger.successinfo("The Base URL is :" + baseAPIURL);
    const getTheURL = baseAPIURL + "/health-check";
    const dummyURL = "https://jsonplaceholder.typicode.com/posts";

    const responseBody = await request.get(dummyURL);

    // Validations 
    await expect(responseBody.ok()).toBeTruthy();
    await expect(responseBody.status()).toBe(200);

    console.log(responseBody.body().toString());

})

test.skip("Post Call Health check of an API", async({request,page})=>{

    const baseAPIURL:string = process.env.BASE_API_URL!; // The ! assert that value is never null
    Logger.successinfo("The Base URL is :" + baseAPIURL);
    const getTheURL = baseAPIURL + "/health-check";
    const dummyURL = "https://jsonplaceholder.typicode.com/posts";
    const dataForThePostAPI =
    {
     data: 
    {
      title: 'Learning Playwright',
      body: 'API testing is easy!',
      userId: 1
    }
    
    };
    const response = await request.post(dummyURL,dataForThePostAPI);
    // Validations 
    await expect(response.ok()).toBeTruthy();
    await expect(response.status()).toBe(201);
   const responseBody = await response.json();
   console.log(responseBody);

})