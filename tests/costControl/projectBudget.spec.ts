import { test, expect } from '@playwright/test';
import dataSetting from "../../data/common/TestSetting.json";
import { LoginPage } from "../../src/pages/common/login-page";


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
  await page.locator('#bg_groupname').fill('Icon M-Test1');
  await page.locator('#bg_costcontrol').click();
 
  await page.locator('#bg_costcontrol').click();
  await page.locator('#bg_costcontrol').fill('1,000,0000');
  // await page.locator('#bg_groupcontrol').selectOption('N');
  await page.locator('#bg_groupcontrol').selectOption('Y');
  await page.selectOption('select[name="bg_permission"]', { index: 1 });
  // await page.locator('select[name="bg_permission"]').selectOption('PJ01');

  // await page.locator('select[name="status"]').selectOption('N');
  await page.locator('select[name="status"]').selectOption('Y');
  

  await page.locator('input[name="date_start"]').fill('2024-06-01');
  await page.locator('input[name="date_end"]').fill('2024-06-01');


  // if(true)
  await page.locator('#bg_group_type').selectOption('H');
 // else await page.locator('#bg_group_type').selectOption('H');

// if(true)
  // await page.locator('#bg_group_type_allocation').selectOption('H');
 //else  
  //await page.locator('#bg_group_type_allocation').selectOption('D');
  await page.selectOption('#bg_group_type_allocation', { index: 1 });

  await page.locator('#freezelimit').click();
  await page.locator('#freezelimit').press('ControlOrMeta+a');
  await page.locator('#freezelimit').fill('1');

  await page.locator('#save_budget').click();

});

test('Test Cost Center', async()=>{
  const loginPage = new LoginPage(page);
  await loginPage.goto(dataSetting.Login.site);
  await loginPage.loginByUserType('DEV');
  await page.getByRole('link', { name: 'ระบบควบคุมงบประมาณ' }).click();
  await page.locator('a').filter({ hasText: 'Cost Control' }).first().click();
  await page.getByRole('link', { name: ' Setup Project Budget' }).click();
  // await page.getByRole('link', { name: ' Setup Project Budget' }).click();
  await page.getByPlaceholder('Type to filter...').click();
  await page.getByPlaceholder('Type to filter...').click();
  await page.getByPlaceholder('Type to filter...').fill('Icon M-Test1');
  await page.getByRole('link', { name: 'SELECT' }).click();
  await page.locator('#group_lv_modal').click();
  await page.getByText('ADD Rows').click();
  try {
    await page.locator('input[type="search"]').click();
    await page.locator('input[type="search"]').fill('ค่าใช้จ่ายในการบริหาร');
    await page.locator('//*[@id="modal_costii"]/div[3]/div/table/tbody/tr/td[5]/a').click();
  } catch (error) {
   
   await page.locator('input[name="search"]').click();
   await page.locator('input[name="search"]').fill('แผนกก่อสร้าง');
   await page.getByRole('button', { name: '' }).click();
    await page.locator('#get_search').click({force: true});  
    await page.locator('//*[@id="modal_costii"]/div[3]/div/table/tbody/tr/td[5]/a').click();
    
  }

  await page.locator('#costcode').getByRole('button', { name: 'Close' }).click();
  await page.getByText('Save Group', { exact: true }).click();

  await page.locator('body > div.sweet-alert.showSweetAlert.visible > div.sa-button-container > div > button').click()
  await page.locator('#group_lv > div > div > div.modal-footer > button').click();

  await page.getByTitle('Add Cost Center').click();
  await page.getByText('ADD Rows').click();
  try {
    await page.locator('input[type="search"]').click();
    await page.locator('input[type="search"]').fill('ค่าใช้จ่ายในการบริหาร');
    await page.locator('//*[@id="modal_costii"]/div[3]/div/table/tbody/tr/td[5]/a').click();
  } catch (error) {
   
    await page.locator('input[name="search"]').click().fill('ฝ่ายบริหาร')
    await page.locator('#get_search').click({force: true});  
    await page.locator('//*[@id="modal_costii"]/div[3]/div/table/tbody/tr/td[5]/a').click();
    
  }

  await page.locator('#costcode').getByRole('button', { name: 'Close' }).click();
  await page.getByText('Save LV 1').click();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.locator('#group_lv > div > div > div.modal-footer > button').click();

})
});


