import { test, expect } from "@playwright/test";
import { LoginPage } from "../../../src/pages/common/login-page";

const deleteRow = async (page) => {
  await page.locator("#delete110300001MM1").click();
  await page.getByRole("button", { name: "Ok" }).click();
};
test("test", async ({ page }) => {
  test.setTimeout(600000);
  await page.goto(
    "https://maison-cm-test.iconframework.com/auth/login/icon001/PPA"
  );
  await page
    .getByRole("link", { name: "ระบบจัดการในสำนักงาน" })
    .click({ force: true });
  await page.getByRole("link", { name: " New PR" }).click();

  const select = await page.locator("(//select[@id='pr_type'])[1]");
  await page.waitForTimeout(1000);
  await select.selectOption({ label: "Expense" });
  await page.waitForTimeout(1000);
  await page.locator("#group-PR").selectOption("203");
  await page
    .getByRole("row", { name: "1 V0047 สำน****_test_server" })
    .getByRole("button")
    .click({ force: true });
  await page
    .locator("#DataTables_Table_1")
    .getByRole("gridcell", { name: "SELECT" })
    .click({ force: true });
  await page.locator("#invoice_no").fill("ex001", { force: true });
  await page.getByPlaceholder("หมายเหตุ").fill("test expense", { force: true });
  await page.waitForTimeout(1000);
  await page.getByPlaceholder("หมายเหตุ").click({ force: true });

  await page.locator("#apduedate").fill("2024-06-23", { force: true });
  await page.locator("#sendapprove").selectOption("205", { force: true });
  await page.locator("#sss").click({ force: true });
  // -----
  await page.waitForLoadState("load");
  await page
    .locator(`//button[@class='openproj1 btn btn-xs btn-block btn-primary']`)
    .click();
  await page.waitForTimeout(1000);
  await page.getByRole("button", { name: "" }).nth(1).click();
  await page.waitForTimeout(1000);
  await page.locator("#select_item1").click();
  await page.getByRole("cell", { name: "" }).locator("a").click();
  await page
    .getByRole("row", { name: "1 G20240620 MM - MM1" })
    .locator("a")
    .nth(1)
    .click();
  await page.getByRole("textbox", { name: "กรอกราคา/หน่วย" }).click();
  await page.getByRole("textbox", { name: "กรอกราคา/หน่วย" }).fill("3500");
  await page.getByRole("button", { name: " Add Item" }).click();
  await page.getByRole("button", { name: "OK" }).click();
  await page.getByRole("button", { name: " Close" }).click();
  await page.getByText("Save").click();

  //----
  await page.getByText("Send Approve").click();
  await page.getByRole("link", { name: " Approve", exact: true }).click();
  await page.locator("#expens_app147060PR24060017").click();
  await page.getByRole("button", { name: "OK" }).click();
  await page.getByRole("link", { name: " PR Archive" }).click();
  await page.getByText("Load Document", { exact: true }).click();
  await page.getByRole("gridcell", { name: "Approve" }).locator("a").click();
  await page.getByRole("button", { name: " Close" }).click();
  //await deleteRow(page);
});
