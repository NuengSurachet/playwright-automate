import { test, expect } from '@playwright/test';

import { LoginPage } from "../../src/pages/common/login-page";
import dataSetting from "../../data/common/TestSetting.json"; 
import { setupUser } from '../../data/generalSettings/setupUser';
const data = dataSetting.Login;

test('test', async ({ page }) => {
  
  const loginPage = new LoginPage(page);
  await loginPage.goto(data.site);
  await loginPage.login(data.username, data.password);
 
  await page.getByRole("link", { name: "ระบบจัดการข้อมูลกลาง" }).click();
  await page.locator("a").filter({ hasText: "Genaral Settings" }).click();
  await page.getByRole('link', { name: ' Setup User' }).click();
  await page.locator('#ccode_new').click();
  await page.locator('#ccode_new').fill('tester2');
  await page.getByPlaceholder('First Name - Last Name').click();
  await page.getByPlaceholder('First Name - Last Name').fill(setupUser.firstName);
  await page.getByRole('button', { name: '' }).click();
  await page.getByLabel('Change Password').getByLabel('Filter:').click();
  await page.getByLabel('Change Password').getByLabel('Filter:').fill('DCEO');
  
  await page.locator("button").filter({hasText:"SELECT"}).click();

  await page.getByPlaceholder('E-Mail').click(); 
  await page.getByPlaceholder('E-Mail').fill(setupUser.email);
  await page.getByPlaceholder('-999-9999').click();
  await page.getByPlaceholder('-999-9999').fill(setupUser.phone);
  await page.locator('#user_type').selectOption('admin');
  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').fill(setupUser.username);
  await page.getByRole('textbox', { name: 'New Password' }).click();
  await page.getByRole('textbox', { name: 'New Password' }).fill(setupUser.password);
  await page.locator('#license_S').check();
  await page.getByRole('button', { name: ' Save' }).click();
  //await page.getByRole('button', { name: 'OK' }).click();
});