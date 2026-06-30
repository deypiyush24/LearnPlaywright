import { test, request, expect } from "@playwright/test";
import { Logger } from "../src/utils/log";

test.describe.configure({ mode: "serial" }); // This Feature hekp to control complete test Suit in Strict serial mode
let authToken: string;
let name: string;
let emailId: string;
let password: string;

const baseAPIURL: string = process.env.BASE_API_URL!; // The ! assert that value is never null

test.describe("Authenticate the user with for the resources", async () => {
  test.beforeEach("Validate the API's Health is ok", async ({ request }) => {
    const getHealthCheckURL = baseAPIURL + "/health-check";
    Logger.successinfo("The Base URL is :" + getHealthCheckURL);
    const response = await request.get(getHealthCheckURL);
    expect(response.ok()).toBeTruthy();
    const responseBody = await response.json();
    console.log(responseBody);
  });

  test("Login with email and Password", async ({ request }) => {
    const postTheURLToRegeisterTheUser = baseAPIURL + "/users/register";
    Logger.successinfo("The Base URL is :" + postTheURLToRegeisterTheUser);
    emailId = `testuser_${Date.now()}@gmail.com`;
    password = "virginMoney";
    name = "Test Automation User";
    Logger.successinfo("Email ID is :" + emailId);
    Logger.successinfo("Password ID is :" + password);

    const payloadforUserResgisteration = {
      name: name,
      email: emailId,
      password: password,
    };

    const response = await request.post(postTheURLToRegeisterTheUser, {
      data: payloadforUserResgisteration,
    });
    await expect(response.ok()).toBeTruthy();
    await expect(response.status()).toBe(201);
    const responseBody = await response.json(); // This Json Format
    console.log(responseBody);
    await expect(responseBody.message).toBe(
      "User account created successfully",
    );
    await expect(responseBody.data.name).toBe(name);
    await expect(responseBody.data.email).toBe(emailId);

    const postTheURLToLogintheUser = baseAPIURL + "/users/login";
    Logger.successinfo("The Base URL is :" + postTheURLToLogintheUser);

    const payloadForTheUserLogin = {
      email: emailId,
      password: password,
    };

    const responseForUserLogin = await request.post(postTheURLToLogintheUser, {
      data: payloadForTheUserLogin,
    });
    await expect(responseForUserLogin.ok()).toBeTruthy();
    await expect(responseForUserLogin.status()).toBe(200);
    const responseBodyForUserLogin = await responseForUserLogin.json(); // This Json Format
    console.log(responseBodyForUserLogin);
    authToken = responseBodyForUserLogin.data.token;
    console.log("Successfully captured token:", authToken);
  });

  test("Get all the Notes", async ({ request }) => {
    const getNotesEndpoint = baseAPIURL + "/notes";
    Logger.successinfo("The Base URL is :" + getNotesEndpoint);

    const token =
      "9e1f8a2c9eed436f9e6c96ab5f1c0c028f84d9f08b3846fc9681e4c9e10acc87";

    const header = {
      "x-auth-token": authToken,
      accept: "application/json",
    };

    const response = await request.get(getNotesEndpoint, { headers: header });
    const responseBody = await response.json();
    console.log(responseBody);

    /* This Step help to attach the Information to playwright reports or npx playwright test apiTesting.spec.ts --trace on to get the Detail level of 
    network logs*/

    // Here we have to use String As JSON javascript Object not a String
    test
      .info()
      .attach(
        "Response from getNotesEndpoint :" + JSON.stringify(responseBody),
      );
  });

  test("Patch the User Profile", async ({ request }) => {

    // Here we have learn to use the dataParamters and Headers both 
    const patchUserProfile = baseAPIURL + "/users/profile";
    const dataParameters = {
      name: "Piyush",
      phone: "983456786",
      company: "XYZCompany",
    };

    const headerParameters = {
      "x-auth-token": authToken,
      accept: "application/json",
    };

    const response = await request.patch(patchUserProfile, {
      data: dataParameters,
      headers: headerParameters,
      ignoreHTTPSErrors: true,
    });

   const responseBody = await response.json();
   console.log(responseBody); 
  });
});
