import{test,expect,request} from "@playwright/test";
import{Logger} from "../src/utils/log"


test("Health check of an API", async({request,page})=>{

    // password =virginmoney

/* {
  "success": true,
  "status": 201,
  "message": "User account created successfully",
  "data": {
    "id": "6a435aaeff667c029526b94d",
    "name": "Piyush",
    "email": "deypiyush24@gmail.com"
  }
} */

  //Token ---> Creation
  /*
  {
  "success": true,
  "status": 200,
  "message": "Login successful",
  "data": {
    "id": "6a435aaeff667c029526b94d",
    "name": "Piyush",
    "email": "deypiyush24@gmail.com",
    "token": "d20651d190774481a06ab9419546cb968b6d29c0714c4adb9b50fecf2110caf3"
  }
}*/





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