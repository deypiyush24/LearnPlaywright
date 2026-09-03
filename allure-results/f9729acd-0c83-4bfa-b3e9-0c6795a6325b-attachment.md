# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.ts >> Verify The Successfull Login
- Location: tests/login.spec.ts:24:5

# Error details

```
Error: An unresolved Promise was passed to toMatchSnapshot(), make sure to resolve it by adding await to it.
```

```
Error: page.screenshot: Test ended.
Call log:
  - taking page screenshot
  - waiting for fonts to load...
  - fonts loaded

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - paragraph [ref=e3]:
    - link "PMP Practice" [ref=e4] [cursor=pointer]:
      - /url: https://pmp.expandtesting.com/
    - text: "| Free PMP Certification Mock Exam Test +900 Questions & Quizzes"
    - link "API testing tools" [ref=e5] [cursor=pointer]:
      - img [ref=e7]
      - text: API testing tools
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
    - insertion [ref=e33]:
      - iframe [ref=e35]:
        - generic [active] [ref=f34e1]:
          - generic [ref=f34e5]:
            - link [ref=f34e6] [cursor=pointer]:
              - /url: https://adclick.g.doubleclick.net/aclk?sa=l&ai=CFDFfr8VEaovqEYjB7OsP9IWFwA2ih5bThwGC_urWkRaBq7WIlA4QASCVlJmjAWDlAqABlaeW2gPIAQmpAlTyk8hhr0Y-qAMByAPLBKoEiAJP0Ie7HJqmatddolNh-94akiq9IcA0FBOzyan8-lcn1rF1qGeT71TkndE5y-ko89VGzBoIliUac3f8cX4qsUU1mrWy5jy2EcclPF-2vsM0o3d4tBkNItmoFwWN4AuRcbzmf2mLDJZ0upoMX5_XNd2C7YqjFFNPGplzDdnteEk7Dwt4V3Pbz0CCcKSKIjnHb5XXetrQHbgOqDuwQdEFTWxav5OcSTc_6u5nRFPEFxnFc5gQqXH6rWEGlxzgeah1hZhyrPFm489aFXIY-11F9ej7ODdEyYIUraZS8xRt83cRUpGew9KbGauqIXnIo1u6Fy17jeV1dCpCvjDtgkBQ23NA4Qc6RAmnL7bABMCR9I70BYgF24_6j1mgBi6AB67N1l-oB6fMsQKoB-LYsQKoB6a-G6gHzM6xAqgH89EbqAeW2BuoB6qbsQKoB47OG6gHk9gbqAfw4BuoB-6WsQKoB_6esQKoB6--sQKoB9XJG6gH2baxAqgHmgaoB_-esQKoB9-fsQKoB_jCsQKoB_vCsQLYBwDSCDMIgGEQARifAzIIioKAgICAgAg6D4BAgMCAgICAqIACqIOAEEi9_cE6WMbEtov-sJUDYAGxCe_0hJA6Et7jgAoBmAsByAsBgAwBogxIYiAKHmNvbS50aW1lc2dyb3VwLm1hZ2ljYnJpY2tzZGlzdGocChpjb20udGltZXNncm91cC5tYWdpY2JyaWNrc3gBiAEBkAEBqg0CSU7IDQHqDRMI04K4i_6wlQMViCB7Bx30QgHY8A0CiA4JuBPkA9gTA9AVAZgWAcoWAgoA-BYBgBcBshcQGAEqCjQ5NzAyMTIyMjFQBroXAjgBqhgXCQAAAAAAoMFAEgo0OTcwMjEyMjIxGAGyGAkSApNOGC4iAQDQGAHoGAHCGQIIAQ&ae=1&gclid=EAIaIQobChMIy_23i_6wlQMViCB7Bx30QgHYEAEYASAAEgKXSvD_BwE&num=1&cid=CAQS9QEAEQoqgRwKqwHK13q2cZO5ZxprHFXnnrQbCjzMWmMCkudCZdsZBctbTmSeD0pkS3NZ7hSiHryE7iclxUaZ4L48Jvs6LuLXBNGfjCYrRhpdNHWxbxvvDERICb31WAS9myaARXcnTQebZajHeJh6T4ca7FmT6zBRQRZc8_HJW3L-ALs1v2w8JCqq3CjnCiMBLJkFCVYO3HQd6UqKWT1Rd2NLnc8hfxHCghItZIy5Vw5BigA4V6oEO2aqIK0eL5rjYOXcTP7JOsWsgiLNuX8M4Z3jkeDx-io0VfLINKRhMue6_AVcaLWcwDrU5XUhB95hU7XSnXcCXxgB&sig=AOD64_1pYtmaY8dyJDLAp7yGa8gXVMA6Yw&client=ca-pub-1056034821646296&rf=1&nb=9&adurl=https://www.magicbricks.com/bricks/campaign.html%3FpageName%3Dhttps://www.magicbricks.com/modi-edifice-bachupally-hyderabad-pdpid-4d4235313832353633/prjDtId-4d42373037363739%3Fmbtracker%3D707679_google_ifollow%26cCode%3D707679_google_ifollow_remarketing%26campaignCode%3D707679_google_ifollow%26campaignCode%3D707679_google_ifollow%26gad_source%3D5%26gad_campaignid%3D23924213723%26gclid%3DEAIaIQobChMIy_23i_6wlQMViCB7Bx30QgHYEAEYASAAEgKXSvD_BwE
              - img [ref=f34e7]
            - generic [ref=f34e9]:
              - generic [ref=f34e10]:
                - link "Premium Apartments in Bachupally, Hyderabad" [ref=f34e12] [cursor=pointer]:
                  - /url: https://adclick.g.doubleclick.net/aclk?sa=l&ai=CFDFfr8VEaovqEYjB7OsP9IWFwA2ih5bThwGC_urWkRaBq7WIlA4QASCVlJmjAWDlAqABlaeW2gPIAQmpAlTyk8hhr0Y-qAMByAPLBKoEiAJP0Ie7HJqmatddolNh-94akiq9IcA0FBOzyan8-lcn1rF1qGeT71TkndE5y-ko89VGzBoIliUac3f8cX4qsUU1mrWy5jy2EcclPF-2vsM0o3d4tBkNItmoFwWN4AuRcbzmf2mLDJZ0upoMX5_XNd2C7YqjFFNPGplzDdnteEk7Dwt4V3Pbz0CCcKSKIjnHb5XXetrQHbgOqDuwQdEFTWxav5OcSTc_6u5nRFPEFxnFc5gQqXH6rWEGlxzgeah1hZhyrPFm489aFXIY-11F9ej7ODdEyYIUraZS8xRt83cRUpGew9KbGauqIXnIo1u6Fy17jeV1dCpCvjDtgkBQ23NA4Qc6RAmnL7bABMCR9I70BYgF24_6j1mgBi6AB67N1l-oB6fMsQKoB-LYsQKoB6a-G6gHzM6xAqgH89EbqAeW2BuoB6qbsQKoB47OG6gHk9gbqAfw4BuoB-6WsQKoB_6esQKoB6--sQKoB9XJG6gH2baxAqgHmgaoB_-esQKoB9-fsQKoB_jCsQKoB_vCsQLYBwDSCDMIgGEQARifAzIIioKAgICAgAg6D4BAgMCAgICAqIACqIOAEEi9_cE6WMbEtov-sJUDYAGxCe_0hJA6Et7jgAoBmAsByAsBgAwBogxIYiAKHmNvbS50aW1lc2dyb3VwLm1hZ2ljYnJpY2tzZGlzdGocChpjb20udGltZXNncm91cC5tYWdpY2JyaWNrc3gBiAEBkAEBqg0CSU7IDQHqDRMI04K4i_6wlQMViCB7Bx30QgHY8A0CiA4JuBPkA9gTA9AVAZgWAcoWAgoA-BYBgBcBshcQGAEqCjQ5NzAyMTIyMjFQBroXAjgBqhgXCQAAAAAAoMFAEgo0OTcwMjEyMjIxGAGyGAkSApNOGC4iAQDQGAHoGAHCGQIIAQ&ae=1&gclid=EAIaIQobChMIy_23i_6wlQMViCB7Bx30QgHYEAEYASAAEgKXSvD_BwE&num=1&cid=CAQS9QEAEQoqgRwKqwHK13q2cZO5ZxprHFXnnrQbCjzMWmMCkudCZdsZBctbTmSeD0pkS3NZ7hSiHryE7iclxUaZ4L48Jvs6LuLXBNGfjCYrRhpdNHWxbxvvDERICb31WAS9myaARXcnTQebZajHeJh6T4ca7FmT6zBRQRZc8_HJW3L-ALs1v2w8JCqq3CjnCiMBLJkFCVYO3HQd6UqKWT1Rd2NLnc8hfxHCghItZIy5Vw5BigA4V6oEO2aqIK0eL5rjYOXcTP7JOsWsgiLNuX8M4Z3jkeDx-io0VfLINKRhMue6_AVcaLWcwDrU5XUhB95hU7XSnXcCXxgB&sig=AOD64_1pYtmaY8dyJDLAp7yGa8gXVMA6Yw&client=ca-pub-1056034821646296&rf=1&nb=0&adurl=https://www.magicbricks.com/bricks/campaign.html%3FpageName%3Dhttps://www.magicbricks.com/modi-edifice-bachupally-hyderabad-pdpid-4d4235313832353633/prjDtId-4d42373037363739%3Fmbtracker%3D707679_google_ifollow%26cCode%3D707679_google_ifollow_remarketing%26campaignCode%3D707679_google_ifollow%26campaignCode%3D707679_google_ifollow%26gad_source%3D5%26gad_campaignid%3D23924213723%26gclid%3DEAIaIQobChMIy_23i_6wlQMViCB7Bx30QgHYEAEYASAAEgKXSvD_BwE
                  - text: Premium Apartments
                  - text: in Bachupally,
                  - text: Hyderabad
                - link "Magicbricks" [ref=f34e14] [cursor=pointer]:
                  - /url: https://adclick.g.doubleclick.net/aclk?sa=l&ai=CFDFfr8VEaovqEYjB7OsP9IWFwA2ih5bThwGC_urWkRaBq7WIlA4QASCVlJmjAWDlAqABlaeW2gPIAQmpAlTyk8hhr0Y-qAMByAPLBKoEiAJP0Ie7HJqmatddolNh-94akiq9IcA0FBOzyan8-lcn1rF1qGeT71TkndE5y-ko89VGzBoIliUac3f8cX4qsUU1mrWy5jy2EcclPF-2vsM0o3d4tBkNItmoFwWN4AuRcbzmf2mLDJZ0upoMX5_XNd2C7YqjFFNPGplzDdnteEk7Dwt4V3Pbz0CCcKSKIjnHb5XXetrQHbgOqDuwQdEFTWxav5OcSTc_6u5nRFPEFxnFc5gQqXH6rWEGlxzgeah1hZhyrPFm489aFXIY-11F9ej7ODdEyYIUraZS8xRt83cRUpGew9KbGauqIXnIo1u6Fy17jeV1dCpCvjDtgkBQ23NA4Qc6RAmnL7bABMCR9I70BYgF24_6j1mgBi6AB67N1l-oB6fMsQKoB-LYsQKoB6a-G6gHzM6xAqgH89EbqAeW2BuoB6qbsQKoB47OG6gHk9gbqAfw4BuoB-6WsQKoB_6esQKoB6--sQKoB9XJG6gH2baxAqgHmgaoB_-esQKoB9-fsQKoB_jCsQKoB_vCsQLYBwDSCDMIgGEQARifAzIIioKAgICAgAg6D4BAgMCAgICAqIACqIOAEEi9_cE6WMbEtov-sJUDYAGxCe_0hJA6Et7jgAoBmAsByAsBgAwBogxIYiAKHmNvbS50aW1lc2dyb3VwLm1hZ2ljYnJpY2tzZGlzdGocChpjb20udGltZXNncm91cC5tYWdpY2JyaWNrc3gBiAEBkAEBqg0CSU7IDQHqDRMI04K4i_6wlQMViCB7Bx30QgHY8A0CiA4JuBPkA9gTA9AVAZgWAcoWAgoA-BYBgBcBshcQGAEqCjQ5NzAyMTIyMjFQBroXAjgBqhgXCQAAAAAAoMFAEgo0OTcwMjEyMjIxGAGyGAkSApNOGC4iAQDQGAHoGAHCGQIIAQ&ae=1&gclid=EAIaIQobChMIy_23i_6wlQMViCB7Bx30QgHYEAEYASAAEgKXSvD_BwE&num=1&cid=CAQS9QEAEQoqgRwKqwHK13q2cZO5ZxprHFXnnrQbCjzMWmMCkudCZdsZBctbTmSeD0pkS3NZ7hSiHryE7iclxUaZ4L48Jvs6LuLXBNGfjCYrRhpdNHWxbxvvDERICb31WAS9myaARXcnTQebZajHeJh6T4ca7FmT6zBRQRZc8_HJW3L-ALs1v2w8JCqq3CjnCiMBLJkFCVYO3HQd6UqKWT1Rd2NLnc8hfxHCghItZIy5Vw5BigA4V6oEO2aqIK0eL5rjYOXcTP7JOsWsgiLNuX8M4Z3jkeDx-io0VfLINKRhMue6_AVcaLWcwDrU5XUhB95hU7XSnXcCXxgB&sig=AOD64_1pYtmaY8dyJDLAp7yGa8gXVMA6Yw&client=ca-pub-1056034821646296&rf=1&nb=1&adurl=https://www.magicbricks.com/bricks/campaign.html%3FpageName%3Dhttps://www.magicbricks.com/modi-edifice-bachupally-hyderabad-pdpid-4d4235313832353633/prjDtId-4d42373037363739%3Fmbtracker%3D707679_google_ifollow%26cCode%3D707679_google_ifollow_remarketing%26campaignCode%3D707679_google_ifollow%26campaignCode%3D707679_google_ifollow%26gad_source%3D5%26gad_campaignid%3D23924213723%26gclid%3DEAIaIQobChMIy_23i_6wlQMViCB7Bx30QgHYEAEYASAAEgKXSvD_BwE
              - link "Open" [ref=f34e16] [cursor=pointer]:
                - /url: https://adclick.g.doubleclick.net/aclk?sa=l&ai=CFDFfr8VEaovqEYjB7OsP9IWFwA2ih5bThwGC_urWkRaBq7WIlA4QASCVlJmjAWDlAqABlaeW2gPIAQmpAlTyk8hhr0Y-qAMByAPLBKoEiAJP0Ie7HJqmatddolNh-94akiq9IcA0FBOzyan8-lcn1rF1qGeT71TkndE5y-ko89VGzBoIliUac3f8cX4qsUU1mrWy5jy2EcclPF-2vsM0o3d4tBkNItmoFwWN4AuRcbzmf2mLDJZ0upoMX5_XNd2C7YqjFFNPGplzDdnteEk7Dwt4V3Pbz0CCcKSKIjnHb5XXetrQHbgOqDuwQdEFTWxav5OcSTc_6u5nRFPEFxnFc5gQqXH6rWEGlxzgeah1hZhyrPFm489aFXIY-11F9ej7ODdEyYIUraZS8xRt83cRUpGew9KbGauqIXnIo1u6Fy17jeV1dCpCvjDtgkBQ23NA4Qc6RAmnL7bABMCR9I70BYgF24_6j1mgBi6AB67N1l-oB6fMsQKoB-LYsQKoB6a-G6gHzM6xAqgH89EbqAeW2BuoB6qbsQKoB47OG6gHk9gbqAfw4BuoB-6WsQKoB_6esQKoB6--sQKoB9XJG6gH2baxAqgHmgaoB_-esQKoB9-fsQKoB_jCsQKoB_vCsQLYBwDSCDMIgGEQARifAzIIioKAgICAgAg6D4BAgMCAgICAqIACqIOAEEi9_cE6WMbEtov-sJUDYAGxCe_0hJA6Et7jgAoBmAsByAsBgAwBogxIYiAKHmNvbS50aW1lc2dyb3VwLm1hZ2ljYnJpY2tzZGlzdGocChpjb20udGltZXNncm91cC5tYWdpY2JyaWNrc3gBiAEBkAEBqg0CSU7IDQHqDRMI04K4i_6wlQMViCB7Bx30QgHY8A0CiA4JuBPkA9gTA9AVAZgWAcoWAgoA-BYBgBcBshcQGAEqCjQ5NzAyMTIyMjFQBroXAjgBqhgXCQAAAAAAoMFAEgo0OTcwMjEyMjIxGAGyGAkSApNOGC4iAQDQGAHoGAHCGQIIAQ&ae=1&gclid=EAIaIQobChMIy_23i_6wlQMViCB7Bx30QgHYEAEYASAAEgKXSvD_BwE&num=1&cid=CAQS9QEAEQoqgRwKqwHK13q2cZO5ZxprHFXnnrQbCjzMWmMCkudCZdsZBctbTmSeD0pkS3NZ7hSiHryE7iclxUaZ4L48Jvs6LuLXBNGfjCYrRhpdNHWxbxvvDERICb31WAS9myaARXcnTQebZajHeJh6T4ca7FmT6zBRQRZc8_HJW3L-ALs1v2w8JCqq3CjnCiMBLJkFCVYO3HQd6UqKWT1Rd2NLnc8hfxHCghItZIy5Vw5BigA4V6oEO2aqIK0eL5rjYOXcTP7JOsWsgiLNuX8M4Z3jkeDx-io0VfLINKRhMue6_AVcaLWcwDrU5XUhB95hU7XSnXcCXxgB&sig=AOD64_1pYtmaY8dyJDLAp7yGa8gXVMA6Yw&client=ca-pub-1056034821646296&rf=1&nb=8&adurl=https://www.magicbricks.com/bricks/campaign.html%3FpageName%3Dhttps://www.magicbricks.com/modi-edifice-bachupally-hyderabad-pdpid-4d4235313832353633/prjDtId-4d42373037363739%3Fmbtracker%3D707679_google_ifollow%26cCode%3D707679_google_ifollow_remarketing%26campaignCode%3D707679_google_ifollow%26campaignCode%3D707679_google_ifollow%26gad_source%3D5%26gad_campaignid%3D23924213723%26gclid%3DEAIaIQobChMIy_23i_6wlQMViCB7Bx30QgHYEAEYASAAEgKXSvD_BwE
                - generic [ref=f34e18]: Open
          - img [ref=f34e24] [cursor=pointer]
          - button [ref=f34e26] [cursor=pointer]:
            - img [ref=f34e27]
    - alert [ref=e39]:
      - text: You logged into a secure area!
      - button "Close" [ref=e40] [cursor=pointer]
    - paragraph [ref=e42]:
      - text: Do you enjoy this platform? ❤️
      - link "Buy us a coffee" [ref=e43] [cursor=pointer]:
        - /url: https://www.buymeacoffee.com/expandtesting
    - generic [ref=e44]:
      - insertion [ref=e46]:
        - iframe [ref=e48]:
          - iframe [ref=f35e1]:
            
      - generic [ref=e51]:
        - navigation "breadcrumb mb-2" [ref=e52]:
          - list [ref=e53]:
            - listitem [ref=e54]:
              - link "Home" [ref=e55] [cursor=pointer]:
                - /url: /
            - listitem [ref=e56]: / Secure Area
        - heading "Secure Area page for Automation Testing Practice" [level=1] [ref=e57]
        - heading "Hi, practice!" [level=3] [ref=e58]
        - heading "Welcome to the Secure Area. When you are done click logout below." [level=4] [ref=e59]
        - link "Logout" [ref=e60] [cursor=pointer]:
          - /url: /logout
      - insertion [ref=e62]:
        - iframe [ref=e64]:
          - iframe [ref=f36e1]:
            
  - contentinfo [ref=e65]:
    - generic [ref=e70]:
      - heading "Practice Test Automation WebSite for Web UI and Rest API" [level=4] [ref=e71]
      - paragraph [ref=e72]:
        - text: "Version: e64cd80e | Copyright"
        - link "Expand Testing" [ref=e73] [cursor=pointer]:
          - /url: https://expandtesting.com/
        - text: "2026"
  - img [ref=e75] [cursor=pointer]
  - insertion [ref=e77]
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
  16 |     await page.goto(url);
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
> 60 |   await expect(page.screenshot()).toMatchSnapshot();
     |                     ^ Error: page.screenshot: Test ended.
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