# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: apiTesting.spec.ts >> Authenticate the user with for the resources >> Login with email and Password
- Location: tests/apiTesting.spec.ts:22:7

# Error details

```
Error: expect(received).toBeTruthy()

Received: false
```

# Test source

```ts
  1   | import { test, request, expect } from "@playwright/test";
  2   | import { Logger } from "../src/utils/log";
  3   | 
  4   | test.describe.configure({ mode: "serial" }); // This Feature help to control complete test Suit in Strict serial mode
  5   | let authToken: string;
  6   | let name: string;
  7   | let emailId: string;
  8   | let password: string;
  9   | 
  10  | const baseAPIURL: string = process.env.BASE_API_URL!; // The ! assert that value is never null
  11  | 
  12  | test.describe("Authenticate the user with for the resources", async () => {
  13  |   test.beforeEach("Validate the API's Health is ok", async ({ request }) => {
  14  |     const getHealthCheckURL = baseAPIURL + "/health-check";
  15  |     Logger.successinfo("The Base URL is :" + getHealthCheckURL);
  16  |     const response = await request.get(getHealthCheckURL);
  17  |     expect(response.ok()).toBeTruthy();
  18  |     const responseBody = await response.json();
  19  |     console.log(responseBody);
  20  |   });
  21  | 
  22  |   test("Login with email and Password", async ({ request }) => {
  23  |     const postTheURLToRegeisterTheUser = baseAPIURL + "/users/register";
  24  |     Logger.successinfo("The Base URL is :" + postTheURLToRegeisterTheUser);
  25  |     emailId = `testuser_${Date.now()}@gmail.com`;
  26  |     password = "virginMoney";
  27  |     name = "Test Automation User";
  28  |     Logger.successinfo("Email ID is :" + emailId);
  29  |     Logger.successinfo("Password ID is :" + password);
  30  | 
  31  |     const payloadforUserResgisteration = {
  32  |       name: name,
  33  |       email: emailId,
  34  |       password: password,
  35  |     };
  36  | 
  37  |     const response = await request.post(postTheURLToRegeisterTheUser, {
  38  |       data: payloadforUserResgisteration,
  39  |     });
> 40  |     await expect(response.ok()).toBeTruthy();
      |                                 ^ Error: expect(received).toBeTruthy()
  41  |     await expect(response.status()).toBe(201);
  42  |     const responseBody = await response.json(); // This Json Format
  43  |     console.log(responseBody);
  44  |     await expect(responseBody.message).toBe(
  45  |       "User account created successfully",
  46  |     );
  47  |     await expect(responseBody.data.name).toBe(name);
  48  |     await expect(responseBody.data.email).toBe(emailId);
  49  | 
  50  |     const postTheURLToLogintheUser = baseAPIURL + "/users/login";
  51  |     Logger.successinfo("The Base URL is :" + postTheURLToLogintheUser);
  52  | 
  53  |     const payloadForTheUserLogin = {
  54  |       email: emailId,
  55  |       password: password,
  56  |     };
  57  | 
  58  |     const responseForUserLogin = await request.post(postTheURLToLogintheUser, {
  59  |       data: payloadForTheUserLogin,
  60  |     });
  61  |     await expect(responseForUserLogin.ok()).toBeTruthy();
  62  |     await expect(responseForUserLogin.status()).toBe(200);
  63  |     const responseBodyForUserLogin = await responseForUserLogin.json(); // This Json Format
  64  |     console.log(responseBodyForUserLogin);
  65  |     authToken = responseBodyForUserLogin.data.token;
  66  |     console.log("Successfully captured token:", authToken);
  67  |   });
  68  | 
  69  |   test("Get all the Notes", async ({ request }) => {
  70  |     const getNotesEndpoint = baseAPIURL + "/notes";
  71  |     Logger.successinfo("The Base URL is :" + getNotesEndpoint);
  72  | 
  73  |     const token =
  74  |       "9e1f8a2c9eed436f9e6c96ab5f1c0c028f84d9f08b3846fc9681e4c9e10acc87";
  75  | 
  76  |     const header = {
  77  |       "x-auth-token": authToken,
  78  |       accept: "application/json",
  79  |     };
  80  | 
  81  |     const response = await request.get(getNotesEndpoint, { headers: header });
  82  |     const responseBody = await response.json();
  83  |     console.log(responseBody);
  84  | 
  85  |     /* This Step help to attach the Information to playwright reports or npx playwright test apiTesting.spec.ts --trace on to get the Detail level of 
  86  |     network logs*/
  87  | 
  88  |     // Here we have to use String As JSON javascript Object not a String
  89  |     test
  90  |       .info()
  91  |       .attach(
  92  |         "Response from getNotesEndpoint :" + JSON.stringify(responseBody),
  93  |       );
  94  |   });
  95  | 
  96  |   test("Patch the User Profile", async ({ request }) => {
  97  | 
  98  |     // Here we have learn to use the dataParamters and Headers both 
  99  |     const patchUserProfile = baseAPIURL + "/users/profile";
  100 |     const dataParameters = {
  101 |       name: "Piyush",
  102 |       phone: "983456786",
  103 |       company: "XYZCompany",
  104 |     };
  105 | 
  106 |     const headerParameters = {
  107 |       "x-auth-token": authToken,
  108 |       accept: "application/json",
  109 |     };
  110 | 
  111 |     const response = await request.patch(patchUserProfile, {
  112 |       data: dataParameters,
  113 |       headers: headerParameters,
  114 |       ignoreHTTPSErrors: true,
  115 |     });
  116 | 
  117 |    const responseBody = await response.json();
  118 |    console.log(responseBody); 
  119 |   });
  120 | });
  121 | 
```