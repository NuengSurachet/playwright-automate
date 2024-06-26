import { test, expect } from '@playwright/test';
import dataSetting from "../../data/common/TestSetting.json";
import { LoginPage } from "../../src/pages/common/login-page";
import { hash } from 'crypto';


test.describe("Setup Project Budget", async () =>{
  let page;
  let currentUrl = "";
  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto(dataSetting.Login.site);
    await page.waitForSelector("#inputPassword");
    currentUrl=page.url();
  });
test('Test Add Budget Group', async () => {
  const loginPage = new LoginPage(page);
  await loginPage.goto(dataSetting.Login.site);
  await loginPage.loginByUserType('DEV');
  await page.getByRole('link', { name: 'ระบบควบคุมงบประมาณ' }).click();

  await page.locator('a').filter({ hasText: 'Cost Control' }).first().click();

  await page.getByRole('link', { name: ' Setup Project Budget' }).click();
  await page.getByRole('button', { name: ' Add Budget Group' }).click();
  await page.locator('#bg_groupname').click();
  await page.locator('#bg_groupname').fill('Icon M-Test2');
  await page.locator('#bg_costcontrol').click();
 
  await page.locator('#bg_costcontrol').click();
  await page.locator('#bg_costcontrol').fill('1,000,0000');
  // await page.locator('#bg_groupcontrol').selectOption('N');
  await page.locator('#bg_groupcontrol').selectOption('Y');
  await page.selectOption('select[name="bg_permission"]', { index: 1 });
  await page.locator('select[name="status"]').selectOption('Y');
  await page.locator('input[name="date_start"]').fill('2024-06-01');
  await page.locator('input[name="date_end"]').fill('2024-06-01');
  // if(true)
  await page.selectOption('#bg_group_type', { index: 0 });
  await page.selectOption('#bg_group_type_allocation', { index: 1 });

  await page.locator('#freezelimit').click();
  await page.locator('#freezelimit').press('ControlOrMeta+a');
  await page.locator('#freezelimit').fill('1');

  await page.locator('#save_budget').click();

});

test('Test Cost Center', async({page})=>{
  const loginPage = new LoginPage(page);
  await loginPage.goto(dataSetting.Login.site);
  await loginPage.loginByUserType('DEV');
  await page.getByRole('link', { name: 'ระบบควบคุมงบประมาณ' }).click();
  await page.locator('a').filter({ hasText: 'Cost Control' }).first().click();
  await page.getByRole('link', { name: ' Setup Project Budget' }).click();
  // await page.getByRole('link', { name: ' Setup Project Budget' }).click();
  await page.getByPlaceholder('Type to filter...').click();
  await page.getByPlaceholder('Type to filter...').click();
  await page.getByPlaceholder('Type to filter...').fill('Icon M-Test2');
  await page.getByRole('link', { name: 'SELECT' }).first().click();
  await page.locator('#group_lv_modal').click();
  await page.getByText('ADD Rows').click();
  await page.locator('//*[@id="modal_costii"]/div[3]/div/table/tbody/tr/td[5]/a').first().click();
  await page.locator('#costcode').getByRole('button', { name: 'Close' }).click();
  await page.getByText('Save Group', { exact: true }).click();

  await page.locator('body > div.sweet-alert.showSweetAlert.visible > div.sa-button-container > div > button').click()
  await page.locator('#group_lv > div > div > div.modal-footer > button').click();


  await page.getByRole('link', { name: ' Setup Project Budget' }).click();
  // await page.getByRole('link', { name: ' Setup Project Budget' }).click();
  await page.getByPlaceholder('Type to filter...').click();
  await page.getByPlaceholder('Type to filter...').click();
  await page.getByPlaceholder('Type to filter...').fill('Icon M-Test2');
  await page.getByRole('link', { name: 'SELECT' }).first().click();

  await page.locator('a[title="Add Cost Center"]').first().click();
  await page.locator('#addcostcode').click();
  await page.locator('//*[@id="modal_costii"]/div[3]/div/table/tbody/tr[1]/td[5]/a').click();
  await page.locator('button').filter({hasText:'Close'}).first().click();
  await page.locator('#save_budget_lv1').click();
 await page.locator('button[class="confirm"]').click();
 await page.locator('button').filter({hasText:'Close'}).first().click();


  await page.locator('#group_lv_modal1').click();
  await page.locator('#addcostcode').click();
  await page.locator('//*[@id="modal_costii"]/div[3]/div/table/tbody/tr[1]/td[5]/a').click();
  await page.locator('button').filter({hasText:'Close'}).first().click();
  await page.locator('#save_budget_lv1').click();
  await page.locator('button[class="confirm"]').click();
  await page.locator('button').filter({hasText:'Close'}).first().click();

  await page.locator('a[title="Add Cost Center"]').nth(1).click();
  await page.locator('#addcostcode').click();
  await page.locator('//*[@id="modal_costii"]/div[3]/div/table/tbody/tr[1]/td[5]/a').click();
  await page.locator('button').filter({hasText:'Close'}).first().click();
  await page.locator('#save_budget_lv2').click();
 await page.locator('button[class="confirm"]').click();
 await page.locator('button').filter({hasText:'Close'}).first().click();


})
});


