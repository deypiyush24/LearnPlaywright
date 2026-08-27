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
    - insertion [ref=e33]:
      - iframe [ref=e35]:
        - generic [active] [ref=f3e1]:
          - generic [ref=f3e6]:
            - link [ref=f3e7] [cursor=pointer]:
              - /url: https://adclick.g.doubleclick.net/aclk?sa=l&ai=Cy-2N7aFEapyfK5-M9fwPnrCvUZPAwZV76ZzlubUT-r_XrecOEAEglZSZowFg5QKgAYnTgckCyAEJqQL06O3CzyWzPqgDAcgDywSqBKACT9DvArXQHhOYvoy2rscgxbKd3IYcszOdUtfYCEYbCg3iIAFNXlWzdArewQXvvUl3G11bxuNNCWostKdgS-SlsnzK7htFK0BPFPNEb4bsNhwONxI3xgqkNLi9R_NieK7uP9xXct2NXHHx7ceKkAq6PZKvPvsI-GrrPptPoaxUj7HvrTqPStFoKROgzgqiQ8ZsLz72EDoZzIURVWwWb7yJh9ycbs3MCkK6szK7tB2AjmSqBQyXKzUliT2bRdL2QwccYN6mVRapmzSwHWkwCFtomEMOxUSFYKP4x75d9mzmQCOnpzEGXKIqGHX6pHjG-ipO3f2Rsv9JI3nEaQT8dBXYmHVDUEZHMfrNBgs-1s1dTu4RofdPhCq0a2OIiibkqdKgwATAlM_3kwOIBeqfgoUpoAYugAffrP62AagHp8yxAqgH4tixAqgHpr4bqAfMzrECqAfz0RuoB5bYG6gHqpuxAqgH_uixAqgHjs4bqAeT2BuoB_DgG6gH7paxAqgH_p6xAqgHr76xAqgH1ckbqAfZtrECqAeaBqgH_56xAqgH35-xAqgH-MKxAqgH-8KxAtgHANIIMwiAYRABGJ8DMgiKgoCAgICACDoPgECAwICAgICogAKog4AQSL39wTpYpKfV_tuwlQNgAbEJbMvc9OYt3iuACgGYCwHICwGADAGiDA8qCgoIjt-xApXisQKQAQGqDQJJTsgNAeoNEwj2ztX-27CVAxUfRp0JHR7YKwrwDQKIDgnYEwrQFQGYFgHKFgIKAPgWAYAXAbIXEBgBKgo0OTcwMjEyMjIxUAa6FwI4AaoYFwkAAAAAAOzzQBIKNDk3MDIxMjIyMRgBshgJEgLoWRguIgEA0BgBwhkCCAE&ae=1&gclid=EAIaIQobChMI3MnV_tuwlQMVH0adCR0e2CsKEAEYASAAEgJiAPD_BwE&num=1&cid=CAQShgIAEQoqgcgFa7keQiFpUncVuVFXQ9etbuFque9Qw-T-HqC_bfYLHnasCkRo96dZTQXXEpKuId02aPqhk0c8R_45Yar7xdG7MzQgBb-H6zLTX139xgiApqFH7L2hXQHct6bUpXVNAkoHwI5lAL2jNZmeHmIOHCNOCD1hbhNBXVHAeE2xlcIBkK605qAvTyuSAx2TihsRcj3CkoX0xT0P4sh-lGbbikEargRTwJgiOgqdQ6Sv6uXeznu6e-W-v2mXa64JRNnGWnTGEsAnZ61mrcFvTNAoXMwEJN0mOmvr25ouPxxPdDtnIvJGfCF-2Dg-zyJy6-03hEXnx_CXnG2OwVEhcuJbVmgCGAE&sig=AOD64_0EestC7GDPkhGCcx3tJDsVbbjidg&client=ca-pub-1056034821646296&rf=1&nb=9&adurl=https://leanpub.com/node-opcuabyexample-edition2024%3Fgad_source%3D5%26gad_campaignid%3D11016376298%26gclid%3DEAIaIQobChMI3MnV_tuwlQMVH0adCR0e2CsKEAEYASAAEgJiAPD_BwE
              - img [ref=f3e8]
            - generic [ref=f3e10]:
              - generic [ref=f3e13]:
                - link "NodeOPCUA by example - 2024" [ref=f3e17] [cursor=pointer]:
                  - /url: https://adclick.g.doubleclick.net/aclk?sa=l&ai=Cy-2N7aFEapyfK5-M9fwPnrCvUZPAwZV76ZzlubUT-r_XrecOEAEglZSZowFg5QKgAYnTgckCyAEJqQL06O3CzyWzPqgDAcgDywSqBKACT9DvArXQHhOYvoy2rscgxbKd3IYcszOdUtfYCEYbCg3iIAFNXlWzdArewQXvvUl3G11bxuNNCWostKdgS-SlsnzK7htFK0BPFPNEb4bsNhwONxI3xgqkNLi9R_NieK7uP9xXct2NXHHx7ceKkAq6PZKvPvsI-GrrPptPoaxUj7HvrTqPStFoKROgzgqiQ8ZsLz72EDoZzIURVWwWb7yJh9ycbs3MCkK6szK7tB2AjmSqBQyXKzUliT2bRdL2QwccYN6mVRapmzSwHWkwCFtomEMOxUSFYKP4x75d9mzmQCOnpzEGXKIqGHX6pHjG-ipO3f2Rsv9JI3nEaQT8dBXYmHVDUEZHMfrNBgs-1s1dTu4RofdPhCq0a2OIiibkqdKgwATAlM_3kwOIBeqfgoUpoAYugAffrP62AagHp8yxAqgH4tixAqgHpr4bqAfMzrECqAfz0RuoB5bYG6gHqpuxAqgH_uixAqgHjs4bqAeT2BuoB_DgG6gH7paxAqgH_p6xAqgHr76xAqgH1ckbqAfZtrECqAeaBqgH_56xAqgH35-xAqgH-MKxAqgH-8KxAtgHANIIMwiAYRABGJ8DMgiKgoCAgICACDoPgECAwICAgICogAKog4AQSL39wTpYpKfV_tuwlQNgAbEJbMvc9OYt3iuACgGYCwHICwGADAGiDA8qCgoIjt-xApXisQKQAQGqDQJJTsgNAeoNEwj2ztX-27CVAxUfRp0JHR7YKwrwDQKIDgnYEwrQFQGYFgHKFgIKAPgWAYAXAbIXEBgBKgo0OTcwMjEyMjIxUAa6FwI4AaoYFwkAAAAAAOzzQBIKNDk3MDIxMjIyMRgBshgJEgLoWRguIgEA0BgBwhkCCAE&ae=1&gclid=EAIaIQobChMI3MnV_tuwlQMVH0adCR0e2CsKEAEYASAAEgJiAPD_BwE&num=1&cid=CAQShgIAEQoqgcgFa7keQiFpUncVuVFXQ9etbuFque9Qw-T-HqC_bfYLHnasCkRo96dZTQXXEpKuId02aPqhk0c8R_45Yar7xdG7MzQgBb-H6zLTX139xgiApqFH7L2hXQHct6bUpXVNAkoHwI5lAL2jNZmeHmIOHCNOCD1hbhNBXVHAeE2xlcIBkK605qAvTyuSAx2TihsRcj3CkoX0xT0P4sh-lGbbikEargRTwJgiOgqdQ6Sv6uXeznu6e-W-v2mXa64JRNnGWnTGEsAnZ61mrcFvTNAoXMwEJN0mOmvr25ouPxxPdDtnIvJGfCF-2Dg-zyJy6-03hEXnx_CXnG2OwVEhcuJbVmgCGAE&sig=AOD64_0EestC7GDPkhGCcx3tJDsVbbjidg&client=ca-pub-1056034821646296&rf=1&nb=0&adurl=https://leanpub.com/node-opcuabyexample-edition2024%3Fgad_source%3D5%26gad_campaignid%3D11016376298%26gclid%3DEAIaIQobChMI3MnV_tuwlQMVH0adCR0e2CsKEAEYASAAEgJiAPD_BwE
                - link "learn how to create OPCUA servers and clients using Typescript and NodeJS" [ref=f3e21] [cursor=pointer]:
                  - /url: https://adclick.g.doubleclick.net/aclk?sa=l&ai=Cy-2N7aFEapyfK5-M9fwPnrCvUZPAwZV76ZzlubUT-r_XrecOEAEglZSZowFg5QKgAYnTgckCyAEJqQL06O3CzyWzPqgDAcgDywSqBKACT9DvArXQHhOYvoy2rscgxbKd3IYcszOdUtfYCEYbCg3iIAFNXlWzdArewQXvvUl3G11bxuNNCWostKdgS-SlsnzK7htFK0BPFPNEb4bsNhwONxI3xgqkNLi9R_NieK7uP9xXct2NXHHx7ceKkAq6PZKvPvsI-GrrPptPoaxUj7HvrTqPStFoKROgzgqiQ8ZsLz72EDoZzIURVWwWb7yJh9ycbs3MCkK6szK7tB2AjmSqBQyXKzUliT2bRdL2QwccYN6mVRapmzSwHWkwCFtomEMOxUSFYKP4x75d9mzmQCOnpzEGXKIqGHX6pHjG-ipO3f2Rsv9JI3nEaQT8dBXYmHVDUEZHMfrNBgs-1s1dTu4RofdPhCq0a2OIiibkqdKgwATAlM_3kwOIBeqfgoUpoAYugAffrP62AagHp8yxAqgH4tixAqgHpr4bqAfMzrECqAfz0RuoB5bYG6gHqpuxAqgH_uixAqgHjs4bqAeT2BuoB_DgG6gH7paxAqgH_p6xAqgHr76xAqgH1ckbqAfZtrECqAeaBqgH_56xAqgH35-xAqgH-MKxAqgH-8KxAtgHANIIMwiAYRABGJ8DMgiKgoCAgICACDoPgECAwICAgICogAKog4AQSL39wTpYpKfV_tuwlQNgAbEJbMvc9OYt3iuACgGYCwHICwGADAGiDA8qCgoIjt-xApXisQKQAQGqDQJJTsgNAeoNEwj2ztX-27CVAxUfRp0JHR7YKwrwDQKIDgnYEwrQFQGYFgHKFgIKAPgWAYAXAbIXEBgBKgo0OTcwMjEyMjIxUAa6FwI4AaoYFwkAAAAAAOzzQBIKNDk3MDIxMjIyMRgBshgJEgLoWRguIgEA0BgBwhkCCAE&ae=1&gclid=EAIaIQobChMI3MnV_tuwlQMVH0adCR0e2CsKEAEYASAAEgJiAPD_BwE&num=1&cid=CAQShgIAEQoqgcgFa7keQiFpUncVuVFXQ9etbuFque9Qw-T-HqC_bfYLHnasCkRo96dZTQXXEpKuId02aPqhk0c8R_45Yar7xdG7MzQgBb-H6zLTX139xgiApqFH7L2hXQHct6bUpXVNAkoHwI5lAL2jNZmeHmIOHCNOCD1hbhNBXVHAeE2xlcIBkK605qAvTyuSAx2TihsRcj3CkoX0xT0P4sh-lGbbikEargRTwJgiOgqdQ6Sv6uXeznu6e-W-v2mXa64JRNnGWnTGEsAnZ61mrcFvTNAoXMwEJN0mOmvr25ouPxxPdDtnIvJGfCF-2Dg-zyJy6-03hEXnx_CXnG2OwVEhcuJbVmgCGAE&sig=AOD64_0EestC7GDPkhGCcx3tJDsVbbjidg&client=ca-pub-1056034821646296&rf=1&nb=7&adurl=https://leanpub.com/node-opcuabyexample-edition2024%3Fgad_source%3D5%26gad_campaignid%3D11016376298%26gclid%3DEAIaIQobChMI3MnV_tuwlQMVH0adCR0e2CsKEAEYASAAEgJiAPD_BwE
              - generic [ref=f3e24]:
                - link:
                  - /url: https://adclick.g.doubleclick.net/aclk?sa=l&ai=Cy-2N7aFEapyfK5-M9fwPnrCvUZPAwZV76ZzlubUT-r_XrecOEAEglZSZowFg5QKgAYnTgckCyAEJqQL06O3CzyWzPqgDAcgDywSqBKACT9DvArXQHhOYvoy2rscgxbKd3IYcszOdUtfYCEYbCg3iIAFNXlWzdArewQXvvUl3G11bxuNNCWostKdgS-SlsnzK7htFK0BPFPNEb4bsNhwONxI3xgqkNLi9R_NieK7uP9xXct2NXHHx7ceKkAq6PZKvPvsI-GrrPptPoaxUj7HvrTqPStFoKROgzgqiQ8ZsLz72EDoZzIURVWwWb7yJh9ycbs3MCkK6szK7tB2AjmSqBQyXKzUliT2bRdL2QwccYN6mVRapmzSwHWkwCFtomEMOxUSFYKP4x75d9mzmQCOnpzEGXKIqGHX6pHjG-ipO3f2Rsv9JI3nEaQT8dBXYmHVDUEZHMfrNBgs-1s1dTu4RofdPhCq0a2OIiibkqdKgwATAlM_3kwOIBeqfgoUpoAYugAffrP62AagHp8yxAqgH4tixAqgHpr4bqAfMzrECqAfz0RuoB5bYG6gHqpuxAqgH_uixAqgHjs4bqAeT2BuoB_DgG6gH7paxAqgH_p6xAqgHr76xAqgH1ckbqAfZtrECqAeaBqgH_56xAqgH35-xAqgH-MKxAqgH-8KxAtgHANIIMwiAYRABGJ8DMgiKgoCAgICACDoPgECAwICAgICogAKog4AQSL39wTpYpKfV_tuwlQNgAbEJbMvc9OYt3iuACgGYCwHICwGADAGiDA8qCgoIjt-xApXisQKQAQGqDQJJTsgNAeoNEwj2ztX-27CVAxUfRp0JHR7YKwrwDQKIDgnYEwrQFQGYFgHKFgIKAPgWAYAXAbIXEBgBKgo0OTcwMjEyMjIxUAa6FwI4AaoYFwkAAAAAAOzzQBIKNDk3MDIxMjIyMRgBshgJEgLoWRguIgEA0BgBwhkCCAE&ae=1&gclid=EAIaIQobChMI3MnV_tuwlQMVH0adCR0e2CsKEAEYASAAEgJiAPD_BwE&num=1&cid=CAQShgIAEQoqgcgFa7keQiFpUncVuVFXQ9etbuFque9Qw-T-HqC_bfYLHnasCkRo96dZTQXXEpKuId02aPqhk0c8R_45Yar7xdG7MzQgBb-H6zLTX139xgiApqFH7L2hXQHct6bUpXVNAkoHwI5lAL2jNZmeHmIOHCNOCD1hbhNBXVHAeE2xlcIBkK605qAvTyuSAx2TihsRcj3CkoX0xT0P4sh-lGbbikEargRTwJgiOgqdQ6Sv6uXeznu6e-W-v2mXa64JRNnGWnTGEsAnZ61mrcFvTNAoXMwEJN0mOmvr25ouPxxPdDtnIvJGfCF-2Dg-zyJy6-03hEXnx_CXnG2OwVEhcuJbVmgCGAE&sig=AOD64_0EestC7GDPkhGCcx3tJDsVbbjidg&client=ca-pub-1056034821646296&rf=1&nb=8&adurl=https://leanpub.com/node-opcuabyexample-edition2024%3Fgad_source%3D5%26gad_campaignid%3D11016376298%26gclid%3DEAIaIQobChMI3MnV_tuwlQMVH0adCR0e2CsKEAEYASAAEgJiAPD_BwE
                - link "sterfive" [ref=f3e26] [cursor=pointer]:
                  - /url: https://adclick.g.doubleclick.net/aclk?sa=l&ai=Cy-2N7aFEapyfK5-M9fwPnrCvUZPAwZV76ZzlubUT-r_XrecOEAEglZSZowFg5QKgAYnTgckCyAEJqQL06O3CzyWzPqgDAcgDywSqBKACT9DvArXQHhOYvoy2rscgxbKd3IYcszOdUtfYCEYbCg3iIAFNXlWzdArewQXvvUl3G11bxuNNCWostKdgS-SlsnzK7htFK0BPFPNEb4bsNhwONxI3xgqkNLi9R_NieK7uP9xXct2NXHHx7ceKkAq6PZKvPvsI-GrrPptPoaxUj7HvrTqPStFoKROgzgqiQ8ZsLz72EDoZzIURVWwWb7yJh9ycbs3MCkK6szK7tB2AjmSqBQyXKzUliT2bRdL2QwccYN6mVRapmzSwHWkwCFtomEMOxUSFYKP4x75d9mzmQCOnpzEGXKIqGHX6pHjG-ipO3f2Rsv9JI3nEaQT8dBXYmHVDUEZHMfrNBgs-1s1dTu4RofdPhCq0a2OIiibkqdKgwATAlM_3kwOIBeqfgoUpoAYugAffrP62AagHp8yxAqgH4tixAqgHpr4bqAfMzrECqAfz0RuoB5bYG6gHqpuxAqgH_uixAqgHjs4bqAeT2BuoB_DgG6gH7paxAqgH_p6xAqgHr76xAqgH1ckbqAfZtrECqAeaBqgH_56xAqgH35-xAqgH-MKxAqgH-8KxAtgHANIIMwiAYRABGJ8DMgiKgoCAgICACDoPgECAwICAgICogAKog4AQSL39wTpYpKfV_tuwlQNgAbEJbMvc9OYt3iuACgGYCwHICwGADAGiDA8qCgoIjt-xApXisQKQAQGqDQJJTsgNAeoNEwj2ztX-27CVAxUfRp0JHR7YKwrwDQKIDgnYEwrQFQGYFgHKFgIKAPgWAYAXAbIXEBgBKgo0OTcwMjEyMjIxUAa6FwI4AaoYFwkAAAAAAOzzQBIKNDk3MDIxMjIyMRgBshgJEgLoWRguIgEA0BgBwhkCCAE&ae=1&gclid=EAIaIQobChMI3MnV_tuwlQMVH0adCR0e2CsKEAEYASAAEgJiAPD_BwE&num=1&cid=CAQShgIAEQoqgcgFa7keQiFpUncVuVFXQ9etbuFque9Qw-T-HqC_bfYLHnasCkRo96dZTQXXEpKuId02aPqhk0c8R_45Yar7xdG7MzQgBb-H6zLTX139xgiApqFH7L2hXQHct6bUpXVNAkoHwI5lAL2jNZmeHmIOHCNOCD1hbhNBXVHAeE2xlcIBkK605qAvTyuSAx2TihsRcj3CkoX0xT0P4sh-lGbbikEargRTwJgiOgqdQ6Sv6uXeznu6e-W-v2mXa64JRNnGWnTGEsAnZ61mrcFvTNAoXMwEJN0mOmvr25ouPxxPdDtnIvJGfCF-2Dg-zyJy6-03hEXnx_CXnG2OwVEhcuJbVmgCGAE&sig=AOD64_0EestC7GDPkhGCcx3tJDsVbbjidg&client=ca-pub-1056034821646296&rf=1&nb=1&adurl=https://leanpub.com/node-opcuabyexample-edition2024%3Fgad_source%3D5%26gad_campaignid%3D11016376298%26gclid%3DEAIaIQobChMI3MnV_tuwlQMVH0adCR0e2CsKEAEYASAAEgJiAPD_BwE
                - link "Open" [ref=f3e28] [cursor=pointer]:
                  - /url: https://adclick.g.doubleclick.net/aclk?sa=l&ai=Cy-2N7aFEapyfK5-M9fwPnrCvUZPAwZV76ZzlubUT-r_XrecOEAEglZSZowFg5QKgAYnTgckCyAEJqQL06O3CzyWzPqgDAcgDywSqBKACT9DvArXQHhOYvoy2rscgxbKd3IYcszOdUtfYCEYbCg3iIAFNXlWzdArewQXvvUl3G11bxuNNCWostKdgS-SlsnzK7htFK0BPFPNEb4bsNhwONxI3xgqkNLi9R_NieK7uP9xXct2NXHHx7ceKkAq6PZKvPvsI-GrrPptPoaxUj7HvrTqPStFoKROgzgqiQ8ZsLz72EDoZzIURVWwWb7yJh9ycbs3MCkK6szK7tB2AjmSqBQyXKzUliT2bRdL2QwccYN6mVRapmzSwHWkwCFtomEMOxUSFYKP4x75d9mzmQCOnpzEGXKIqGHX6pHjG-ipO3f2Rsv9JI3nEaQT8dBXYmHVDUEZHMfrNBgs-1s1dTu4RofdPhCq0a2OIiibkqdKgwATAlM_3kwOIBeqfgoUpoAYugAffrP62AagHp8yxAqgH4tixAqgHpr4bqAfMzrECqAfz0RuoB5bYG6gHqpuxAqgH_uixAqgHjs4bqAeT2BuoB_DgG6gH7paxAqgH_p6xAqgHr76xAqgH1ckbqAfZtrECqAeaBqgH_56xAqgH35-xAqgH-MKxAqgH-8KxAtgHANIIMwiAYRABGJ8DMgiKgoCAgICACDoPgECAwICAgICogAKog4AQSL39wTpYpKfV_tuwlQNgAbEJbMvc9OYt3iuACgGYCwHICwGADAGiDA8qCgoIjt-xApXisQKQAQGqDQJJTsgNAeoNEwj2ztX-27CVAxUfRp0JHR7YKwrwDQKIDgnYEwrQFQGYFgHKFgIKAPgWAYAXAbIXEBgBKgo0OTcwMjEyMjIxUAa6FwI4AaoYFwkAAAAAAOzzQBIKNDk3MDIxMjIyMRgBshgJEgLoWRguIgEA0BgBwhkCCAE&ae=1&gclid=EAIaIQobChMI3MnV_tuwlQMVH0adCR0e2CsKEAEYASAAEgJiAPD_BwE&num=1&cid=CAQShgIAEQoqgcgFa7keQiFpUncVuVFXQ9etbuFque9Qw-T-HqC_bfYLHnasCkRo96dZTQXXEpKuId02aPqhk0c8R_45Yar7xdG7MzQgBb-H6zLTX139xgiApqFH7L2hXQHct6bUpXVNAkoHwI5lAL2jNZmeHmIOHCNOCD1hbhNBXVHAeE2xlcIBkK605qAvTyuSAx2TihsRcj3CkoX0xT0P4sh-lGbbikEargRTwJgiOgqdQ6Sv6uXeznu6e-W-v2mXa64JRNnGWnTGEsAnZ61mrcFvTNAoXMwEJN0mOmvr25ouPxxPdDtnIvJGfCF-2Dg-zyJy6-03hEXnx_CXnG2OwVEhcuJbVmgCGAE&sig=AOD64_0EestC7GDPkhGCcx3tJDsVbbjidg&client=ca-pub-1056034821646296&rf=1&nb=8&adurl=https://leanpub.com/node-opcuabyexample-edition2024%3Fgad_source%3D5%26gad_campaignid%3D11016376298%26gclid%3DEAIaIQobChMI3MnV_tuwlQMVH0adCR0e2CsKEAEYASAAEgJiAPD_BwE
                - link [ref=f3e29] [cursor=pointer]:
                  - /url: https://adclick.g.doubleclick.net/aclk?sa=l&ai=Cy-2N7aFEapyfK5-M9fwPnrCvUZPAwZV76ZzlubUT-r_XrecOEAEglZSZowFg5QKgAYnTgckCyAEJqQL06O3CzyWzPqgDAcgDywSqBKACT9DvArXQHhOYvoy2rscgxbKd3IYcszOdUtfYCEYbCg3iIAFNXlWzdArewQXvvUl3G11bxuNNCWostKdgS-SlsnzK7htFK0BPFPNEb4bsNhwONxI3xgqkNLi9R_NieK7uP9xXct2NXHHx7ceKkAq6PZKvPvsI-GrrPptPoaxUj7HvrTqPStFoKROgzgqiQ8ZsLz72EDoZzIURVWwWb7yJh9ycbs3MCkK6szK7tB2AjmSqBQyXKzUliT2bRdL2QwccYN6mVRapmzSwHWkwCFtomEMOxUSFYKP4x75d9mzmQCOnpzEGXKIqGHX6pHjG-ipO3f2Rsv9JI3nEaQT8dBXYmHVDUEZHMfrNBgs-1s1dTu4RofdPhCq0a2OIiibkqdKgwATAlM_3kwOIBeqfgoUpoAYugAffrP62AagHp8yxAqgH4tixAqgHpr4bqAfMzrECqAfz0RuoB5bYG6gHqpuxAqgH_uixAqgHjs4bqAeT2BuoB_DgG6gH7paxAqgH_p6xAqgHr76xAqgH1ckbqAfZtrECqAeaBqgH_56xAqgH35-xAqgH-MKxAqgH-8KxAtgHANIIMwiAYRABGJ8DMgiKgoCAgICACDoPgECAwICAgICogAKog4AQSL39wTpYpKfV_tuwlQNgAbEJbMvc9OYt3iuACgGYCwHICwGADAGiDA8qCgoIjt-xApXisQKQAQGqDQJJTsgNAeoNEwj2ztX-27CVAxUfRp0JHR7YKwrwDQKIDgnYEwrQFQGYFgHKFgIKAPgWAYAXAbIXEBgBKgo0OTcwMjEyMjIxUAa6FwI4AaoYFwkAAAAAAOzzQBIKNDk3MDIxMjIyMRgBshgJEgLoWRguIgEA0BgBwhkCCAE&ae=1&gclid=EAIaIQobChMI3MnV_tuwlQMVH0adCR0e2CsKEAEYASAAEgJiAPD_BwE&num=1&cid=CAQShgIAEQoqgcgFa7keQiFpUncVuVFXQ9etbuFque9Qw-T-HqC_bfYLHnasCkRo96dZTQXXEpKuId02aPqhk0c8R_45Yar7xdG7MzQgBb-H6zLTX139xgiApqFH7L2hXQHct6bUpXVNAkoHwI5lAL2jNZmeHmIOHCNOCD1hbhNBXVHAeE2xlcIBkK605qAvTyuSAx2TihsRcj3CkoX0xT0P4sh-lGbbikEargRTwJgiOgqdQ6Sv6uXeznu6e-W-v2mXa64JRNnGWnTGEsAnZ61mrcFvTNAoXMwEJN0mOmvr25ouPxxPdDtnIvJGfCF-2Dg-zyJy6-03hEXnx_CXnG2OwVEhcuJbVmgCGAE&sig=AOD64_0EestC7GDPkhGCcx3tJDsVbbjidg&client=ca-pub-1056034821646296&rf=1&nb=8&adurl=https://leanpub.com/node-opcuabyexample-edition2024%3Fgad_source%3D5%26gad_campaignid%3D11016376298%26gclid%3DEAIaIQobChMI3MnV_tuwlQMVH0adCR0e2CsKEAEYASAAEgJiAPD_BwE
                  - generic [ref=f3e31]:
                    - img [ref=f3e32]
                    - img [ref=f3e34]
          - img [ref=f3e42] [cursor=pointer]
          - button [ref=f3e44] [cursor=pointer]:
            - img [ref=f3e45]
          - iframe
    - paragraph [ref=e37]:
      - text: Do you enjoy this platform? ❤️
      - link "Buy us a coffee" [ref=e38] [cursor=pointer]:
        - /url: https://www.buymeacoffee.com/expandtesting
    - generic [ref=e39]:
      - insertion [ref=e41]:
        - generic [ref=e44]:
          - heading "These are topics related to the article that might interest you" [level=2] [ref=e46]: Discover more
          - link "REST API Examples" [ref=e47] [cursor=pointer]:
            - generic "REST API Examples" [ref=e48]
            - img [ref=e50]
          - link "Test Case Templates" [ref=e52] [cursor=pointer]:
            - generic "Test Case Templates" [ref=e53]
            - img [ref=e55]
          - link "Playwright Automation Course" [ref=e57] [cursor=pointer]:
            - generic "Playwright Automation Course" [ref=e58]
            - img [ref=e60]
          - link "Postman Tutorial Guides" [ref=e62] [cursor=pointer]:
            - generic "Postman Tutorial Guides" [ref=e63]
            - img [ref=e65]
          - link "Development Tools" [ref=e67] [cursor=pointer]:
            - generic "Development Tools" [ref=e68]
            - img [ref=e70]
          - link "Programming" [ref=e72] [cursor=pointer]:
            - generic "Programming" [ref=e73]
            - img [ref=e75]
          - link "UI Testing Examples" [ref=e77] [cursor=pointer]:
            - generic "UI Testing Examples" [ref=e78]
            - img [ref=e80]
          - link "Computers & Electronics" [ref=e82] [cursor=pointer]:
            - generic "Computers & Electronics" [ref=e83]
            - img [ref=e85]
      - generic [ref=e87]:
        - generic [ref=e89]:
          - navigation "breadcrumb mb-2" [ref=e90]:
            - list [ref=e91]:
              - listitem [ref=e92]:
                - link "Home" [ref=e93] [cursor=pointer]:
                  - /url: /
              - listitem [ref=e94]: / Inputs
          - heading "Web inputs page for Automation Testing Practice" [level=1] [ref=e95]
          - generic [ref=e96]:
            - paragraph [ref=e97]:
              - text: Web inputs refer to the data or information provided by users through various input mechanisms on a website.
              - text: Web inputs allow users to interact with web pages, submit forms, and provide data for processing.
              - link "Automation practice website" [ref=e98] [cursor=pointer]:
                - img [ref=e100]
                - text: Automation practice website
            - generic [ref=e102]:
              - button "Display Inputs" [ref=e103] [cursor=pointer]
              - button "Clear Inputs" [ref=e104] [cursor=pointer]
          - generic [ref=e106]:
            - generic [ref=e108]:
              - generic [ref=e109]: "Input: Number"
              - 'spinbutton "Input: Number" [ref=e110]'
            - generic [ref=e112]:
              - generic [ref=e113]: "Input: Text"
              - 'textbox "Input: Text" [ref=e114]'
            - generic [ref=e116]:
              - generic [ref=e117]: "Input: Password"
              - 'textbox "Input: Password" [ref=e118]'
            - generic [ref=e120]:
              - generic [ref=e121]: "Input: Date"
              - 'textbox "Input: Date" [ref=e122]'
        - insertion [ref=e125]:
          - generic [ref=e128]:
            - heading "These are topics related to the article that might interest you" [level=2] [ref=e130]: Discover more
            - link "Training & Certification" [ref=e131] [cursor=pointer]:
              - generic "Training & Certification" [ref=e132]
              - img [ref=e134]
            - link "Reference" [ref=e136] [cursor=pointer]:
              - generic "Reference" [ref=e137]
              - img [ref=e139]
            - link "Internet & Telecom" [ref=e141] [cursor=pointer]:
              - generic "Internet & Telecom" [ref=e142]
              - img [ref=e144]
            - link "Data Management" [ref=e146] [cursor=pointer]:
              - generic "Data Management" [ref=e147]
              - img [ref=e149]
            - link "Dictionaries & Encyclopedias" [ref=e151] [cursor=pointer]:
              - generic "Dictionaries & Encyclopedias" [ref=e152]
              - img [ref=e154]
            - link "Test Case Management" [ref=e156] [cursor=pointer]:
              - generic "Test Case Management" [ref=e157]
              - img [ref=e159]
            - link "Factory Automation" [ref=e161] [cursor=pointer]:
              - generic "Factory Automation" [ref=e162]
              - img [ref=e164]
            - link "IT & Technical Jobs" [ref=e166] [cursor=pointer]:
              - generic "IT & Technical Jobs" [ref=e167]
              - img [ref=e169]
  - contentinfo [ref=e171]:
    - generic [ref=e176]:
      - heading "Practice Test Automation WebSite for Web UI and Rest API" [level=4] [ref=e177]
      - paragraph [ref=e178]:
        - text: "Version: e64cd80e | Copyright"
        - link "Expand Testing" [ref=e179] [cursor=pointer]:
          - /url: https://expandtesting.com/
        - text: "2026"
  - img [ref=e181] [cursor=pointer]
  - generic [ref=e183]:
    - generic [ref=e184] [cursor=pointer]:
      - img [ref=e186]
      - link "Go to shopping options for Software" [ref=e188]: Software
    - button "Close shopping anchor" [ref=e189]
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