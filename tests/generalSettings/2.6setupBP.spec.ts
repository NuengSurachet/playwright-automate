import { test, expect } from "@playwright/test";
import { LoginPage } from "../../src/pages/common/login-page";
import dataSetting from "../../data/common/TestSetting.json";
import BusinessPartnerGroup ,{BusinessPartner}  from "../../data/generalSettings/setupBP"
const data = dataSetting.Login;

test.describe("Setup Business Partner", () => {


  let page;
  let currentUrl = "";
  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto(data.site);
    await page.waitForSelector("#inputPassword");
    currentUrl=page.url();
  });


  test("Test Setup Business Partner Group" , async () => {
   // test.setTimeout(6000);
    await page.pause();

    const loginPage = new LoginPage(page);
    await loginPage.goto(data.site);
    await loginPage.login(data.username, data.password);
    await page
      .getByRole("link", { name: "ระบบจัดการข้อมูลกลาง" })
      .click({ force: true });
    await expect(page).not.toHaveURL(data.site + "panel/office");
    await page.waitForLoadState();
    await page.locator('a').filter({ hasText: 'Business Partner' }).first().click();
    await page.getByRole('link', { name: ' Setup Business Partner Group' }).click();
    await page.waitForLoadState();

    await page.getByRole('button', { name: ' Add' }).click();

    await page.locator('#vendor_code').click();
    await page.locator('#vendor_code').fill(BusinessPartnerGroup.BPGroupCode);
    await page.locator('#vendor_name').click();
    await page.locator('#vendor_name').fill(BusinessPartnerGroup.BPGroupName);
    await page.getByRole('radio', { name: BusinessPartnerGroup.BPGroupType }).check();
    await page.locator('#acc_code').click();
    await page.getByRole('button', { name: '' }).click();
    await page.locator('#DataTables_Table_2_filter').getByLabel('Filter:').click();
    await page.locator('#DataTables_Table_2_filter').getByLabel('Filter:').fill(BusinessPartnerGroup.ChartofAccount);
    await page.locator('#DataTables_Table_2_filter').getByLabel('Filter:').press('Enter');
    await page.getByText('SELECT', { exact: true }).click();

    if(BusinessPartnerGroup.Status==="Active")
    await page.getByRole('radio', { name: 'Active', exact: true }).check();
    else
    await page.getByRole('radio', { name: 'Inactive' }).check();
  
    await page.locator('#petty_cash_vg').selectOption(BusinessPartnerGroup.SubType);
    // await page.locator('#frompost div').filter({ hasText: 'Sub Type' }).nth(1).click();
    // await page.locator('#petty_cash_vg').selectOption('A');
    // await page.locator('#petty_cash_vg').selectOption('SAP');
    // await page.locator('#petty_cash_vg').selectOption('A');
    // await page.locator('#petty_cash_vg').selectOption('P');
    await page.locator('#save_vg').click();
    await page.waitForLoadState()
    const res = await page
        .locator("body > div.sweet-alert.showSweetAlert.visible > h2")
        .textContent();
      console.log(res);
      if (res === "Update SAP Complete") {
        await page
          .locator(
            "body > div.sweet-alert.showSweetAlert.visible > div.sa-button-container > div > button"
          )
          .click();
        await page.waitForLoadState();
      }

       

  });

  test("Test Setup Business Partner" , async () => {
    //test.setTimeout(6000);
    await page.pause();


await page.getByRole('link', { name: ' Setup Business Partner', exact: true }).click({ force: true });



await page.getByRole('link', { name: ' Add' }).click({ force: true });

await page.locator('#vender_code').click({ force: true });
await page.locator('#vender_code').fill(BusinessPartner.BPCode);
await page.locator('#vender_name').click();
await page.locator('#vender_name').fill(BusinessPartner.BPName);
await page.locator('#bt_type').selectOption(BusinessPartner.BPType1);
await page.locator('#cmpprivate').selectOption(BusinessPartner.BPType2);
await page.locator('#cardfnme').click();
await page.locator('#cardfnme').fill(BusinessPartner["BPName(EN)"]);
await page.getByPlaceholder('กรอกไม่เกิน 13').click();
await page.getByPlaceholder('กรอกไม่เกิน 13').fill(BusinessPartner.FederalTaxID);
await page.getByRole('button', { name: '' }).click();
await page.getByLabel('Filter:').click();
await page.getByLabel('Filter:').fill(BusinessPartner.BPGroup);
await page.getByLabel('Filter:').press('Enter');
await page.getByText('SELECT', { exact: true }).click();

await page.getByRole('link', { name: 'Contact Persons' }).click({ force: true });
await page.locator('#bottom-tab2').getByText('Contact Persons').click({ force: true });
await page.locator('input[name="cp_name\\[\\]"]').click({ force: true });
await page.locator('input[name="cp_name\\[\\]"]').fill(BusinessPartner.ContactPersons.ContactID);
await page.locator('input[name="cp_first_name\\[\\]"]').click({ force: true });
await page.locator('input[name="cp_first_name\\[\\]"]').fill(BusinessPartner.ContactPersons.FirstName);
await page.locator('input[name="cp_last_name\\[\\]"]').click({ force: true });
await page.locator('input[name="cp_last_name\\[\\]"]').fill(BusinessPartner.ContactPersons.LastName);
await page.locator('input[name="cp_position\\[\\]"]').click({ force: true });
await page.locator('input[name="cp_position\\[\\]"]').fill(BusinessPartner.ContactPersons.Position);
await page.locator('input[name="cp_tel1\\[\\]"]').click({ force: true });
await page.locator('input[name="cp_tel1\\[\\]"]').fill(BusinessPartner.ContactPersons.Telephone1);


await page.getByRole('link', { name: 'Address' }).click({ force: true });
await page.locator('//*[@id="bottom-tab3"]/div/div[5]/div/a').click();
const cellContent = await page.locator('//*[@id="add_row_s"]/tr/td[1]').textContent();
if(cellContent!=="1"){
  await page.locator('//*[@id="bottom-tab3"]/div/div[5]/div/a').first().click({ force: true });
}

await page.locator('.content-wrapper').click();
await page.locator('body').press('ControlOrMeta+s');

await page.locator('input[name="add_address\\[\\]"]').click({ force: true });
await page.locator('input[name="add_address\\[\\]"]').fill(BusinessPartner.Address.BranchID);
await page.locator('input[name="add_address_name\\[\\]"]').click({ force: true });
await page.locator('input[name="add_address_name\\[\\]"]').fill(BusinessPartner.Address.BranchName);
await page.locator('input[name="add_street\\[\\]"]').click({ force: true });
await page.locator('input[name="add_street\\[\\]"]').fill(BusinessPartner.Address.StreetPOBox);
await page.locator('input[name="add_block\\[\\]"]').click({ force: true });
await page.locator('input[name="add_block\\[\\]"]').fill(BusinessPartner.Address.Block);
await page.locator('input[name="add_city\\[\\]"]').click({ force: true });
await page.locator('input[name="add_city\\[\\]"]').fill(BusinessPartner.Address.City);
await page.locator('input[name="add_zipcode\\[\\]"]').click({ force: true });
await page.locator('input[name="add_zipcode\\[\\]"]').fill(BusinessPartner.Address.ZipCode);

await page.getByRole('link', { name: 'Payment Terms' }).click();
await page.locator('#bottom-tab4').getByRole('button', { name: '' }).click({ force: true });
await page.locator('#open_id').press('Tab');
await page.locator('#open_id').getByLabel('Close').press('Tab');
await page.locator('#DataTables_Table_1_filter').getByLabel('Filter:').fill(BusinessPartner.PaymentTerms.PaymentTermsCode);
await page.locator('#DataTables_Table_1_filter').getByLabel('Filter:').press('Enter');
await page.waitForSelector('//*[@id="DataTables_Table_1"]/tbody/tr/td[7]/button');
await page.locator('//*[@id="DataTables_Table_1"]/tbody/tr/td[7]/button').first().click({ force: true });
await page.getByRole('button', { name: ' Bank' }).click({ force: true });
await page.locator('//*[@id="basiccc_b_filter"]/label/input').fill(BusinessPartner.PaymentTerms.BankCode);
await page.locator('//*[@id="basiccc_b"]/tbody/tr/td[5]/button').first().click({ force: true });
await page.locator('//*[@id="open_bank"]/div/div/div[1]/button/span').first().click({ force: true });
await page.locator('input[name="pt_account\\[\\]"]').click();
await page.locator('input[name="pt_account\\[\\]"]').fill(BusinessPartner.PaymentTerms.BankAccount);

await page.locator('input[name="pt_bank_account_name\\[\\]"]').click();
await page.locator('input[name="pt_bank_account_name\\[\\]"]').fill(BusinessPartner.PaymentTerms.BankAccountName);
// await page.locator('input[name="pt_bic_swift\\[\\]"]').fill(BusinessPartner.PaymentTerms.BICSWIFTCode);
await page.locator('input[name="pt_bic_swift\\[\\]"]').click();
await page.locator('input[name="pt_bic_swift\\[\\]"]').fill(BusinessPartner.PaymentTerms.BICSWIFTCode);
await page.locator('input[name="pt_beanch\\[\\]"]').click();
await page.locator('input[name="pt_beanch\\[\\]"]').fill(BusinessPartner.PaymentTerms.Branch);
await page.locator('#saveadd').click({ force: true });

await page.waitForLoadState();
const res = await page
      .locator("body > div.sweet-alert.showSweetAlert.visible > h2")
      .textContent();
    console.log(res);
    if (res === "Update SAP Complete") {
      await page
        .locator(
          "body > div.sweet-alert.showSweetAlert.visible > div.sa-button-container > div > button"
        )
        .click();
      await page.waitForLoadState();
    }

  });
});
