import { test } from "@playwright/test";
import { LoginPage } from "../../src/pages/common/login-page";
import dataSetting from "../../data/common/TestSetting.json";

const data = dataSetting.Login;


test.describe("Login CM Tests", async () => {
  test("Po Only", async ({ page }) => {
    await page.goto(data.site);
    const loginPage = new LoginPage(page);
    await loginPage.goto(data.site);
    await loginPage.login(data.username, data.password);
    await page.getByRole('link', { name: 'ระบบจัดการในสำนักงาน' }).click();
    await page.getByRole("link", { name: " New PR" }).click();
    await page.getByPlaceholder("หมายเหตุ").fill("test - PO ohmtest");
    await page.getByPlaceholder("สถานที่ส่งของ").fill("bangna");
    const selectOption = page.locator('//select[@id="sendapprove"]');
    await selectOption.selectOption("ICON003");

    const click = page.locator("#pj_ex").getByRole("button", { name: "" });
    await page.waitForLoadState("load");
    await click.click();
    await page.getByRole('row', { name: '1073 Nue center bangna SELECT' }).getByRole('button').click();

    await page.locator("#dimension")
    await page.waitForLoadState("load");

    await page.getByRole("button", { name: "" }).nth(1).click();
    await page.getByRole('row', { name: '1 asdasd asd 0000000000000' }).getByRole('button').click();
    await page.locator('//button[@id="select_add_sub1"]').click();
    await page.waitForLoadState("load");

    await page.locator('//a[@id="sss"]').click();
    await page
      .locator('//button[@class="openun btn btn-info btn-block"]')
      .click();
    await page.locator('//button[@id="select_item3"]').click();
    await page.locator('//a[@class="insertopen1"]').hover();
    await page
      .locator(' //i[@class="glyphicon glyphicon-folder-open"]')
      .click();
    await page.waitForLoadState("load");
    await page
      .locator('//a[@class="label label-block label-info insertopenxx3"]')
      .click();
    await page.getByPlaceholder("กรอกปริมาณ", { exact: true }).click();
    await page.getByPlaceholder("กรอกปริมาณ", { exact: true }).fill("2");
    await page.getByRole("textbox", { name: "กรอกราคา/หน่วย" }).click();
    await page.getByRole("textbox", { name: "กรอกราคา/หน่วย" }).fill("2000");
    await page.locator("#vatper__").selectOption("7");
    await page.locator("#pdisamt").click();
    await page.locator("#datesend").fill("2024-06-13");
    await page.locator("#duedate").fill("2024-06-30");
    await page.getByRole("button", { name: " Add Item" }).click();
    await page.getByRole("button", { name: "OK" }).click();
    await page.getByRole("button", { name: "Close" }).click();
    await page.getByText("Save").click();
    await page.getByText("Send Approve").click();
    // await page.locator("#userapprove97").click();
    await page.locator('//i[@class="icon icon-bell2"]').click();
    await page.waitForLoadState("load");
    await page.locator('(//img[@class="img-circle img-sm"])[1]').click();
    await page.click("div.modal-dialog.modal-full .btn.bg-success-600");
    await page
      .locator(
        '//a[@href="https://std-cm-test.iconcm.com/panel/office"]//img'
      )
      .click();

    await page
      .getByRole("link", { name: "ระบบสั่งซื้อ" })
      .click({ force: true });
    await page.waitForLoadState("load");
    await page.locator('button:has-text("New PO")').click();
    await page.locator("#openpo_prdetail__").click();
    await page.getByText('Select', { exact: true }).click();
    await page.locator("#openpr").click();
    await page.locator("//a[@id='add_pr1']").click();
    // await page.locator("#qty_unit1").click();
    await page.locator("//a[@id='add_pr1']").click();
    await page.locator("#qty_unit1").fill("1");
    // await page
    //   .locator("#load_totalunit1 div")
    //   .filter({ hasText: "# Item Detail Qty. UoM Price/" })
    //   .nth(3)
    //   .click();
    await page.locator("#qty_unit1").click();
    await page.getByText("Add item").click();
    await page.getByRole("button", { name: "OK" }).click();
    await page.getByRole("button", { name: " Close" }).click();
    await page.locator("#vvmo").click();
    await page.locator('#group-PO').selectOption('V00007');
    await page.getByRole('row', { name: '1 V000004 บริษัท ทดสอบ จำกัด' }).getByRole('button').click();
    await page.locator('#select_add1').click();
    // await page.locator('.close_modal_addresss.btn.btn-xs.btn-block.btn-primary').click();
    await page.locator(".col-md-2 > .input-group > .input-group-addon > .icon-calendar22").click();
    await page.getByLabel("วันที่ส่งของ *").fill("2024-06-30");
    await page.locator("#pcdate").fill("2024-06-14");
    await page.locator("#po_consignee").click();
    await page.locator("#po_consignee").fill("mm");
    await page.locator("#whadr_po").click();
    await page.locator("#whadr_po").fill("bangna");
    const selectOption2 = page.locator('//select[@id="sendapprove"]');

    await selectOption2.selectOption("ICON003");
    await page.locator('//button[@id="savee"]').click();
        await page.getByRole('button', { name: 'Print ' }).click();
    const page1Promise = page.waitForEvent('popup');
    await page.locator('a:has-text("Print")').click();
    const page1 = await page1Promise;
    await page.waitForLoadState("load");
    // await page.getByRole("button", { name: " Save" }).click();

    await page.locator("#discountHshow").click();
    await page.locator("#discountHshow").fill("10.00");
    await page.locator("#downpershow").fill("10.00");
    await page
      .locator("#mainpost div")
      .filter({ hasText: "Purchase Order Attachment" })
      .nth(3)
      .click();

    await page.locator('//i[@class="icon icon-bell2"]').click();
    await page.locator('(//img[@class="img-circle img-sm"])[1]').click();
    await page.waitForSelector("div.modal-dialog.modal-full");
    await page.click("div.modal-dialog.modal-full .btn.bg-success-600");

    // PO -> Advance Depositawait page.getByRole('button', { name: 'OK' }).click();
    await page.getByRole('link', { name: ' Advance Deposit Archive' }).click();
    await page.getByRole('link', { name: ' Approve Advance Deposit' }).click();
    await page.getByRole('link', { name: ' Advance Deposit Archive' }).click();
    await page.getByRole('row', { name: 'asdasd asd 2  select' }).getByRole('link').click();
    await page.getByText('Load Document').click();
    await page.getByRole('link', { name: ' Advance Deposit', exact: true }).click();
    await page.getByText('Select', { exact: true }).click();
    await page.locator('#sePO24060007').click();
    await page.locator('#invoice_number').click();
    await page.locator('#invoice_number').fill('5678');
    await page.locator('#remark').click();
    await page.locator('#remark').fill('remark pooonly');
    await page.locator('#sendapprove').selectOption('93');
    await page.getByText('Save').click();
    await page.getByRole('button', { name: 'OK' }).click();
    const page2Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: ' Print' }).click();
    const page2 = await page2Promise;
    await page.getByText('Send Approve').click();
    await page.getByRole('button', { name: 'OK' }).click();
    await page.locator('//i[@class="icon icon-bell2"]').click();
    await page.locator('(//img[@class="img-circle img-sm"])[1]').click();
    // await page.locator('#foo126AD24060007').click(); REMARK
    // await page.locator('#foo126AD24060007').fill('ohm test poonly');
    await page.click("div.modal-dialog.modal-full .btn.bg-success-600");
    await page.getByRole('button', { name: 'OK' }).click();

    //ระบบวัสดุ
    
  })
});
// const page3Promise = page.waitForEvent('popup');
// await page.locator('#print_form_poPO24060019').click();
// const page3 = await page3Promise;
