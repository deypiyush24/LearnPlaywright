import { Page, Locator,expect } from "@playwright/test";
export class PageOperation {
    private readonly primaryButton: Locator;
    private readonly toggleButton: Locator;
    private readonly homeLink: Locator;
    private readonly productLink: Locator;
    private readonly checkBox: Locator;
    constructor(page: Page) {
        this.primaryButton = page.getByRole("button", {
            name: "Primary Action",
            exact: true,
        });
        this.toggleButton = page.getByRole("button", {
            name: "Toggle Button",
            exact: true,
        });
        this.homeLink = page.getByRole("link", { name: "Home", exact: true });
        this.productLink = page.getByRole("link", {
            name: "Products",
            exact: true,
        });
        this.checkBox = page.getByRole("checkbox",{name:"Accept terms"});
    }

    async clickTheCheckBox(): Promise<void>
    {
        expect(this.checkBox).toBeEnabled({timeout:5000});
        await this.checkBox.check();
    }
}
