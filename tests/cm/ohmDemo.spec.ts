import { chromium, expect, test } from "@playwright/test";
import { readExcelFile } from "../../src/utils/read-excel"; //'./utils/excelUtils';
import { LoginPage } from "../../src/pages/common/login-page";


test.describe("Login CM Tests", async () => {

  test("Successful login with valid credentials", async ({ page }) => {
    const loginPage = new LoginPage(page);
    // await loginPage.goto("https://maison-cm-test.iconframework.com/");
    // await loginPage.login('icon003', '123456');
    // await page.waitForLoadState('networkidle')
    // const icon = page.locator('//i[@class="glyphicon glyphicon-log-in"]')
    // await icon.hover();
    // await icon.click();
    await page.goto(
      "https://maison-cm-test.iconframework.com/auth/login/icon003/PPA"
    );
    await page
      .getByRole("link", { name: "ระบบจัดการในสำนักงาน" })
      .click({ force: true });
    // await page.getByRole('link', { name: 'ระบบจัดการในสำนักงาน' }).click();
    await page.getByRole('link', { name: ' New PR' }).click();
    await page.getByPlaceholder('หมายเหตุ').fill('test - PO ohmtest');
    await page.getByPlaceholder('สถานที่ส่งของ').fill('bangna');
    const selectOption = page.locator('//select[@id="sendapprove"]')
    await selectOption.selectOption("ICON003")

    const click = page.locator('#pj_ex').getByRole('button', { name: '' })
    await page.waitForLoadState('load')
    await click.click();
    await page.getByRole('row', { name: 'IM Icon-M1 SELECT' }).getByRole('button').click();
    await page.locator('#dimension').selectOption('แผนกอื่นๆ');
    await page.waitForLoadState('load')

    await page.getByRole('button', { name: '' }).nth(1).click();
    await page.getByRole('row', { name: '1 MVD Vendor-M 0000000000000' }).getByRole('button').click();
    await page.locator('//button[@id="select_add_sub1"]').click();
    await page.waitForLoadState('load')

    await page.locator('//a[@id="sss"]').click();
    await page.locator('//button[@class="openun btn btn-info btn-block"]').click();
    await page.locator('//button[@id="select_item3"]').click();
    await page.locator('//a[@class="insertopen1"]').hover();
    await page.locator(' //i[@class="glyphicon glyphicon-folder-open"]').click();
    await page.waitForLoadState('load')
    await page.locator('//a[@class="label label-block label-info insertopenxx3"]').click();
    await page.getByPlaceholder('กรอกปริมาณ', { exact: true }).click();
    await page.getByPlaceholder('กรอกปริมาณ', { exact: true }).fill('2');
    await page.getByRole('textbox', { name: 'กรอกราคา/หน่วย' }).click();
    await page.getByRole('textbox', { name: 'กรอกราคา/หน่วย' }).fill('2000');
    await page.locator('#vatper__').selectOption('7');
    await page.locator('#pdisamt').click();
    await page.locator('#datesend').fill('2024-06-13');
    await page.locator('#duedate').fill('2024-06-30');
    await page.getByRole('button', { name: ' Add Item' }).click();
    await page.getByRole('button', { name: 'OK' }).click();
    await page.getByRole('button', { name: 'Close' }).click();
    await page.getByText('Save').click();
    await page.getByText('Send Approve').click();
    await page.locator('#userapprove97').click();
    await page.getByText('Purchase Requisition : PO ONLY PR24060015 ( 1 ) . icon003 Remark : test - PO').click();
    await page.locator('#openprr147056 #foo147056PR24060015').click();
    await page.locator('#openprr147056 #foo147056PR24060015').fill('test ohm remark');
  });
});
