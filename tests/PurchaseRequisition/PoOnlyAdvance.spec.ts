import { test, expect } from "@playwright/test";
import { LoginPage } from "../../../src/pages/common/login-page";
import { describe } from "node:test";

const deleteRow = async (page) => {
  await page.locator("#delete110300001MM1").click();
  await page.getByRole("button", { name: "Ok" }).click();
};

describe("ระบบจัดการในสำนักงาน", () => {
  test("Po Only", async ({ page }) => {
    // await page.setViewportSize({ width: 1920, height: 1080 });
    // await page.evaluate(() => {
    //   window.moveTo(0, 0);
    //   window.resizeTo(screen.width, screen.height);
    // });

    test.setTimeout(600000);
    await page.goto("https://std-cm-test.iconcm.com/auth/login/icon001/ICON//");
    await page
      .getByRole("link", { name: "ระบบจัดการในสำนักงาน" })
      .click({ force: true });
    await page.getByRole("link", { name: " New PR" }).click();

    const select = await page.locator("(//select[@id='pr_type'])[1]");
    await page.waitForTimeout(1500);
    await select.selectOption({ label: "PO Only" });
    await page.waitForTimeout(1500);

    await page.getByPlaceholder("หมายเหตุ").click();
    await page.getByPlaceholder("หมายเหตุ").fill("test");
    await page.getByPlaceholder("สถานที่ส่งของ").click();
    await page.getByPlaceholder("สถานที่ส่งของ").fill("test");

    await page.locator("#sendapprove").selectOption("60");
    await page.locator("#deliverydate").fill("2024-06-28");

    await page.locator("#invoice_no").fill("ex001", { force: true });

    await page.waitForTimeout(1000);
    await page.getByPlaceholder("หมายเหตุ").click({ force: true });

    await page.locator("#apduedate").fill("2024-06-23", { force: true });
    await page.locator("#sendapprove").selectOption("60");
    // -----

    await page.locator("#sss").click();

    await page.waitForTimeout(1000);

    await page.click(
      `(//button[@class='openproj1 btn btn-xs btn-block btn-primary'])[1]`,
      { force: true }
    );

    await page
      .locator(
        ".modal-body > div:nth-child(2) > div > .input-group > .input-group-btn"
      )
      .first()
      .click();

    await page.locator("#select_item1").click();

    await page.getByRole("cell", { name: "" }).click();

    await page.locator(".odd > th:nth-child(8)").first().click();
    await page.getByRole("textbox", { name: "กรอกราคา/หน่วย" }).click();
    await page.getByRole("button", { name: " Add Item" }).click();
    await page.getByRole("button", { name: "OK" }).click();
    await page.getByRole("button", { name: " Close" }).click();

    await page.getByText("Save").click();
    await page.waitForTimeout(2000);
    await page.getByText("Send Approve").click();
    await page.waitForTimeout(2000);
    await page.locator('//i[@class="icon icon-bell2"]').click();
    await page.locator('(//img[@class="img-circle img-sm"])[1]').click();
    await page.waitForSelector("div.modal-dialog.modal-full");
    await page.click("div.modal-dialog.modal-full .btn.bg-success-600");
    //----

    await page.getByRole("link", { name: " PR Archive" }).click();

    await page.getByPlaceholder("Select Document PR").click();
    await page.getByRole("treeitem", { name: "PO Only" }).nth(0).click();
    await page.getByPlaceholder("Select Document Status...").click();
    await page.getByRole("treeitem", { name: "Approve" }).click();
    await page.getByText("Load Document", { exact: true }).click();
    await page.click(`//tbody/tr[1]/td[11]/div[1]/button[1]`);

    await page
      .locator(
        `//div[@class='btn-group dropup open']//ul[@class='dropdown-menu dropdown-menu-right']`
      )
      .click();


  });
});
