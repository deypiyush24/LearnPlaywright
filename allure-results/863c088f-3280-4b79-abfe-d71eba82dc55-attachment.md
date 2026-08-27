# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: webInputs.spec.ts >> @webInput WebInput: FirstScenario
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
    - link "PMP Practice" [ref=e4]:
      - /url: https://pmp.expandtesting.com/
    - text: "| Free PMP Certification Mock Exam Test +900 Questions & Quizzes"
    - link "Programming" [ref=e5] [cursor=pointer]:
      - img [ref=e7]
      - text: Programming
  - banner [ref=e10]:
    - navigation "Main navigation" [ref=e11]:
      - link "SUT" [ref=e12]:
        - /url: /
        - 'img "Best Website for Practice Automation Testing: Free UI and REST API Examples and Apps. Using Cypress, Playwright, Selenium, WebdriverIO and Postman." [ref=e13]'
        - text: Practice
      - generic [ref=e14]:
        - list [ref=e15]:
          - listitem [ref=e16]:
            - button "Demos" [ref=e17] [cursor=pointer]
          - listitem [ref=e18]:
            - link "Tools" [ref=e19]:
              - /url: /#tools
          - listitem [ref=e20]:
            - link "Tips" [ref=e21]:
              - /url: /tips
          - listitem [ref=e22]:
            - link "Test Cases" [ref=e23]:
              - /url: /test-cases
          - listitem [ref=e24]:
            - link "API Testing" [ref=e25]:
              - /url: /notes/api/api-docs/
          - listitem [ref=e26]:
            - link "About" [ref=e27]:
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
          - link "Factory Automation" [ref=e44] [cursor=pointer]:
            - generic "Factory Automation" [ref=e45]
            - img [ref=e47]
          - link "Automation practice website" [ref=e49] [cursor=pointer]:
            - generic "Automation practice website" [ref=e50]
            - img [ref=e52]
          - link "Reference" [ref=e54] [cursor=pointer]:
            - generic "Reference" [ref=e55]
            - img [ref=e57]
          - link "Programming" [ref=e59] [cursor=pointer]:
            - generic "Programming" [ref=e60]
            - img [ref=e62]
          - link "Computers & Electronics" [ref=e64] [cursor=pointer]:
            - generic "Computers & Electronics" [ref=e65]
            - img [ref=e67]
          - link "Software Testing Tools" [ref=e69] [cursor=pointer]:
            - generic "Software Testing Tools" [ref=e70]
            - img [ref=e72]
          - link "Data Management" [ref=e74] [cursor=pointer]:
            - generic "Data Management" [ref=e75]
            - img [ref=e77]
          - link "Playwright Automation Course" [ref=e79] [cursor=pointer]:
            - generic "Playwright Automation Course" [ref=e80]
            - img [ref=e82]
      - generic [ref=e84]:
        - generic [ref=e86]:
          - navigation "breadcrumb mb-2" [ref=e87]:
            - list [ref=e88]:
              - listitem [ref=e89]:
                - link "Home" [ref=e90]:
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
          - generic [ref=e98]:
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
              - iframe [ref=e120]:
                - generic [active] [ref=f10e1]:
                  - generic [ref=f10e6]:
                    - generic [ref=f10e7]:
                      - generic "yourselfirst.com" [ref=f10e9]:
                        - link "Take The Free Test" [ref=f10e10] [cursor=pointer]:
                          - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=CQYmXJKJEaqzSB4qQpt8P0prfOMyF5NSHAcm257HPFc_33Zi6ARABIJWUmaMBYOUCoAGM_dKLPsgBAagDAcgDywSqBJkCT9AoMCas4UppRSu9-ONZYxUdEwdJRfL5gMo2vL8XuLNgk2779YOmO17q7ApJLHHcAqnl5sMgTYq3G6iWp3KzLB3pptcLmCmkAVfnXm7xM-r5BZniUJ4kEWksKubRtSONXJ59B49uwklvcz8-0YssYKTWwXvn1vJ_6KAAEi_Pl-tXVDg2iN91asHMWdgRoOPaKa4VOYuYbnToBPCLAm8ezvoql8IKZCdF051WtUnco2GdBnqicJM9gZOg_xIe4AKN_Xt6teaiEyaXqgfD2KIDNQCYxCEnO-gDYC32nPVgmuelB1v2M0pjC4n4ojvMI2UEqVHT3V4bEqE9Ow1cLBpOZoRlPeev4Pm4ahfv_B6dQhc70gaYAB9ilIXABOe-kNKlBYgFnMiE-1SAB4y1o-sYqAenzLECqAfi2LECqAemvhuoB8zOsQKoB_PRG6gHltgbqAeqm7ECqAeOzhuoB5PYG6gH8OAbqAfulrECqAf-nrECqAevvrECqAfVyRuoB9m2sQKoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrEC2AcB0ggzCIBhEAEYnwMyCIqCgICAgIAIOg-AQIDAgICAgKiAAqiDgBBIvf3BOljYt82Y3LCVA2ABsQnzLIzY2mJdSIAKAZgLAcgLAaIMA5ABAaoNAklOyA0B6g0TCOn6zpjcsJUDFQqI6QUdUs0XB4gOCdgTDNAVAZgWAcoWAgoA-BYBgBcBshcEGAFQBroXAjgBshgJEgKxaRgBIgEA0BgB6BgBshkBN8IZAggB&gclid=EAIaIQobChMIrPTOmNywlQMVCojpBR1SzRcHEAEYASAAEgLqu_D_BwE&num=1&cid=CAQShgIAEQoqgRfSUXu8bHIrQsLgYv6uAKSSRLesK2vfPKuz53zvCnSkGnZXsGlcQ9uACtRmLN7GWWCcu8bCkfPufYg-zt4TKkASutPfTdWOED4E8cXF0AWLgtGocg_jWEKvoEYFby4mHEGMliodzT5C_e2FQ8QWGp8DwHnCZ6AjwXa2YfpXia5wdqU3j4zpZnT9l9T5RtqxM6I0zaVYXOIH9V8AUO94bq772c61E1aefqFfgnYiLh6iCpvhntRk4Tbj0LwkLJZCpTsNRBEV46uImQclw8SxMOdGpGfA9naU_nqZoiJU9Y_OUHdp6xKlAZccbrhsWIFc6fzM3pgKbAWRxnBrntzHqBalGAE&sig=AOD64_1ZUQ4_QlcsONd932wB_YI544X7xg&client=ca-pub-1056034821646296&rf=1&nb=0&adurl=https://www.yourselfirst.com/personality%3Fabc%3D123%26utm_source%3Dgoogle%26utm_medium%3Dcpc%26utm_term%3Dasrs%2520test%26utm_campaign%3DREST_adhd%26utm_campaign_name%3DREST_adhd%26utm_campaign_id%3D22806602780%26utm_adset_id%3D181903040359%26utm_adset_name%3DREST_adhd%26utm_ad_id%3D814622781338%26gad_source%3D5%26gad_campaignid%3D22806602780
                      - generic [ref=f10e11]:
                        - link "Become the most disciplined person to achieve any goal you want" [ref=f10e13] [cursor=pointer]:
                          - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=CQYmXJKJEaqzSB4qQpt8P0prfOMyF5NSHAcm257HPFc_33Zi6ARABIJWUmaMBYOUCoAGM_dKLPsgBAagDAcgDywSqBJkCT9AoMCas4UppRSu9-ONZYxUdEwdJRfL5gMo2vL8XuLNgk2779YOmO17q7ApJLHHcAqnl5sMgTYq3G6iWp3KzLB3pptcLmCmkAVfnXm7xM-r5BZniUJ4kEWksKubRtSONXJ59B49uwklvcz8-0YssYKTWwXvn1vJ_6KAAEi_Pl-tXVDg2iN91asHMWdgRoOPaKa4VOYuYbnToBPCLAm8ezvoql8IKZCdF051WtUnco2GdBnqicJM9gZOg_xIe4AKN_Xt6teaiEyaXqgfD2KIDNQCYxCEnO-gDYC32nPVgmuelB1v2M0pjC4n4ojvMI2UEqVHT3V4bEqE9Ow1cLBpOZoRlPeev4Pm4ahfv_B6dQhc70gaYAB9ilIXABOe-kNKlBYgFnMiE-1SAB4y1o-sYqAenzLECqAfi2LECqAemvhuoB8zOsQKoB_PRG6gHltgbqAeqm7ECqAeOzhuoB5PYG6gH8OAbqAfulrECqAf-nrECqAevvrECqAfVyRuoB9m2sQKoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrEC2AcB0ggzCIBhEAEYnwMyCIqCgICAgIAIOg-AQIDAgICAgKiAAqiDgBBIvf3BOljYt82Y3LCVA2ABsQnzLIzY2mJdSIAKAZgLAcgLAaIMA5ABAaoNAklOyA0B6g0TCOn6zpjcsJUDFQqI6QUdUs0XB4gOCdgTDNAVAZgWAcoWAgoA-BYBgBcBshcEGAFQBroXAjgBshgJEgKxaRgBIgEA0BgB6BgBshkBN8IZAggB&gclid=EAIaIQobChMIrPTOmNywlQMVCojpBR1SzRcHEAEYASAAEgLqu_D_BwE&num=1&cid=CAQShgIAEQoqgRfSUXu8bHIrQsLgYv6uAKSSRLesK2vfPKuz53zvCnSkGnZXsGlcQ9uACtRmLN7GWWCcu8bCkfPufYg-zt4TKkASutPfTdWOED4E8cXF0AWLgtGocg_jWEKvoEYFby4mHEGMliodzT5C_e2FQ8QWGp8DwHnCZ6AjwXa2YfpXia5wdqU3j4zpZnT9l9T5RtqxM6I0zaVYXOIH9V8AUO94bq772c61E1aefqFfgnYiLh6iCpvhntRk4Tbj0LwkLJZCpTsNRBEV46uImQclw8SxMOdGpGfA9naU_nqZoiJU9Y_OUHdp6xKlAZccbrhsWIFc6fzM3pgKbAWRxnBrntzHqBalGAE&sig=AOD64_1ZUQ4_QlcsONd932wB_YI544X7xg&client=ca-pub-1056034821646296&rf=1&nb=7&adurl=https://www.yourselfirst.com/personality%3Fabc%3D123%26utm_source%3Dgoogle%26utm_medium%3Dcpc%26utm_term%3Dasrs%2520test%26utm_campaign%3DREST_adhd%26utm_campaign_name%3DREST_adhd%26utm_campaign_id%3D22806602780%26utm_adset_id%3D181903040359%26utm_adset_name%3DREST_adhd%26utm_ad_id%3D814622781338%26gad_source%3D5%26gad_campaignid%3D22806602780
                        - link [ref=f10e14] [cursor=pointer]:
                          - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=CQYmXJKJEaqzSB4qQpt8P0prfOMyF5NSHAcm257HPFc_33Zi6ARABIJWUmaMBYOUCoAGM_dKLPsgBAagDAcgDywSqBJkCT9AoMCas4UppRSu9-ONZYxUdEwdJRfL5gMo2vL8XuLNgk2779YOmO17q7ApJLHHcAqnl5sMgTYq3G6iWp3KzLB3pptcLmCmkAVfnXm7xM-r5BZniUJ4kEWksKubRtSONXJ59B49uwklvcz8-0YssYKTWwXvn1vJ_6KAAEi_Pl-tXVDg2iN91asHMWdgRoOPaKa4VOYuYbnToBPCLAm8ezvoql8IKZCdF051WtUnco2GdBnqicJM9gZOg_xIe4AKN_Xt6teaiEyaXqgfD2KIDNQCYxCEnO-gDYC32nPVgmuelB1v2M0pjC4n4ojvMI2UEqVHT3V4bEqE9Ow1cLBpOZoRlPeev4Pm4ahfv_B6dQhc70gaYAB9ilIXABOe-kNKlBYgFnMiE-1SAB4y1o-sYqAenzLECqAfi2LECqAemvhuoB8zOsQKoB_PRG6gHltgbqAeqm7ECqAeOzhuoB5PYG6gH8OAbqAfulrECqAf-nrECqAevvrECqAfVyRuoB9m2sQKoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrEC2AcB0ggzCIBhEAEYnwMyCIqCgICAgIAIOg-AQIDAgICAgKiAAqiDgBBIvf3BOljYt82Y3LCVA2ABsQnzLIzY2mJdSIAKAZgLAcgLAaIMA5ABAaoNAklOyA0B6g0TCOn6zpjcsJUDFQqI6QUdUs0XB4gOCdgTDNAVAZgWAcoWAgoA-BYBgBcBshcEGAFQBroXAjgBshgJEgKxaRgBIgEA0BgB6BgBshkBN8IZAggB&gclid=EAIaIQobChMIrPTOmNywlQMVCojpBR1SzRcHEAEYASAAEgLqu_D_BwE&num=1&cid=CAQShgIAEQoqgRfSUXu8bHIrQsLgYv6uAKSSRLesK2vfPKuz53zvCnSkGnZXsGlcQ9uACtRmLN7GWWCcu8bCkfPufYg-zt4TKkASutPfTdWOED4E8cXF0AWLgtGocg_jWEKvoEYFby4mHEGMliodzT5C_e2FQ8QWGp8DwHnCZ6AjwXa2YfpXia5wdqU3j4zpZnT9l9T5RtqxM6I0zaVYXOIH9V8AUO94bq772c61E1aefqFfgnYiLh6iCpvhntRk4Tbj0LwkLJZCpTsNRBEV46uImQclw8SxMOdGpGfA9naU_nqZoiJU9Y_OUHdp6xKlAZccbrhsWIFc6fzM3pgKbAWRxnBrntzHqBalGAE&sig=AOD64_1ZUQ4_QlcsONd932wB_YI544X7xg&client=ca-pub-1056034821646296&rf=1&nb=8&adurl=https://www.yourselfirst.com/personality%3Fabc%3D123%26utm_source%3Dgoogle%26utm_medium%3Dcpc%26utm_term%3Dasrs%2520test%26utm_campaign%3DREST_adhd%26utm_campaign_name%3DREST_adhd%26utm_campaign_id%3D22806602780%26utm_adset_id%3D181903040359%26utm_adset_name%3DREST_adhd%26utm_ad_id%3D814622781338%26gad_source%3D5%26gad_campaignid%3D22806602780
                          - img [ref=f10e15]
                    - generic "yourselfirst.com" [ref=f10e17]:
                      - link "yourselfirst.com" [ref=f10e18] [cursor=pointer]:
                        - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=CQYmXJKJEaqzSB4qQpt8P0prfOMyF5NSHAcm257HPFc_33Zi6ARABIJWUmaMBYOUCoAGM_dKLPsgBAagDAcgDywSqBJkCT9AoMCas4UppRSu9-ONZYxUdEwdJRfL5gMo2vL8XuLNgk2779YOmO17q7ApJLHHcAqnl5sMgTYq3G6iWp3KzLB3pptcLmCmkAVfnXm7xM-r5BZniUJ4kEWksKubRtSONXJ59B49uwklvcz8-0YssYKTWwXvn1vJ_6KAAEi_Pl-tXVDg2iN91asHMWdgRoOPaKa4VOYuYbnToBPCLAm8ezvoql8IKZCdF051WtUnco2GdBnqicJM9gZOg_xIe4AKN_Xt6teaiEyaXqgfD2KIDNQCYxCEnO-gDYC32nPVgmuelB1v2M0pjC4n4ojvMI2UEqVHT3V4bEqE9Ow1cLBpOZoRlPeev4Pm4ahfv_B6dQhc70gaYAB9ilIXABOe-kNKlBYgFnMiE-1SAB4y1o-sYqAenzLECqAfi2LECqAemvhuoB8zOsQKoB_PRG6gHltgbqAeqm7ECqAeOzhuoB5PYG6gH8OAbqAfulrECqAf-nrECqAevvrECqAfVyRuoB9m2sQKoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrEC2AcB0ggzCIBhEAEYnwMyCIqCgICAgIAIOg-AQIDAgICAgKiAAqiDgBBIvf3BOljYt82Y3LCVA2ABsQnzLIzY2mJdSIAKAZgLAcgLAaIMA5ABAaoNAklOyA0B6g0TCOn6zpjcsJUDFQqI6QUdUs0XB4gOCdgTDNAVAZgWAcoWAgoA-BYBgBcBshcEGAFQBroXAjgBshgJEgKxaRgBIgEA0BgB6BgBshkBN8IZAggB&gclid=EAIaIQobChMIrPTOmNywlQMVCojpBR1SzRcHEAEYASAAEgLqu_D_BwE&num=1&cid=CAQShgIAEQoqgRfSUXu8bHIrQsLgYv6uAKSSRLesK2vfPKuz53zvCnSkGnZXsGlcQ9uACtRmLN7GWWCcu8bCkfPufYg-zt4TKkASutPfTdWOED4E8cXF0AWLgtGocg_jWEKvoEYFby4mHEGMliodzT5C_e2FQ8QWGp8DwHnCZ6AjwXa2YfpXia5wdqU3j4zpZnT9l9T5RtqxM6I0zaVYXOIH9V8AUO94bq772c61E1aefqFfgnYiLh6iCpvhntRk4Tbj0LwkLJZCpTsNRBEV46uImQclw8SxMOdGpGfA9naU_nqZoiJU9Y_OUHdp6xKlAZccbrhsWIFc6fzM3pgKbAWRxnBrntzHqBalGAE&sig=AOD64_1ZUQ4_QlcsONd932wB_YI544X7xg&client=ca-pub-1056034821646296&rf=1&nb=1&adurl=https://www.yourselfirst.com/personality%3Fabc%3D123%26utm_source%3Dgoogle%26utm_medium%3Dcpc%26utm_term%3Dasrs%2520test%26utm_campaign%3DREST_adhd%26utm_campaign_name%3DREST_adhd%26utm_campaign_id%3D22806602780%26utm_adset_id%3D181903040359%26utm_adset_name%3DREST_adhd%26utm_ad_id%3D814622781338%26gad_source%3D5%26gad_campaignid%3D22806602780
                  - img [ref=f10e22] [cursor=pointer]
                  - button [ref=f10e24] [cursor=pointer]:
                    - img [ref=f10e25]
                  - iframe
        - insertion [ref=e122]:
          - generic [ref=e125]:
            - heading "These are topics related to the article that might interest you" [level=2] [ref=e127]: Discover more
            - link "Test Case Templates" [ref=e128] [cursor=pointer]:
              - generic "Test Case Templates" [ref=e129]
              - img [ref=e131]
            - link "Internet & Telecom" [ref=e133] [cursor=pointer]:
              - generic "Internet & Telecom" [ref=e134]
              - img [ref=e136]
            - link "Postman Tutorial Guides" [ref=e138] [cursor=pointer]:
              - generic "Postman Tutorial Guides" [ref=e139]
              - img [ref=e141]
            - link "Test Case Management" [ref=e143] [cursor=pointer]:
              - generic "Test Case Management" [ref=e144]
              - img [ref=e146]
            - link "IT & Technical Jobs" [ref=e148] [cursor=pointer]:
              - generic "IT & Technical Jobs" [ref=e149]
              - img [ref=e151]
            - link "UI Testing Examples" [ref=e153] [cursor=pointer]:
              - generic "UI Testing Examples" [ref=e154]
              - img [ref=e156]
            - link "Training & Certification" [ref=e158] [cursor=pointer]:
              - generic "Training & Certification" [ref=e159]
              - img [ref=e161]
            - link "Software" [ref=e163] [cursor=pointer]:
              - generic "Software" [ref=e164]
              - img [ref=e166]
  - contentinfo [ref=e168]:
    - generic [ref=e173]:
      - heading "Practice Test Automation WebSite for Web UI and Rest API" [level=4] [ref=e174]
      - paragraph [ref=e175]:
        - text: "Version: e64cd80e | Copyright"
        - link "Expand Testing" [ref=e176]:
          - /url: https://expandtesting.com/
        - text: "2026"
  - img [ref=e178] [cursor=pointer]
  - insertion [ref=e180]:
    - iframe [ref=e183]:
      - iframe [ref=f12e1]:
        - generic [active]:
          - generic [ref=f13e2]:
            - link "Advertisement" [ref=f13e4]:
              - /url: https://adclick.g.doubleclick.net/pcs/click?xai=AKAOjsuv049emaq1OKeCZamZiAuycQ5BAL3Q3HDEZxcn_Rt0PnVPSM2B2RAtIT5_MqhCSOGILQwZpDsJpYiu1xk30_XJLkZ3ytpSUPM4JISDz-iFnQbipw44YG7nnqvpQJDcpGn9xS-E1Luu8aNYBKfu-ZjCtr9V4t4VZxeXYbf_lxsppXeEd-oWNOG1Nnc6ehgcwWUwDV0cEZmVmFzmMmgd15fCD1_QGcDBnMVH61CUhNXw5QkMwf_IhgoJL5YaDH2kTZwzdxLAuHaihH8l7F0KFmEHnBRU_wsi7Efke62HphOVqJU1a3wuqyRLTOX9mmI789105lai5YnjqBiwUmt2fYOKwcuwBoOx23SMVJRugOzWWxcf5tXXiY9Cm1lo-v-FNg00fJ0E-gEyVAnhFIXNuhmtvEfx6Xnb__4AC373Do5Hc8lrceyD5j9j3OuXVPLy80m3xOtcZiP42TrluT62TomG-FWfj7BN1Trh-VHXbPcRu8NgKfp1NGw85cTcUwWhZJfaX0t5Dnr7vTngfO5DxmDzKcs0QmBDmMe2GdrmpRkBGfGsbS9naReH2XbXKCS-f3K8jD856lDgYs1ebek82OYTExffg_vk9_et_ltR9Qh45O0FRXbXoJy_j74RON-2u99Y1dx7o3K64iLR57n3o5s4jEYqR5PeolCIqgrelCiwAfv0J2rrkHyWVJrpEbK2BGLvtmXk9iYZ9S5FfYyZEqJ62xHnted6krSXR3pYHvoc3_p4W0lK3S_oXULQrAteinhpwUpYXQ7qrva9KS0G7-xjrSyrIr85B3JZ5OtI_YBnEpKt-GmUPWLkU7spm2yzw6qqvNFOP_8vHDl2smK6IwT_P2MygYDSFsdP0lWWe6e_lm7dNBpXn3sLGYdiTtL9-4pF_5bqedipKepLYyDOgPjEYNS7N-5i8RADO5FtjAkjnO_NTwoAo4CIcHYssb6HFUUNu8y-BNQTs61yvs7HGIWN0KH6VO7FzuzFUjPtl7oEoC9CAnzRrY7x35z3B3pwG5Kt8zOdbej1uP_tHREYQeetD_0sfOJFxSIF_AvmzHUfXjnmyFFGqxcPtQHgGmhwCF65c1TDxqnDnB2tMFL2aCFg_2uqsXPX5bhmfwdjIZ99_YPtNMvhHRitJMrvRTMqtzEU4zbotPXi6TTK70IUul501vdBlntOviQA1196NyzmRHlq_3TARieXKdnZajFq-xt4pKW4qQaLn5oS_6VvtFlp1_nP6LsvL7mxviBdxWkjOYYUXWxwqJaJoQI4hHBY21ORXsKfkfKZGmNEWAC9keUqIVZwmWKC09ZRaytrZU51_H7UliuJAGKiKmrzUSAcQnTF8G-vQ_NL6JeJpBvWeQK-9cnRp4ozVKDV9Yvtith2VDIQwdCUYXvFkk-buKJzB6D93D2naiLdpdOqiTKl1-YbdF9B_iSortwGzNlrJ8RQMJNQzYO8R0bFWGNvwHEThvbTDJHxDNOyROaqKy6RTpaXDyB8HQS4t_2aSZZ696P0BknehmZc9RZ9E_NH0I_2_TE4qoy5wu77-02_or5xyz4HAeVjk265_C6szGieeXs8uoPjoAkM5cS4CaPbep6n3phUSIgxkp6ir_x2RTN5ntYZJPfz1JELaD7k3gsvy88GkeEsxRP85tb40hCF3sRvyMDBV1K4RYPgoj-CS1OMdKfgNtm7v-aUK0YD54FI2nn3GPGF5nQydfY872MFP_yAqyMybe2JL6SCDkrlEdRLG1NyokqZRXrKTBEIWD-ujRtZS0GKnsyKOmh9d4rcgVAbR1MGsMazd_RBZiBU5eQmLsUQ6CNrCBwGMqeYelfmfQ&sai=AMfl-YQjw-NlV8IzGUfUkBYmV6Q07sp2O05xtRjJqhPD-oGqq3obZf6O0r_QmviRDwoUk3tRXOv0hvZASH9oHiFTmSfmcBmttp3DedBz3KMqYvIvg7PJeJJ5M6JwqxrYtLUJ7Uu368QhjxeXQcTgbJ5DTlmRNJlYoesJ2510ZR6QObFw1e6fbcfo-lRtjUIaq7VVTXfaiNqDzzq-HSFxWgbNjB_9HVYh1J3vxr74T9zPHv-VeqeKhBft6XGIFihG4FeyOSaKXxVVon62BaW9t_AqdjV3b6-AV23Xa4yC39NsZz2Moi5PcCXwcPXEcHaNJe2db9IT0htEBSbmZbUyvD6zjkITFgO0HuJ5qaOsq4VW3PRljtmGPJV98fkcDbzoI9kagctx9jX-7JL4wqWF8N5s2ZL9qaaSTGsW2rluOu63OZ3geI9SBb92c2Lrxo30r4XnZDwIUS2cuBr0OKIem90wDG3eiOET0M6mjP7sVClu_L0JWBQ3YI3DU4mf1KhCDbPGtWjNqGuL29GReS0ljFX_3UV2_Cs5t8wtNRGs14EilZRKv9rsywnVoCDzTwS9oxUYPLZb_u82cXH4PNzIRk1M20W3QaE_0-u_cZoZcIBa7e_xUZfaxAIt5uTrJG-pAqZnf-KQMgvdcsc2gTaBESxM4K-m7YBUeVGTNgluqM2qax-mVrBAjDgb_nftjYSvCflJJcRhS6h6krFfSO5QcScfllBnBCu8m5BNDHIQwOrpFx8pJXqkMNQg54jF3hthdj4ldyblp7FdZht9T-X3FtHRP6BqytXRG-H-_FShOxSHLVCatVeQAtIhoVZd7JUSB6AWjvkEKM6ITQ3i2BPyA99364ym83gP1-aE8reVTNztYWN8VVVcShfGytC6aMXNalLA5nC6a3X5wvdyOiac1mZn7T3mzxTTN21QofsGnOuI83k&sig=Cg0ArKJSzFoRpdRIGHlZ&fbs_aeid=%5Bgw_fbsaeid%5D&urlfix=1&adurl=https://t.6sc.co/img.gif%3Fevent%3Dclk%26mcid%3D315494%26cb%3D509964615%26pid%3D448528232%26cid%3D35692126%26redirect%3Dhttps://www.dellstore.com/deals/laptop-deals.html%253Fgacd%253D16220998-35692126-5775970-448528232-257571864%2526dgc%253Dba%2526dclid%253D%2525edclid!%2526gad_source%253D7%2526gad_campaignid%253D23896674453
              - img "Advertisement" [ref=f13e5]
            - generic [ref=f13e6]:
              - generic:
                - img [ref=f13e10] [cursor=pointer]
                - button [ref=f13e12] [cursor=pointer]:
                  - img [ref=f13e13]
          - generic:
            - generic:
              - img [ref=f13e22] [cursor=pointer]
              - img [ref=f13e24] [cursor=pointer]
  - generic [ref=e184]:
    - generic [ref=e185] [cursor=pointer]:
      - img [ref=e187]
      - link "Go to shopping options for Postman Tutorial Guides" [ref=e189]: Postman Tutorial Guides
    - button "Close shopping anchor" [ref=e190]
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