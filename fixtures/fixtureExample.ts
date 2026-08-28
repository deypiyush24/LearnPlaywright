import{test as base,expect,Page} from "@playwright/test";

/*
A Blueprint (TypeScript Type): It is a custom contract or blueprint that tells TypeScript what custom fixtures your tests can request and use.

Breakdown of Each Item:

adminPage: Page; — Declares that your test can request a pre-configured adminPage (an instance of a Playwright Page object, such as a browser tab logged in as an Admin).

testData: { id: string; role: string }; — Declares that your test can request a custom data object containing an id and a role (both of which must be text values).

Why It Is Useful:

Auto-complete: When you write your tests, your code editor (like VS Code) knows these items exist and suggests them automatically.

Error Prevention: If you misspell a fixture name or pass the wrong data type, TypeScript warns you immediately before running the tests.
 */

// Here we Define type what should be type of Custom Fixture like string
type MyCustomFixture =
{
    adminPage :Page;
    testData: {
        id: string; 
        role:string;
    }; // It's More like POJO Class 

}

export const test = base.extend<MyCustomFixture>;