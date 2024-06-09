import {  chromium, expect, test } from '@playwright/test';
import { LoginPageDemo } from '../../src/pages/common/loginDemo-page';
import {siteData,userData} from '../../data/common/login';
import { readExcelFile } from '../../src/utils/read-excel';  //'./utils/excelUtils';

test.describe('Login Demo Tests', async () => {

    test('Successful login with valid credentials', async ({page}) => {
        const loginPage = new LoginPageDemo(page);
        await loginPage.goto();
        await loginPage.login(userData.Username, userData.password);
        await expect(page).not.toHaveURL(siteData.site);
        await page.waitForTimeout(10000)
      });

      test('Unsuccessful login with invalid credentials', async ({page}) => {
       
        const loginPage = new LoginPageDemo(page);
        await loginPage.goto();
        await loginPage.login('invalid-username', 'invalid-password');
        await loginPage.verifyErrorMessage();
        await page.waitForTimeout(10000)

        
      });

});