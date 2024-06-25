import { expect, test } from "@playwright/test";
import dataSetting from "../../data/common/TestSetting.json";
import { LoginPage } from "../../src/pages/common/login-page";
import { setupBusinessPartnerGroupData } from "../../data/generalSettings/setupUOM";

const dataLogin = dataSetting.Login;
const data = setupBusinessPartnerGroupData;

test.describe("Setup UOM", async () => {
  test("Setup UOM", async ({ page }) => {
    await page.goto(dataLogin.site);
    const loginPage = new LoginPage(page);
    await loginPage.goto(dataLogin.site);
    await loginPage.login(dataLogin.username, dataLogin.password);
    await page.waitForTimeout(3000);
    await page.getByRole("link", { name: "ระบบจัดการข้อมูลกลาง" }).click();
    await page.locator("a").filter({ hasText: "Inventory" }).first().click();
    await page.getByRole("link", { name: " Setup Units of Measure" }).click();
    await page.locator("#code").click();
    await page.locator("#code").fill(data.code);
    await page.getByLabel("Status", { exact: true }).click();
    await page.getByLabel("Status", { exact: true }).fill(data.uom);
    await page.locator("#status_Y").check();
    await page.locator("#save_new").click();
    await page.waitForLoadState();
    await page.getByRole("button", { name: "OK" }).click();
    await page.getByPlaceholder("Type to filter...").click();
    await page.getByPlaceholder("Type to filter...").fill(data.code);
      await page.waitForSelector('td.text-center a[data-target="#edit_modal133"] i.icon-pencil7');
      await page.click('td.text-center a[data-target="#edit_modal133"] i.icon-pencil7');
    const editCode = page.getByPlaceholder("Password");
    await page.waitForTimeout(4000);
    await expect(editCode).toHaveValue(/[a-zA-Z0-9]/);
    await page.locator("#save_new136").click();
    await page.getByRole("button", { name: "OK" }).click();
  });
});
