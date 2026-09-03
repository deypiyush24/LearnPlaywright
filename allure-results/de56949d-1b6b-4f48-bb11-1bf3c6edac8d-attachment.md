# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Parameteriselogin.spec.ts >> @Login Login Verification: Valid credentials
- Location: tests/Parameteriselogin.spec.ts:25:7

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
    - link "Development Tools" [ref=e5] [cursor=pointer]:
      - img [ref=e7]
      - text: Development Tools
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
          - link "Automation framework setup" [ref=e44] [cursor=pointer]:
            - generic "Automation framework setup" [ref=e45]
            - img [ref=e47]
          - link "Web Browsers" [ref=e49] [cursor=pointer]:
            - generic "Web Browsers" [ref=e50]
            - img [ref=e52]
          - link "Secure login solutions" [ref=e54] [cursor=pointer]:
            - generic "Secure login solutions" [ref=e55]
            - img [ref=e57]
          - link "Software testing course" [ref=e59] [cursor=pointer]:
            - generic "Software testing course" [ref=e60]
            - img [ref=e62]
          - link "Development Tools" [ref=e64] [cursor=pointer]:
            - generic "Development Tools" [ref=e65]
            - img [ref=e67]
          - link "Automation consulting service" [ref=e69] [cursor=pointer]:
            - generic "Automation consulting service" [ref=e70]
            - img [ref=e72]
          - link "Automation testing tools" [ref=e74] [cursor=pointer]:
            - generic "Automation testing tools" [ref=e75]
            - img [ref=e77]
          - link "UI testing tools" [ref=e79] [cursor=pointer]:
            - generic "UI testing tools" [ref=e80]
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
                - link "Dictionaries & Encyclopedias" [ref=e119] [cursor=pointer]:
                  - img [ref=e121]
                  - text: Dictionaries & Encyclopedias
              - paragraph [ref=e123]: The login feature is essential for secure websites and is commonly used. Automating the testing of various login scenarios, including different edge cases, is crucial to ensure reliability and security.
              - heading "How Does Form-Based Authentication Work?" [level=3] [ref=e124]
              - paragraph [ref=e125]:
                - text: "Take a look at this diagram and review the different steps:"
                - link "Programming" [ref=e126] [cursor=pointer]:
                  - img [ref=e128]
                  - text: Programming
              - img "How Does Form-Based Authentication Work" [ref=e130]
              - list [ref=e131]:
                - listitem [ref=e132]: "Step 1: A client requests access to a protected resource"
                - listitem [ref=e133]: "Step 2: If the client is unauthenticated, the server redirects the client to a login page"
                - listitem [ref=e134]: "Step 3: The client submits the login form to the server"
                - listitem [ref=e135]: "Step 4: If the login succeeds, the server redirects the client to the resource. If the login fails, the client is redirected to an error page"
        - generic [ref=e137]:
          - heading "Login Automation Test Cases" [level=2] [ref=e138]
          - insertion [ref=e140]:
            - generic [ref=e143]:
              - heading "These are topics related to the article that might interest you" [level=2] [ref=e145]: Discover more
              - link "Software Testing courses" [ref=e146] [cursor=pointer]:
                - generic "Software Testing courses" [ref=e147]
                - img [ref=e149]
              - link "REST API documentation" [ref=e151] [cursor=pointer]:
                - generic "REST API documentation" [ref=e152]
                - img [ref=e154]
              - link "Quality Assurance training" [ref=e156] [cursor=pointer]:
                - generic "Quality Assurance training" [ref=e157]
                - img [ref=e159]
          - paragraph [ref=e161]:
            - text: Below are the test cases for the login page. These test cases cover both positive and negative scenarios to ensure comprehensive testing of the login functionality.
            - link "Vocational & Continuing Education" [ref=e162] [cursor=pointer]:
              - img [ref=e164]
              - text: Vocational & Continuing Education
          - paragraph [ref=e166]:
            - text: To perform these tests, please navigate to this
            - link "page" [ref=e167] [cursor=pointer]:
              - /url: /login
          - heading "Login Automation Test Cases" [level=2] [ref=e168]
          - 'heading "Test Case 1: Successful Login" [level=3] [ref=e169]'
          - list [ref=e170]:
            - listitem [ref=e171]: Launch the browser.
            - listitem [ref=e172]:
              - text: Navigate to the
              - link "login" [ref=e173] [cursor=pointer]:
                - /url: /login
              - text: page URL.
            - listitem [ref=e174]: Verify that the login page is displayed successfully.
            - listitem [ref=e175]:
              - text: Enter
              - strong [ref=e176]: Username
              - text: ":"
              - code [ref=e177]: practice
              - text: .
            - listitem [ref=e178]:
              - text: Enter
              - strong [ref=e179]: Password
              - text: ":"
              - code [ref=e180]: SuperSecretPassword!
              - text: .
            - listitem [ref=e181]:
              - text: Click the
              - strong [ref=e182]: Login
              - text: button.
            - listitem [ref=e183]:
              - text: Verify that the user is redirected to the
              - code [ref=e184]: /secure
              - text: page.
            - listitem [ref=e185]: Confirm the success message "You logged into a secure area!" is visible.
            - listitem [ref=e186]:
              - text: Verify that a
              - strong [ref=e187]: Logout
              - text: button is displayed.
          - separator [ref=e188]
          - 'heading "Test Case 2: Invalid Username" [level=3] [ref=e189]'
          - list [ref=e190]:
            - listitem [ref=e191]: Launch the browser.
            - listitem [ref=e192]: Navigate to the login page URL.
            - listitem [ref=e193]: Verify that the login page is displayed successfully.
            - listitem [ref=e194]:
              - text: Enter an incorrect
              - strong [ref=e195]: Username
              - text: (e.g.,
              - code [ref=e196]: wrongUser
              - text: ).
            - listitem [ref=e197]:
              - text: Enter
              - strong [ref=e198]: Password
              - text: ":"
              - code [ref=e199]: SuperSecretPassword!
              - text: .
            - listitem [ref=e200]:
              - text: Click the
              - strong [ref=e201]: Login
              - text: button.
            - listitem [ref=e202]: Verify that an error message "Invalid username." is displayed.
            - listitem [ref=e203]: Ensure the user remains on the login page.
          - separator [ref=e204]
          - 'heading "Test Case 3: Invalid Password" [level=3] [ref=e205]'
          - list [ref=e206]:
            - listitem [ref=e207]: Launch the browser.
            - listitem [ref=e208]: Navigate to the login page URL.
            - listitem [ref=e209]: Verify that the login page is displayed successfully.
            - listitem [ref=e210]:
              - text: Enter
              - strong [ref=e211]: Username
              - text: ":"
              - code [ref=e212]: practice
              - text: .
            - listitem [ref=e213]:
              - text: Enter an incorrect
              - strong [ref=e214]: Password
              - text: (e.g.,
              - code [ref=e215]: WrongPassword
              - text: ).
            - listitem [ref=e216]:
              - text: Click the
              - strong [ref=e217]: Login
              - text: button.
            - listitem [ref=e218]: Verify that an error message "Invalid password." is displayed.
            - listitem [ref=e219]: Ensure the user remains on the login page.
    - insertion [ref=e221]:
      - generic [ref=e224]:
        - heading "These are topics related to the article that might interest you" [level=2] [ref=e226]: Discover more
        - link "Open Source" [ref=e227] [cursor=pointer]:
          - generic "Open Source" [ref=e228]
          - img [ref=e230]
        - link "Computer Security" [ref=e232] [cursor=pointer]:
          - generic "Computer Security" [ref=e233]
          - img [ref=e235]
        - link "Software" [ref=e237] [cursor=pointer]:
          - generic "Software" [ref=e238]
          - img [ref=e240]
        - link "Network Security" [ref=e242] [cursor=pointer]:
          - generic "Network Security" [ref=e243]
          - img [ref=e245]
        - link "Automation practice website" [ref=e247] [cursor=pointer]:
          - generic "Automation practice website" [ref=e248]
          - img [ref=e250]
        - link "API testing guide" [ref=e252] [cursor=pointer]:
          - generic "API testing guide" [ref=e253]
          - img [ref=e255]
        - link "Login security audit" [ref=e257] [cursor=pointer]:
          - generic "Login security audit" [ref=e258]
          - img [ref=e260]
        - link "API integration support" [ref=e262] [cursor=pointer]:
          - generic "API integration support" [ref=e263]
          - img [ref=e265]
  - contentinfo [ref=e267]:
    - generic [ref=e272]:
      - heading "Practice Test Automation WebSite for Web UI and Rest API" [level=4] [ref=e273]
      - paragraph [ref=e274]:
        - text: "Version: e64cd80e | Copyright"
        - link "Expand Testing" [ref=e275] [cursor=pointer]:
          - /url: https://expandtesting.com/
        - text: "2026"
  - img [ref=e277] [cursor=pointer]
  - insertion [ref=e279]:
    - iframe [ref=e282]:
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
                  - /url: https://googleads.g.doubleclick.net/dbm/clk?sa=L&ai=CIW86_cVEaoPmH_Lu4dkPhPT3gAeZnJnghwHyyYPovhSMi4WeCxABIJWUmaMBYOUCoAGL4oqgAcgBCagDAcgDmwSqBKUCT9AUhNGVLRAFr7KFxzroY6yJvJKvAaEx6aDaY0adTpMccpdPeShFamP_0UxC-rK48PJzpZcc4FKIQ5CKdSMbb5zNVEsvkE1ICJ3VgeUnliXyVEuwWt7q4j6JPtAhXEsMeo0GygdTFHGWmasZDC9Ltw6RtINmAcH1emBKD14gG2Ei5UYTKU28ki11CKjKIZ_cn1oxWdpEgXaXycOY4sKEzRM0feS4oU2b9_tfH1tgB8eaEoIRSZxscs8Hrs-EK8sEnUajxz--mlH0JPK08J7ivvRtE5KzSB1k-XFlMnEK2LvhpV7_DhkXWm_PKQMRhMoMmTMEPAPS8gEGFkyFeFdBbTpDCp0KH2PqH2qx3_uHrtTPA-YY0kFJpTg7FyKUSpcYu5mcstDABPi2x4m1BeAEA4gF9Meu5FWQBgGgBk2AB92d9d8CqAenzLECqAemvhuoB8zOsQKoB_PRG6gHltgbqAeqm7ECqAeOzhuoB5PYG6gH8OAbqAfulrECqAf-nrECqAevvrECqAfVyRuoB9m2sQKoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrECqAfn17EC2AcA0ggzCIBhEAEYnwMyCIqCgICAgIAIOg-AQIDAgICAgKiAAqiDgBBIvf3BOljd69yw_rCVA2ABgAoBmAsByAsBgAwBqg0CSU7qDRMIy9zesP6wlQMVcnc4BR0E-h1w8A0BiA4JsBPujYUj2BMN2BQB0BUByhYCCgD4FgGAFwGyFwQYAlAGshgFGE0iAQDQGQHYGQE&ae=1&num=1&cid=CAQShwIAEQoqgWvNoxDlC0lS_Ie420eX0YSR4Zcj1SFZGUqSdBTps92k4yFFNz12R5_b6TvI6NwtSoBsR2Z3aCJzgW6xgbs-Y1DIZIdGtoIBV6rrFV2qOypseH0AAzhKQlxpPU3TIjm70Eam7y0UgpIxI78ljx25nE3VQx-eVP6tYe2Z63EbYqRKNrPkXj2XdxDE4cHsUnM7McZpJveERQyvqoOtp6GSV-EiNZz_mA24i-iYRxdkry7mdwW8exgoR5yqaJTQqL2s_zra3mesKA1cSQc2sXuA_zQXL_iIMofKeBOa-xItpynjEq98_DMtVnfC1MrU9tU-ofCvwtN2VG-KV-UpB6hUADmH_hgB&sig=AOD64_3JKh0vjrXILXa2a7zrB0Y2vRmg0w&client=ca-pub-1056034821646296&dbm_c=AKAmf-AMZHV5SY0sceS1ZmrRD3sNteOsVNSojrf8VqWK4oI_bz7aV6AG1ltUI2uev2Jte0KiVgxuFXLLjQf9xIlQyA-8GrEtwvL6H5dApb3LduYPmESy5AcIOP3JB1XUVLfleLeK6_h5HPoRQ1uiP0B36lT6bxqhBEYjYRa4c1h6ZUcz24O1BIUGpkr_dgYSj43xUjEVZAXeb0SHvOkPxGd7hyFUJmVSo86dP1D_9YITXnlVf4FBww76RTmzIT0-j-i9wkjeiLZ99farF6IfWREvt2Xl3QWFPA&cry=1&dbm_d=AKAmf-AFqrWn2yI6b0Xw8buDAvfmSondpKDj3V6nOpVsP6VO__tijR5AKnCWAA4YTgAFs23LyEtZUtWu-tVrL28bpzlaSFdiUdjEOhnYUZLIE0VKggTN9d4_d3gr47VLNdrfFuMci1NPQZVqRQSj1A5CpAifoHvPOSWEQzniIfdrH3uMxLqaumLjsVbQpWvPshQe2cgcvcR0aa7yFKEY6WeCD4VHWg8M_FTClW4GbKTZgpz4_MbxZRG5y8J6VZfgenDZ-3VUxdNwauSVszu7MyzVhDBUOEs0axAnzUnwRN5zVyNNKiz6SfvlLZlQoXbFpNxlHXFUR_I9HFusr4jWNwAdTkzwLumoDnKong9tnC00_WENJEDMVNTLA-UaO1BfIcl6T7bhcOCxU8nDaDHTc8VLIHmkj_QJCQNrsxXlvZQLVgM3Nb2CZ2h48T5F2ASpd0SGZsQ73MwNB8iP-pm3WXAy5Z38xgJANw2Fj4QwrMaJm-S2OAlBp_ptTjDv9WIUTcxwWDT2uh_sjnXKtmXh33QpqUHGQ9xN_1e4Ik0D3dDIVsKYTiNRJBgv88XYGdbEFEd9DJaQIxIgxRSk9MHBQbLlq4cMT6UX4OK0R7MeCkgBQLCbTqQ5aVC8_SQ71ydR7d3-oeIh1jyWlI4NEiRledC5WnZqjMW0HGAnjmY_ZH1-XEn5vIDrU0O7RXKcMIJeiKsWLmBKmlS2V71igp7dGiMfUVuF0QbJTg&adurl=https://servedby.flashtalking.com/click/7/297960;10192744;5791358;210;0/?us_privacy=!!US_PRIVACY!&ft_partnerimpid=ABAjH0iwCPyEhCJbXTobPhLYRbWC&ft_impID=65671FE5-CA4D-6824-C239-C2790A49CEE7&ft_section=23027491828&g=675619352A7848&random=324778.16556557844&ft_width=728&ft_height=90&url=https://www.adobe.com/in/acrobat/campaign/do-that-with-acrobat.html?sdid=FZPQYM59&mv=display&mv2=display
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
  - generic [ref=e283]:
    - generic [ref=e284] [cursor=pointer]:
      - img [ref=e286]
      - link "Go to shopping options for Networking" [ref=e288]: Networking
    - button "Close shopping anchor" [ref=e289]
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
  24 | loginTestData.forEach((testData) => {
  25 |   test(`@Login Login Verification: ${testData.scenario}`, async ({
  26 |     page,
  27 |   }) => {
  28 |     await test.step("When they enter valid credentials", async () => {
  29 |       await loginPage.enterTheUserNameAndPassword(
  30 |         testData.username,
  31 |         testData.password,
  32 |       );
  33 |       await loginPage.clickOnTheLoginButton();
  34 |     });
  35 | 
  36 |     await test.step("Then they see the Message", async () => {
  37 |       if (testData.scenario == "Valid credentials") {
  38 |         await loginPage.verifyTheLoginPageText(
  39 |           testData.expectedMessage,
  40 |           testData.username,
  41 |         );
  42 |         await loginPage.logutOfTheApplication();
  43 |       } else {
  44 |         await loginPage.verifyTheAlertForWrongCredentials(
  45 |           testData.expectedMessage,
  46 |         );
  47 |       }
  48 |     });
  49 |   });
  50 | });
  51 | 
```