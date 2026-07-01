# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: webInputs.spec.ts >> @webInput WebInput: ThirdScenario
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
          - link "Internet & Telecom" [ref=e44] [cursor=pointer]:
            - generic "Internet & Telecom" [ref=e45]
            - img [ref=e47]
          - link "Test Case Management" [ref=e49] [cursor=pointer]:
            - generic "Test Case Management" [ref=e50]
            - img [ref=e52]
          - link "Automation practice website" [ref=e54] [cursor=pointer]:
            - generic "Automation practice website" [ref=e55]
            - img [ref=e57]
          - link "IT & Technical Jobs" [ref=e59] [cursor=pointer]:
            - generic "IT & Technical Jobs" [ref=e60]
            - img [ref=e62]
          - link "Dictionaries & Encyclopedias" [ref=e64] [cursor=pointer]:
            - generic "Dictionaries & Encyclopedias" [ref=e65]
            - img [ref=e67]
          - link "Reference" [ref=e69] [cursor=pointer]:
            - generic "Reference" [ref=e70]
            - img [ref=e72]
          - link "Postman Tutorial Guides" [ref=e74] [cursor=pointer]:
            - generic "Postman Tutorial Guides" [ref=e75]
            - img [ref=e77]
          - link "Software Testing Tools" [ref=e79] [cursor=pointer]:
            - generic "Software Testing Tools" [ref=e80]
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
            - link "Development Tools" [ref=e124] [cursor=pointer]:
              - generic "Development Tools" [ref=e125]
              - img [ref=e127]
            - link "Computers & Electronics" [ref=e129] [cursor=pointer]:
              - generic "Computers & Electronics" [ref=e130]
              - img [ref=e132]
            - link "Test Case Templates" [ref=e134] [cursor=pointer]:
              - generic "Test Case Templates" [ref=e135]
              - img [ref=e137]
            - link "REST API Examples" [ref=e139] [cursor=pointer]:
              - generic "REST API Examples" [ref=e140]
              - img [ref=e142]
            - link "Programming" [ref=e144] [cursor=pointer]:
              - generic "Programming" [ref=e145]
              - img [ref=e147]
            - link "Software" [ref=e149] [cursor=pointer]:
              - generic "Software" [ref=e150]
              - img [ref=e152]
            - link "Playwright Automation Course" [ref=e154] [cursor=pointer]:
              - generic "Playwright Automation Course" [ref=e155]
              - img [ref=e157]
            - link "UI Testing Examples" [ref=e159] [cursor=pointer]:
              - generic "UI Testing Examples" [ref=e160]
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
      - iframe [ref=f12e1]:
        - generic [active]:
          - generic [ref=f13e2]:
            - link "Advertisement" [ref=f13e4] [cursor=pointer]:
              - /url: https://adclick.g.doubleclick.net/pcs/click?xai=AKAOjsuq-GrDtPisfBDbUGs_62Pvu5Vml9s5hMdrcnTZVdV7AwPw5eGrnXJY0Au9xG9uegjmRMFkE09A3w6YxUxc1bOkXIzh_C8MMec4T64Ypso0zCDev-D5NqmaJ1i-zhALmsMJ7rspkTFcv4qbdI1gSnP_rwUMkHT1Kk_iV-yFHPcEBfhRzTbrokx_79k5sYbjGP987Cf15bnpVK4QGYqfGD8ILdAbjnGA5LrN8-by66lLDv8aULiEIATo7d2fM5Fw-D_fPfg73Is1D4e-EtNc5Q3TKAvGDO4am2FH0mTyESofSKJYsjn-rN91zI9bs4-sRA8-Ap65_8pXZ5Dpsvi-c1REOW02dD6YQU7ayA3rBJWcri_buZYX7HwZD_sKdX_RuiuwykvKlVDUIm7hKpRRb9uQYddKGPYSrTvXzsa-ItMfOGrk_Qu8iONd4vXKhoYr02K7kBd0huFQnJsok3fqtODOpymBNw40s1jTcbkql5RQRw9IhTSFt5Hvyj-lAf518zfu2QCxHtRX-vAth-Px6dlGJlx7jNvOr6z8HC44f1F-5eGrAYHnIK_w4x8n0upNRrmPqlNcCg2zfotEEVjBbIdeSR6SPqtxdWqTEVqnCxFX8HzqSpSdXaSUy12efKGvfrbF1xZf0sRm1pL0c1iB-q_Xxp7D9FgRTGp9_GiwiunRcRjZdOOkra_yOFREllI40t6PYGvSMhH0CF2tmAXmerDfy7nHaOG-E9Dz3ZC5dqCJx-ju6S1O7vfq_IjNiel3FXyHecPDGsieGu-65if31qTCoiHsr-lqaoQmhQ8IJeQQJ87uLxRkKM9_-jEzuabVtCM9bn0Xl33psfqfBOW1LZ4Ycs73LigzpRWrOif9hj9hRD9Lunl16c8wEJfTnjko1rS60-u_Wr71F1b2RD5SDVsdvrVHn0kvKacd5nxHLQD6_lFIRQW1S_ZCeTAqDNEG6dDNgd1tKsDirP6bCYjldgVaNR-PGeVBvN0k_gQvF7s5L7GbncK63xJcWbgmsZdCdGaPz1g8jsksYpcPmArzj_Yum70dP-9ytLLECiAnxmAM-caO4lotezoWppnxxwmtm-eTys_GE27FZ7ZVzRi2jUtdwGRDnUe1XaO1yGQdYqzHXl5z6itRcMEBnUL2cVc0qhiq-0E8K49lxVN5AGNjhd-qDr7DelVpiiLOEGcdzRj7sSsHWFkcps-aqmE1WPjKZrU02-99fsNxAyRIhvmb-XZE9ApkMyUzMyn5EaUKK2VjfS1tXfXnz2r60Awwv-9ywjHDpm6FCj3aYQCWhvV428cnonTQaRtle_VlRcvhxN_7MOZlRlScTRG51APXWaQyXn_WEpztEXjXaAyOBug5VQbjogM_Lr4vobKTYWwoIsGEZIMKq1cTyW0UErgq40rsEldxAtd5sHoVMT8ncS2sK3fEgnSNrfr3vqI2uLWZT5UwdXySYafUhRarQJpwXzdApKzaK1qpvooZpxujsQCIkvul55xBRQtwOz0M_aS2M9vylYml5jz5jNHseaySPfMrGa3Gswc5m9O5IQkFxvogWBdMBQamGXUIimxB9_Ugn7JO9fsm9tRPWRzKjqvqJ_bgGWBJOVVIOd8k8EvWZJ0xJE0z4SGF6mj3qvbhDaYXlh4iNuqRhUb7YVfeqrLfa5taqTBtoCT6iexwnHt3hsHis1rHdB1MnZsk_r3xy4tBbSmqIONpsG7qCYEkO8fTchUP8EmuDOdHtIzf1w7MtdIFwfUyiXLPhPSXDZn3lLSSn6lp66_ttUyqCG_aUhYrS64&sai=AMfl-YSx42vgTrVnkxZPAmZU-LSs6KqaN7d1JX2LoTwGPOaEQT8MqpsVUidJLOIxrm23HiD0ce6jEO77WLIq6YJvFvv-xbGYbjlCfUY9mhJI4BXBITEzOjCLVaeDFyv02Gaihg1lbiyHZGi2M8urVJXADqP1bcSEaglUxMSOrQ_cfGFinHE6OTNpPQzsgybWu5JAeyeYg8VDX15ZqGHEdS5k1HZXXh0DCy53VXXWoHQiUiYC-rcF_ItRFQ_kQKdTdWgnx3ho--kAyGOCudci6EHSSQ5dsJcdIiHdBmOw6yzWv-A7nxFO8pdF-b7K31xkVNRNYFB6_-0BdpAUEjrP6efKYb405adH-aDP4Q21iLmmPUH0bs_H1IOZS9Pg7A_1xZEkW8aBtoC5QBxP7CoSC-8heGrqQlSIx8Xg8qvlnW0Cqn75qH373kz8kGWx5uaNDBuOwrDrKIcweRd2W1UdOqTxFBjQ-rqPnXy1ENPp2fCSAb0T3SIoRY4UWAzOI_PSkZ5zkTNJPElRLKADl1m05hSxxdB6rvx-eA-geOa2xm0uyYjs1j2i7PjcMTumYtdWI1wDjgNMKIjFgtcHfUFE_QMj-vFo1CDpAVi7xM8C7muFR3lP3eJY1b9FzhUSRo-XoVnp-8Ar_0MqibEVgs8e5KmPfeJEL4UIIR-KSwcr-SjelhTVxzAFxZuOtTpcj2nZ0VuUf9kZLfdgcMzFsUAtcEgHEgp-OhdyYFeLeogoT2emtv2b6jQ_XPNk2reIqVLcqXc8ZGfXR6iYjA-rGOvG8PKvB7mZDwQuhDUDSpWxf-RYWUpw8wjju8D0a83SsrYnQgEMombcgNYc09nt6snCpQGreb80KVTqLgUZ3f0LDJC4B1NYNSeGqGkdUAvDVyD98dClqpRx2jVTvvmBJyIrxaBYNhlIEwe1NJHEoMoj1B3UrZ4&sig=Cg0ArKJSzDnN2HHM_mn2&fbs_aeid=%5Bgw_fbsaeid%5D&urlfix=1&adurl=https://t.6sc.co/img.gif%3Fevent%3Dclk%26mcid%3D315494%26cb%3D196753592%26pid%3D448528232%26cid%3D35692126%26redirect%3Dhttps://www.dellstore.com/deals/laptop-deals.html%253Fgacd%253D16220998-35692126-5775970-448528232-257571864%2526dgc%253Dba%2526dclid%253D%2525edclid!%2526gad_source%253D7%2526gad_campaignid%253D23896674453
              - img "Advertisement" [ref=f13e5]
            - generic [ref=f13e6]:
              - generic:
                - img [ref=f13e10] [cursor=pointer]
                - button [ref=f13e12] [cursor=pointer]:
                  - img [ref=f13e13]
          - generic:
            - generic:
              - img [ref=f13e21] [cursor=pointer]
              - img [ref=f13e23] [cursor=pointer]
  - generic [ref=e180]:
    - generic [ref=e181] [cursor=pointer]:
      - img [ref=e183]
      - link "Go to shopping options for Programming" [ref=e185]: Programming
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