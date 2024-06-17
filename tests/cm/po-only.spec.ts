import { chromium, expect, selectors, test } from "@playwright/test";
import { readExcelFile } from "../../src/utils/read-excel"; //'./utils/excelUtils';
import { LoginPage } from "../../src/pages/common/login-page";
import { text } from "stream/consumers";

test.describe("Login CM Tests", async () => {
  test("Successful login with valid credentials", async ({ page }) => {
    const loginPage = new LoginPage(page);
    // await loginPage.goto("https://maison-cm-test.iconframework.com/");
    // await loginPage.login('icon003', '123456');
    // await page.waitForLoadState('networkidle')
    // const icon = page.locator('//i[@class="glyphicon glyphicon-log-in"]')
    // await icon.hover();
    // await icon.click();
    test.setTimeout(600000);
    // await page.setViewportSize({ width: 1920, height: 1080 });
    // await page.evaluate(() => {
    //   window.moveTo(0, 0);
    //   window.resizeTo(screen.width, screen.height);
    // });
    await page.goto(
      "https://maison-cm-test.iconframework.com/auth/login/icon003/PPA"
    );
    await page
      .getByRole("link", { name: "ระบบจัดการในสำนักงาน" })
      .click({ force: true });
    // await page.getByRole('link', { name: 'ระบบจัดการในสำนักงาน' }).click();
    await page.getByRole("link", { name: " New PR" }).click();
    await page.getByPlaceholder("หมายเหตุ").fill("test - PO ohmtest");
    await page.getByPlaceholder("สถานที่ส่งของ").fill("bangna");
    const selectOption = page.locator('//select[@id="sendapprove"]');
    await selectOption.selectOption("ICON003");

    const click = page.locator("#pj_ex").getByRole("button", { name: "" });
    await page.waitForLoadState("load");
    await click.click();
    await page
      .getByRole("row", { name: "IM Icon-M1 SELECT" })
      .getByRole("button")
      .click();
    await page.locator("#dimension").selectOption("แผนกอื่นๆ");
    await page.waitForLoadState("load");

    await page.getByRole("button", { name: "" }).nth(1).click();
    await page
      .getByRole("row", { name: "1 MVD Vendor-M 0000000000000" })
      .getByRole("button")
      .click();
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
    await page.locator("#userapprove97").click();
    await page.waitForLoadState("load");
    await page.locator('(//img[@class="img-circle img-sm"])[1]').click();
    await page.click("div.modal-dialog.modal-full .btn.bg-success-600");

    await page
      .locator(
        '//a[@href="https://maison-cm-test.iconframework.com/panel/office"]//img'
      )
      .click();
    await page
      .getByRole("link", { name: "ระบบสั่งซื้อ" })
      .click({ force: true });
    await page.waitForTimeout(3000);
    await page.locator('button:has-text("New PO")').click();
    await page.locator("#openpo_prdetail__").click();
    await page.locator("//tbody/tr[2]/td[3]/a[1]").click();
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
    await page.locator("#group-PO").selectOption("201");
    await page
      .getByRole("row", { name: "2 V0011 บริ****_test_server" })
      .getByRole("button")
      .click();
    await page.locator('.close_modal_addresss.btn.btn-xs.btn-block.btn-primary').click();
    await page.locator(".col-md-2 > .input-group > .input-group-addon > .icon-calendar22").click();
    await page.getByLabel("วันที่ส่งของ *").fill("2024-06-30");
    await page.locator("#pcdate").fill("2024-06-14");
    await page.locator("#po_consignee").click();
    await page.locator("#po_consignee").fill("mm");
    await page.locator("#whadr_po").click();
    await page.locator("#whadr_po").fill("bangna");
    await page.locator("#sendapprove").selectOption("241");
    await page.locator('//button[@id="savee"]').click();
      
    await page.getByRole("button", { name: " Save" }).click();
    await page.locator("#discountHshow").click();
    await page.locator("#discountHshow").fill("10.00");
    await page.locator("#downpershow").fill("10.00");
    await page
      .locator("#mainpost div")
      .filter({ hasText: "Purchase Order Attachment" })
      .nth(3)
      .click();
    await page.getByRole('button', { name: 'Print ' }).click();
    const page1Promise = page.waitForEvent('popup');
    await page.locator('a:has-text("Print")').click();
    const page1 = await page1Promise;
    await page.locator("#userapprove97").click();

    await page.locator('(//img[@class="img-circle img-sm"])[1]').click();
    await page.waitForSelector("div.modal-dialog.modal-full");
    await page.click("div.modal-dialog.modal-full .btn.bg-success-600");
  });
});
// const page3Promise = page.waitForEvent('popup');
// await page.locator('#print_form_poPO24060019').click();
// const page3 = await page3Promise;
