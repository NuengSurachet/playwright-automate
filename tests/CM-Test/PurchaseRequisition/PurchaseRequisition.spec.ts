import { test, expect } from "@playwright/test";
import { LoginPage } from "../../../src/pages/common/login-page";
import { describe } from "node:test";

const deleteRow = async (page) => {
  await page.locator("#delete110300001MM1").click();
  await page.getByRole("button", { name: "Ok" }).click();
};

describe("ระบบจัดการในสำนักงาน", () => {
  test("New PR", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.evaluate(() => {
      window.moveTo(0, 0);
      window.resizeTo(screen.width, screen.height);
    });

    test.setTimeout(600000);
    await page.goto(
      "https://maison-cm-test.iconframework.com/auth/login/icon001/PPA"
    );
    await page
      .getByRole("link", { name: "ระบบจัดการในสำนักงาน" })
      .click({ force: true });
    await page.getByRole("link", { name: " New PR" }).click();

    const select = await page.locator("(//select[@id='pr_type'])[1]");
    await page.waitForTimeout(1500);
    await select.selectOption({ label: "Expense" });
    await page.waitForTimeout(1500);
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
    await page
      .getByPlaceholder("หมายเหตุ")
      .fill("test expense", { force: true });
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
    await page.waitForTimeout(2000);
    await page.getByText("Send Approve").click(); 
    //----
    await page.getByRole("link", { name: " Approve", exact: true }).click();
    await page.locator(`(//span[@class='label bg-success'])[1]`).click();
    await page.getByRole("button", { name: "OK" }).click();
    await page.getByRole("link", { name: " PR Archive" }).click();
    await page.locator("#txtdatestart").first().fill("2024-06-14");
    await page.locator("#txtdateend").first().fill("2024-06-14");
    await page.getByPlaceholder("Select Document PR").click();
    await page.getByRole("treeitem", { name: "Expense" }).click();
    await page.getByPlaceholder("Select Document Status...").click();
    await page.getByRole("treeitem", { name: "Approve" }).click();
    await page.getByText("Load Document", { exact: true }).click();
    await page.getByRole("button", { name: "Print " }).click();
    const page1Promise = page.waitForEvent("popup");
    await page
      .locator(
        `//div[@class='btn-group dropup open']//ul[@class='dropdown-menu dropdown-menu-right']`
      )
      .click();
    const page1 = await page1Promise;
    const checkPrint = await page
      .getByRole("button", { name: "Print " })
      .click();
    //------
    await page.locator("a").filter({ hasText: "Reject" }).click();
    await page.getByPlaceholder("หมายเหตุ").click();
    await page.getByPlaceholder("หมายเหตุ").fill("ลบ test");
    await page.locator('a:has-text("reject")').click();
    await page.locator("#rejectpr_approvePR24060091").click();
    await page.getByText("Load Document", { exact: true }).click();
    await page.locator(".icons-list > li:nth-child(5) > a").first().click();
    await page.getByPlaceholder("หมายเหตุ").click();
    await page.getByPlaceholder("หมายเหตุ").fill("ลบเทส");
    await page.getByRole("button", { name: " Confirm For Delete" }).click();
    await page.getByText("Load Document", { exact: true }).click();
  
    // test("approve pr", async ({ page }) => {
    //   await page.goto(
    //     "https://maison-cm-test.iconframework.com/auth/login/icon001/PPA"
    //   );
    //   await page
    //     .getByRole("link", { name: "ระบบจัดการในสำนักงาน" })
    //     .click({ force: true });
    //   await page.getByRole("link", { name: " Approve", exact: true }).click();
    //   await page.locator(`(//span[@class='label bg-success'])[1]`).click();
    //   await page.getByRole("button", { name: "OK" }).click();
    //   await page.getByRole("link", { name: " PR Archive" }).click();
    //   await page.locator("#txtdatestart").first().fill("2024-06-14");
    //   await page.locator("#txtdateend").first().fill("2024-06-14");
    //   await page.getByPlaceholder("Select Document PR").click();
    //   await page.getByRole("treeitem", { name: "Expense" }).click();
    //   await page.getByPlaceholder("Select Document Status...").click();
    //   await page.getByRole("treeitem", { name: "Approve" }).click();
    //   await page.getByText("Load Document", { exact: true }).click();
    //   await page.getByRole("button", { name: "Print " }).click();
    //   const page1Promise = page.waitForEvent("popup");
    //   await page
    //     .locator(
    //       `//div[@class='btn-group dropup open']//ul[@class='dropdown-menu dropdown-menu-right']`
    //     )
    //     .click();
    //   const page1 = await page1Promise;
    //   await page.getByRole("button", { name: "Print " }).click();

    //   //--------
    // });
  });
});
