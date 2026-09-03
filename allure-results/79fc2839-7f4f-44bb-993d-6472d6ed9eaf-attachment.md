# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.ts >> Verify The Successfull Login
- Location: tests/login.spec.ts:24:5

# Error details

```
Test timeout of 60000ms exceeded while running "beforeEach" hook.
```

```
Error: page.goto: Test timeout of 60000ms exceeded.
Call log:
  - navigating to "https://practice.expandtesting.com/login", waiting until "load"

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - paragraph [ref=e3]:
    - link "PMP Practice" [ref=e4] [cursor=pointer]:
      - /url: https://pmp.expandtesting.com/
    - text: "| Free PMP Certification Mock Exam Test +900 Questions & Quizzes"
    - link "Software Testing courses" [ref=e5] [cursor=pointer]:
      - img [ref=e7]
      - text: Software Testing courses
  - banner [ref=e10]:
    - navigation "Main navigation" [ref=e11]:
      - link "SUT" [ref=e12] [cursor=pointer]:
        - /url: /
        - 'img "Best Website for Practice Automation Testing: Free UI and REST API Examples and Apps. Using Cypress, Playwright, Selenium, WebdriverIO and Postman." [ref=e13]'
        - text: Practice
      - generic [ref=e14]:
        - list [ref=e15]:
          - listitem [ref=e16]:
            - button "Demos" [ref=e17] [cursor=pointer]
          - listitem [ref=e18]:
            - link "Tools" [ref=e19] [cursor=pointer]:
              - /url: /#tools
          - listitem [ref=e20]:
            - link "Tips" [ref=e21] [cursor=pointer]:
              - /url: /tips
          - listitem [ref=e22]:
            - link "Test Cases" [ref=e23] [cursor=pointer]:
              - /url: /test-cases
          - listitem [ref=e24]:
            - link "API Testing" [ref=e25] [cursor=pointer]:
              - /url: /notes/api/api-docs/
          - listitem [ref=e26]:
            - link "About" [ref=e27] [cursor=pointer]:
              - /url: /about
        - list
        - link "Free ISTQB Mock Exams" [ref=e28] [cursor=pointer]:
          - /url: https://istqb.expandtesting.com/
  - main [ref=e29]:
    - paragraph [ref=e34]:
      - text: Do you enjoy this platform? ❤️
      - link "Buy us a coffee" [ref=e35] [cursor=pointer]:
        - /url: https://www.buymeacoffee.com/expandtesting
    - generic [ref=e36]:
      - insertion [ref=e38]:
        - generic [ref=e41]:
          - heading "These are topics related to the article that might interest you" [level=2] [ref=e43]: Discover more
          - link "Open Source" [ref=e44] [cursor=pointer]:
            - generic "Open Source" [ref=e45]
            - img [ref=e47]
          - link "Computer Security" [ref=e49] [cursor=pointer]:
            - generic "Computer Security" [ref=e50]
            - img [ref=e52]
          - link "Software" [ref=e54] [cursor=pointer]:
            - generic "Software" [ref=e55]
            - img [ref=e57]
          - link "Automation framework setup" [ref=e59] [cursor=pointer]:
            - generic "Automation framework setup" [ref=e60]
            - img [ref=e62]
          - link "API testing guide" [ref=e64] [cursor=pointer]:
            - generic "API testing guide" [ref=e65]
            - img [ref=e67]
          - link "Automation testing tools" [ref=e69] [cursor=pointer]:
            - generic "Automation testing tools" [ref=e70]
            - img [ref=e72]
          - link "Login security audit" [ref=e74] [cursor=pointer]:
            - generic "Login security audit" [ref=e75]
            - img [ref=e77]
          - link "Automation consulting service" [ref=e79] [cursor=pointer]:
            - generic "Automation consulting service" [ref=e80]
            - img [ref=e82]
      - generic [ref=e85]:
        - generic [ref=e86]:
          - navigation "breadcrumb mb-2" [ref=e87]:
            - list [ref=e88]:
              - listitem [ref=e89]:
                - link "Home" [ref=e90] [cursor=pointer]:
                  - /url: /
              - listitem [ref=e91]: / Login Page
          - heading "Test Login page for Automation Testing Practice" [level=1] [ref=e92]
          - generic [ref=e94]:
            - paragraph [ref=e95]: This Test Login page is designed for automation testing practice. Test various positive and negative login scenarios in a testing environment.
            - paragraph [ref=e96]: You can use this login page for practicing with Selenium or other tools like Playwright, Cypress, etc.
            - paragraph [ref=e97]:
              - text: Register
              - link "here" [ref=e98] [cursor=pointer]:
                - /url: /register
              - text: "or Log in to the secure area with these credentials:"
            - list [ref=e99]:
              - listitem [ref=e100]: "Username: practice"
              - listitem [ref=e101]: "Password: SuperSecretPassword!"
            - paragraph
          - generic [ref=e106]:
            - generic [ref=e107]:
              - generic [ref=e108]:
                - generic [ref=e109]: Username
                - textbox "Username" [ref=e110]
              - generic [ref=e111]:
                - generic [ref=e112]: Password
                - textbox "Password" [ref=e113]
            - button "Login" [ref=e114] [cursor=pointer]
          - generic [ref=e115]:
            - heading "How to test the login page?" [level=2] [ref=e116]
            - generic [ref=e117]:
              - paragraph [ref=e118]:
                - text: If the credentials are correct, you should see a welcome message; otherwise, you will see an error message.
                - link "Login security audit" [ref=e119] [cursor=pointer]:
                  - img [ref=e121]
                  - text: Login security audit
              - paragraph [ref=e123]: The login feature is essential for secure websites and is commonly used. Automating the testing of various login scenarios, including different edge cases, is crucial to ensure reliability and security.
              - heading "How Does Form-Based Authentication Work?" [level=3] [ref=e124]
              - paragraph [ref=e125]: "Take a look at this diagram and review the different steps:"
              - img "How Does Form-Based Authentication Work" [ref=e126]
              - list [ref=e127]:
                - listitem [ref=e128]: "Step 1: A client requests access to a protected resource"
                - listitem [ref=e129]: "Step 2: If the client is unauthenticated, the server redirects the client to a login page"
                - listitem [ref=e130]: "Step 3: The client submits the login form to the server"
                - listitem [ref=e131]: "Step 4: If the login succeeds, the server redirects the client to the resource. If the login fails, the client is redirected to an error page"
        - generic [ref=e133]:
          - heading "Login Automation Test Cases" [level=2] [ref=e134]
          - insertion [ref=e136]:
            - generic [ref=e139]:
              - heading "These are topics related to the article that might interest you" [level=2] [ref=e141]: Discover more
              - link "Dictionaries & Encyclopedias" [ref=e142] [cursor=pointer]:
                - generic "Dictionaries & Encyclopedias" [ref=e143]
                - img [ref=e145]
              - link "Programming" [ref=e147] [cursor=pointer]:
                - generic "Programming" [ref=e148]
                - img [ref=e150]
              - link "Networking" [ref=e152] [cursor=pointer]:
                - generic "Networking" [ref=e153]
                - img [ref=e155]
          - paragraph [ref=e157]:
            - text: Below are the test cases for the login page. These test cases cover both positive and negative scenarios to ensure comprehensive testing of the login functionality.
            - link "Software" [ref=e158] [cursor=pointer]:
              - img [ref=e160]
              - text: Software
          - paragraph [ref=e162]:
            - text: To perform these tests, please navigate to this
            - link "page" [ref=e163] [cursor=pointer]:
              - /url: /login
          - heading "Login Automation Test Cases" [level=2] [ref=e164]
          - 'heading "Test Case 1: Successful Login" [level=3] [ref=e165]'
          - list [ref=e166]:
            - listitem [ref=e167]: Launch the browser.
            - listitem [ref=e168]:
              - text: Navigate to the
              - link "login" [ref=e169] [cursor=pointer]:
                - /url: /login
              - text: page URL.
            - listitem [ref=e170]: Verify that the login page is displayed successfully.
            - listitem [ref=e171]:
              - text: Enter
              - strong [ref=e172]: Username
              - text: ":"
              - code [ref=e173]: practice
              - text: .
            - listitem [ref=e174]:
              - text: Enter
              - strong [ref=e175]: Password
              - text: ":"
              - code [ref=e176]: SuperSecretPassword!
              - text: .
            - listitem [ref=e177]:
              - text: Click the
              - strong [ref=e178]: Login
              - text: button.
            - listitem [ref=e179]:
              - text: Verify that the user is redirected to the
              - code [ref=e180]: /secure
              - text: page.
            - listitem [ref=e181]: Confirm the success message "You logged into a secure area!" is visible.
            - listitem [ref=e182]:
              - text: Verify that a
              - strong [ref=e183]: Logout
              - text: button is displayed.
          - separator [ref=e184]
          - 'heading "Test Case 2: Invalid Username" [level=3] [ref=e185]'
          - list [ref=e186]:
            - listitem [ref=e187]: Launch the browser.
            - listitem [ref=e188]: Navigate to the login page URL.
            - listitem [ref=e189]: Verify that the login page is displayed successfully.
            - listitem [ref=e190]:
              - text: Enter an incorrect
              - strong [ref=e191]: Username
              - text: (e.g.,
              - code [ref=e192]: wrongUser
              - text: ).
            - listitem [ref=e193]:
              - text: Enter
              - strong [ref=e194]: Password
              - text: ":"
              - code [ref=e195]: SuperSecretPassword!
              - text: .
            - listitem [ref=e196]:
              - text: Click the
              - strong [ref=e197]: Login
              - text: button.
            - listitem [ref=e198]: Verify that an error message "Invalid username." is displayed.
            - listitem [ref=e199]: Ensure the user remains on the login page.
          - separator [ref=e200]
          - 'heading "Test Case 3: Invalid Password" [level=3] [ref=e201]'
          - list [ref=e202]:
            - listitem [ref=e203]: Launch the browser.
            - listitem [ref=e204]: Navigate to the login page URL.
            - listitem [ref=e205]: Verify that the login page is displayed successfully.
            - listitem [ref=e206]:
              - text: Enter
              - strong [ref=e207]: Username
              - text: ":"
              - code [ref=e208]: practice
              - text: .
            - listitem [ref=e209]:
              - text: Enter an incorrect
              - strong [ref=e210]: Password
              - text: (e.g.,
              - code [ref=e211]: WrongPassword
              - text: ).
            - listitem [ref=e212]:
              - text: Click the
              - strong [ref=e213]: Login
              - text: button.
            - listitem [ref=e214]: Verify that an error message "Invalid password." is displayed.
            - listitem [ref=e215]: Ensure the user remains on the login page.
    - insertion [ref=e217]:
      - generic [ref=e220]:
        - heading "These are topics related to the article that might interest you" [level=2] [ref=e222]: Discover more
        - link "Web Browsers" [ref=e223] [cursor=pointer]:
          - generic "Web Browsers" [ref=e224]
          - img [ref=e226]
        - link "Automation practice website" [ref=e228] [cursor=pointer]:
          - generic "Automation practice website" [ref=e229]
          - img [ref=e231]
        - link "Secure login solutions" [ref=e233] [cursor=pointer]:
          - generic "Secure login solutions" [ref=e234]
          - img [ref=e236]
        - link "Internet & Telecom" [ref=e238] [cursor=pointer]:
          - generic "Internet & Telecom" [ref=e239]
          - img [ref=e241]
        - link "Network Security" [ref=e243] [cursor=pointer]:
          - generic "Network Security" [ref=e244]
          - img [ref=e246]
        - link "Software testing course" [ref=e248] [cursor=pointer]:
          - generic "Software testing course" [ref=e249]
          - img [ref=e251]
        - link "Development Tools" [ref=e253] [cursor=pointer]:
          - generic "Development Tools" [ref=e254]
          - img [ref=e256]
        - link "Factory Automation" [ref=e258] [cursor=pointer]:
          - generic "Factory Automation" [ref=e259]
          - img [ref=e261]
  - contentinfo [ref=e263]:
    - generic [ref=e268]:
      - heading "Practice Test Automation WebSite for Web UI and Rest API" [level=4] [ref=e269]
      - paragraph [ref=e270]:
        - text: "Version: e64cd80e | Copyright"
        - link "Expand Testing" [ref=e271] [cursor=pointer]:
          - /url: https://expandtesting.com/
        - text: "2026"
  - img [ref=e273] [cursor=pointer]
  - insertion [ref=e275]:
    - iframe [ref=e278]:
      - iframe [ref=f12e1]:
        - generic [active]:
          - generic [ref=f13e1]:
            - generic [ref=f13e2]:
              - generic:
                - img [ref=f13e6] [cursor=pointer]
                - button [ref=f13e8] [cursor=pointer]:
                  - img [ref=f13e9]
            - insertion [ref=f13e16]:
              - generic [ref=f13e17]:
                - link "Click Here" [ref=f13e18] [cursor=pointer]:
                  - /url: https://googleads.g.doubleclick.net/dbm/clk?sa=L&ai=CO_5K-cVEarHfA8eV29gPt7ehkQSZnJnghwHyyYPovhSMi4WeCxABIJWUmaMBYOUCoAGL4oqgAcgBCagDAcgDmwSqBKUCT9A3eb7XvAjdwylzQo6lJxl5TP2O0EylAq9nUHUqi3q2b3-hAKuxTLoA4-KCL_HaSIv_l6b0AOQhbriu4ZdhWwVL_6rWS-1vgsE20D2-kay0t8NaVkVjrcKbkh4IvjP9b92Px2vxuNJEPzqpX5btHuILfbugsOxGRpxziyE9dB66C4gry2nyU2plcvOYpL8JR3p6YTXn0LlgEmta5WkMmapRQP0wpqd2lIaMOeCm7xA-vOapzFjAVi7hEPCEF85PdufQCe745znxu80NuBOfQTaKLXUGnNMp9RV7jDz7h94eKdMU2uxFmwcEtmUIlsmc27DS0YKBs3Rx6fOa38sw-yRI3VhWBbmqZxh0AIZhHHn-OPBFYnnoFJj2AwSP0vPmZnmAdHjABPi2x4m1BeAEA4gF9Meu5FWQBgGgBk2AB92d9d8CqAenzLECqAemvhuoB8zOsQKoB_PRG6gHltgbqAeqm7ECqAeOzhuoB5PYG6gH8OAbqAfulrECqAf-nrECqAevvrECqAfVyRuoB9m2sQKoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrECqAfn17EC2AcA0ggzCIBhEAEYnwMyCIqCgICAgIAIOg-AQIDAgICAgKiAAqiDgBBIvf3BOliy4syu_rCVA2ABgAoBmAsByAsBgAwBqg0CSU7qDRMI8cfOrv6wlQMVx8oWBR23WyhC8A0BiA4JsBPujYUj2BMN2BQB0BUByhYCCgD4FgGAFwGyFwQYAlAGshgFGE0iAQDQGQHYGQE&ae=1&num=1&cid=CAQShwIAEQoqgWl_M1I_g5Fqs_QuBTjdvy0xgt8qRW0BG33IVWDmhmUqUZq2nwlWb2z79Z-OS5ghdoa_ANkqcFLYvUBHf_xaVPuVyXe094GI7p4bDCryZCXZwdmIKgVT2SYE09KQPGxQOsC9L6_lUkjDcB1vCnfS5aGCSG6SljTmC8EUfbzoTFUTK6_KMKycpgSu6pLpjIE40jVlDXQ-rDsJqnQFy8fhs1u3ryosoVxWFSUUP2-OyybMtVjwdbQvbbGnuuehU0Uj8N8idhiSop0HpoXWhgvsqfvaU7L9g4C9GZlprzbuQOwEqRsYZtsRkN5ki1bG6DKGrQZHmEXWu0MLxsg1TdgQUBTVbxgB&sig=AOD64_25AA6dfwYP6SGRPK7Z6nYTbNaB5Q&client=ca-pub-1056034821646296&dbm_c=AKAmf-C58ik5ND8ebn6VDZUkcYVbj8NS0dBaJmmaZz6549YUDIMIdbJ6QEmQzE5JZRVbFktgkE9LTPQgB9SCfStlMJqdG6vrTwakyHumSkcpnvkPsakhhcGEGux4kHGmhBc6nMJEQTbnqoZEFkJywxgQorc3kPUgtApp960wI0mjnhDs6TV-q8qqJkDeO5YQOK7nASCuoQl2PozA0khS-rFTAUpu4SJekJHTzl3EwZtqOprAzgTmKnqNf5t018erm5V-aFjZy_aQOE7BGoDeQevB0VTvHAZ7ww&cry=1&dbm_d=AKAmf-CEh4tS6WIEByoQet_RplGUYsUFtiHVS1_s2tFS2krZP7kZfxVVvX9BEnfzXgebMeWvbtlspa1Qr7LLHQuLZb09069uVWznS2DH4SrP8cJXs_wYHm-RcCFxqN0lKFNYQGlsh42Lji6n_lmVyLosWRv8M6mRNKhl8QHTAc_imF--P_bmYPsLjzen4axO4mOfIBTNDXjX4UXr5CDE9zen5SgBF8UiWtntAsfrICJvlHaguy4jHUbG6YmS54UlJAViEVTnM3vipf7JO1uxig6SKm7FX5VZnVSjcHY11Te8LXCGdxxnlvfs0v4jjGHnpnaY8dl-bNjX75pJ96jcU3N-gr_jo41v_DYN9kq--5Dt99xfAPZdwOSlF1GBRAcE-i5GhBGHAWbzYtZu0RQhJpFUV-U2nZYkQhY_4xDQHXt6omoBIMxWmdY1U875iAupCkus1iI91b7EJSCl8eHlwYFLTFELLMIVPcSTiFRVgX_az4fajZ9iVvfLlHwywX-SXAy_V0y_prEbW8rqEqBHykbNhZQwnzeAlhbBuelBxO-4FJCqUMeGqA88u2G_eU5w8rPjviBviMEFX2PFrfmyjsIQ-YXYh1RyXaxf3hp_crRNwZiT2-yZnN2V2B5FJPuKQZ0qL2ETTs7dq9r6ELX291ynYt_EgeNbPXT2KgBVXhRS4DvNRB4mFIczXVFeCMI_rdKs86T_tSSs-oXcxezS9hRUF1PGilgDTQ&adurl=https://servedby.flashtalking.com/click/7/297960;10192744;5791358;210;0/?us_privacy=!!US_PRIVACY!&ft_partnerimpid=ABAjH0h1roFGGcXjCPgnaDIRm9cW&ft_impID=635D6421-15D6-75D1-D4E9-5209E96C549E&ft_section=23027491828&g=6756721FEEDCE2&random=324778.16556557844&ft_width=728&ft_height=90&url=https://www.adobe.com/in/acrobat/campaign/do-that-with-acrobat.html?sdid=FZPQYM59&mv=display&mv2=display
                  - img "Click Here" [ref=f13e19]
                - link "AdChoices arrow" [ref=f13e21] [cursor=pointer]:
                  - /url: https://www.flashtalking.com/consumer-privacy
                  - img "AdChoices arrow" [ref=f13e22]
                - link "Privacy Notification" [ref=f13e24] [cursor=pointer]:
                  - /url: https://www.flashtalking.com/consumer-privacy
                  - img [ref=f13e25]
                - link "Privacy Notification" [ref=f13e27] [cursor=pointer]:
                  - /url: https://www.flashtalking.com/consumer-privacy
                  - img [ref=f13e28]
          - iframe
  - generic [ref=e279]:
    - generic [ref=e280] [cursor=pointer]:
      - img [ref=e282]
      - link "Go to shopping options for Colleges & Universities" [ref=e284]: Colleges & Universities
    - button "Close shopping anchor" [ref=e285]
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | import { Login } from "../src/pageObject/login";
  3  | import { Constants } from "../src/utils/constants";
  4  | import { Logger } from "../src/utils/log";
  5  | import { loginTestData } from "../src/testData/loginData";
  6  | 
  7  | let loginPage: Login;
  8  | 
  9  | test.beforeEach("Test Setup is done", async ({ page }) => {
  10 |   const titleOfThePage: string =
  11 |     "Test Login Page for Automation Testing Practice";
  12 |   const welcomeText: string = "Test Login page for Automation Testing Practice";
  13 |   const url: string = Constants.testLoginurl;
  14 | 
  15 |   await test.step("Given the user navigates to the login page", async () => {
> 16 |     await page.goto(url);
     |                ^ Error: page.goto: Test timeout of 60000ms exceeded.
  17 |     Logger.successinfo(`User navigate to URL : ${Constants.testLoginurl}`);
  18 |     await expect(page).toHaveTitle(titleOfThePage);
  19 |     loginPage = new Login(page);
  20 |     await loginPage.verifyWelcomeText(welcomeText);
  21 |   });
  22 | });
  23 | 
  24 | test("Verify The Successfull Login", async ({ page }) => {
  25 |   console.log(`${test.info().title} for the ${test.info().project.name}`);
  26 |   const userNameText = await page
  27 |     .getByText("Username: practice", { exact: true })
  28 |     .textContent();
  29 |   const passwordText = await page
  30 |     .getByText("Password: SuperSecretPassword!", { exact: true })
  31 |     .textContent();
  32 |   const userName = userNameText!.split(":")[1].trim(); // ! assert that Values should be not null
  33 |   const password = passwordText!.split(":")[1].trim(); // ! assert that Values should be not null
  34 | 
  35 |   await loginPage.enterTheUserNameAndPassword(userName, password);
  36 |   await loginPage.clickOnTheLoginButton();
  37 |   await loginPage.verifyTheLoginPageText(
  38 |     "You logged into a secure area!",
  39 |     userName,
  40 |   );
  41 | 
  42 |  
  43 | 
  44 | // Here Taking screenShot putting in folder path provided
  45 | // 1. Take the screenshot and save it to a file
  46 |  const screenshotPath:string = "screenshot.png";
  47 |   await page.screenshot({ path: screenshotPath })
  48 | 
  49 |   // 2. Attach the saved file directly to the test report
  50 |   await test.info().attach('Secure Area', 
  51 |     {
  52 |     path: screenshotPath,
  53 |     contentType: 'image/png'}
  54 |   )
  55 | 
  56 |   // Locator level which Not recommemded :Just put locator in front of screen shot
  57 |   // await page.locator().screenshot({pass: information})
  58 | 
  59 |   // Visual Regression : 
  60 |   await expect(page.screenshot()).toMatchSnapshot();
  61 | 
  62 |   await loginPage.logutOfTheApplication();
  63 | });
  64 | 
  65 | test(`@invalidUserName Invalid Username`, async ({ page }) => {
  66 |   console.log(`${test.info().title} for the ${test.info().project.name}`);
  67 |   const userName = "Piyush";
  68 |   const passwordText = await page
  69 |     .getByText("Password: SuperSecretPassword!", { exact: true })
  70 |     .textContent();
  71 |   const password = passwordText!.split(":")[1].trim(); // Here Values should be not null
  72 |   await loginPage.enterTheUserNameAndPassword(userName, password);
  73 |   await loginPage.clickOnTheLoginButton();
  74 |   await loginPage.verifyTheAlertForWrongCredentials(
  75 |     "Your password is invalid!",
  76 |   );
  77 | });
  78 | 
  79 | test(`@invalidPassword Invalid Password`, async ({ page }) => {
  80 |   console.log(`${test.info().title} for the ${test.info().project.name}`);
  81 |   const userNameText = await page
  82 |     .getByText("Username: practice", { exact: true })
  83 |     .textContent();
  84 |   const userName = userNameText!.split(":")[1].trim(); // Here Values should be not null
  85 |   let password:string =""; 
  86 |   loginTestData.forEach( (eachTestData)=> { if (eachTestData.scenario =="Invalid password" )
  87 |   {password = eachTestData.password}
  88 |   })
  89 |   await loginPage.enterTheUserNameAndPassword(userName, password);
  90 |   await loginPage.clickOnTheLoginButton();
  91 |   await loginPage.verifyTheAlertForWrongCredentials(
  92 |     "Your password is invalid!",
  93 |   );
  94 | });
  95 | 
  96 | 
```