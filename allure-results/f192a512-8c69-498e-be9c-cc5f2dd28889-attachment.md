# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: webInputs.spec.ts >> @webInput WebInput: SecondScenario
- Location: tests/webInputs.spec.ts:23:5

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: locator.fill: Test timeout of 60000ms exceeded.
Call log:
  - waiting for getByRole('textbox', { name: 'Input: Number' })

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - paragraph [ref=e3]:
    - link "PMP Practice" [ref=e4] [cursor=pointer]:
      - /url: https://pmp.expandtesting.com/
    - text: "| Free PMP Certification Mock Exam Test +900 Questions & Quizzes"
    - link "Programming" [ref=e5] [cursor=pointer]:
      - img [ref=e7]
      - text: Programming
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
          - link "Reference" [ref=e44] [cursor=pointer]:
            - generic "Reference" [ref=e45]
            - img [ref=e47]
          - link "Data Management" [ref=e49] [cursor=pointer]:
            - generic "Data Management" [ref=e50]
            - img [ref=e52]
          - link "Training & Certification" [ref=e54] [cursor=pointer]:
            - generic "Training & Certification" [ref=e55]
            - img [ref=e57]
          - link "Test Case Management" [ref=e59] [cursor=pointer]:
            - generic "Test Case Management" [ref=e60]
            - img [ref=e62]
          - link "Internet & Telecom" [ref=e64] [cursor=pointer]:
            - generic "Internet & Telecom" [ref=e65]
            - img [ref=e67]
          - link "UI Testing Examples" [ref=e69] [cursor=pointer]:
            - generic "UI Testing Examples" [ref=e70]
            - img [ref=e72]
          - link "Playwright Automation Course" [ref=e74] [cursor=pointer]:
            - generic "Playwright Automation Course" [ref=e75]
            - img [ref=e77]
          - link "Factory Automation" [ref=e79] [cursor=pointer]:
            - generic "Factory Automation" [ref=e80]
            - img [ref=e82]
      - generic [ref=e84]:
        - generic [ref=e86]:
          - navigation "breadcrumb mb-2" [ref=e87]:
            - list [ref=e88]:
              - listitem [ref=e89]:
                - link "Home" [ref=e90] [cursor=pointer]:
                  - /url: /
              - listitem [ref=e91]: / Inputs
          - heading "Web inputs page for Automation Testing Practice" [level=1] [ref=e92]
          - generic [ref=e93]:
            - paragraph [ref=e94]:
              - text: Web inputs refer to the data or information provided by users through various input mechanisms on a website.
              - text: Web inputs allow users to interact with web pages, submit forms, and provide data for processing.
            - generic [ref=e95]:
              - button "Display Inputs" [ref=e96] [cursor=pointer]
              - button "Clear Inputs" [ref=e97] [cursor=pointer]
          - generic [ref=e99]:
            - generic [ref=e101]:
              - generic [ref=e102]: "Input: Number"
              - 'spinbutton "Input: Number" [ref=e103]'
            - generic [ref=e105]:
              - generic [ref=e106]: "Input: Text"
              - 'textbox "Input: Text" [ref=e107]'
            - generic [ref=e109]:
              - generic [ref=e110]: "Input: Password"
              - 'textbox "Input: Password" [ref=e111]'
            - generic [ref=e113]:
              - generic [ref=e114]: "Input: Date"
              - 'textbox "Input: Date" [ref=e115]'
        - insertion [ref=e118]:
          - generic [ref=e121]:
            - heading "These are topics related to the article that might interest you" [level=2] [ref=e123]: Discover more
            - link "REST API Examples" [ref=e124] [cursor=pointer]:
              - generic "REST API Examples" [ref=e125]
              - img [ref=e127]
            - link "Dictionaries & Encyclopedias" [ref=e129] [cursor=pointer]:
              - generic "Dictionaries & Encyclopedias" [ref=e130]
              - img [ref=e132]
            - link "Test Case Templates" [ref=e134] [cursor=pointer]:
              - generic "Test Case Templates" [ref=e135]
              - img [ref=e137]
            - link "Software Testing Tools" [ref=e139] [cursor=pointer]:
              - generic "Software Testing Tools" [ref=e140]
              - img [ref=e142]
            - link "Software" [ref=e144] [cursor=pointer]:
              - generic "Software" [ref=e145]
              - img [ref=e147]
            - link "Development Tools" [ref=e149] [cursor=pointer]:
              - generic "Development Tools" [ref=e150]
              - img [ref=e152]
            - link "Automation practice website" [ref=e154] [cursor=pointer]:
              - generic "Automation practice website" [ref=e155]
              - img [ref=e157]
            - link "Postman Tutorial Guides" [ref=e159] [cursor=pointer]:
              - generic "Postman Tutorial Guides" [ref=e160]
              - img [ref=e162]
  - contentinfo [ref=e164]:
    - generic [ref=e169]:
      - heading "Practice Test Automation WebSite for Web UI and Rest API" [level=4] [ref=e170]
      - paragraph [ref=e171]:
        - text: "Version: e64cd80e | Copyright"
        - link "Expand Testing" [ref=e172] [cursor=pointer]:
          - /url: https://expandtesting.com/
        - text: "2026"
  - img [ref=e174] [cursor=pointer]
  - insertion [ref=e176]:
    - iframe [ref=e179]:
      - generic [ref=f12e3]:
        - button [ref=f12e4]:
          - img [ref=f12e5]
        - generic [ref=f12e7]:
          - button "Replay" [ref=f12e15]:
            - img [ref=f12e17] [cursor=pointer]
          - button "Learn more" [ref=f12e24] [cursor=pointer]
  - generic [ref=e180]:
    - generic [ref=e181] [cursor=pointer]:
      - img [ref=e183]
      - link "Go to shopping options for Training & Certification" [ref=e185]: Training & Certification
    - button "Close shopping anchor" [ref=e186]
```

# Test source

```ts
  1  | import { Page, Locator, expect } from "@playwright/test";
  2  | 
  3  | export class WebINPUT {
  4  |   private readonly page: Page;
  5  |   private readonly welcomeText: Locator;
  6  |   private readonly inputNumber: Locator;
  7  |   private readonly inputText: Locator;
  8  |   private readonly inputPassword: Locator;
  9  |   private readonly inputDate: Locator;
  10 | 
  11 |   constructor(page: Page) {
  12 |     this.page = page;
  13 |     this.welcomeText = page.getByRole("heading", {
  14 |       name: "Web inputs page for Automation Testing Practice",
  15 |     });
  16 |     this.inputNumber = page.getByRole("textbox", { name: "Input: Number" });
  17 |     this.inputText = page.getByRole("textbox", { name: "Input: Text" });
  18 |     this.inputPassword = page.getByRole("textbox", { name: "Input: Password" });
  19 |     this.inputDate = page.getByRole("textbox", { name: "Input: Date" });
  20 |   }
  21 | 
  22 |   public async verifyWelcomeText(expected: string) {
  23 |     await expect(this.welcomeText).toHaveText(expected);
  24 |   }
  25 | 
  26 |   public async enterTheNumberTextAndPassword(
  27 |     value: number,
  28 |     text: string,
  29 |     password: string,
  30 |   ) {
> 31 |     await this.inputNumber.fill(`${value}`);
     |                            ^ Error: locator.fill: Test timeout of 60000ms exceeded.
  32 |     await this.inputText.fill(text);
  33 |     await this.inputPassword.fill(password);
  34 |   }
  35 | 
  36 |   
  37 | }
  38 | 
```