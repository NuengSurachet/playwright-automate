import { test, expect } from "@playwright/test";  
import dataSetting from "../data/common/TestSetting.json";
import { LoginPage } from "../src/pages/common/login-page";

const data = dataSetting.Login;

test("Setup Permission Report", async ({ page }) => {
    await page.pause();
    const loginPage = new LoginPage(page);
    await loginPage.goto(data.site);
    await loginPage.login(data.username, data.password);
    await page
    
});
