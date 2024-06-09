import { Page } from "@playwright/test";
import {siteData} from "../../../data/common/login"

export class LoginPageDemo{
    private readonly page:Page;
    private readonly usernameInput ='input[id="txtUsername"]';
    private readonly passwordInput ='input[id="txtPassword"]';
    private readonly loginButton ='input[id="btSignIn"]';
    private readonly errorMessage = 'span[id="result"]';
    constructor(page: Page) {
        this.page = page;
    }

    async goto(): Promise<void> {
        await this.page.goto(siteData.site);
        await this.page.waitForLoadState('load');
      }

      async login(username: string, password: string): Promise<void> {
        await this.page.fill(this.usernameInput, username);
        await this.page.fill(this.passwordInput, password);
        await this.page.click(this.loginButton);
      }

      async verifyErrorMessage(): Promise<void> {
        await this.page.waitForSelector(this.errorMessage);
      }
    
}