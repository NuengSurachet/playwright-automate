import { test, expect } from "@playwright/test";
import { LoginPage } from "../../src/pages/common/login-page";
import dataSetting from "../../data/common/TestSetting.json";
import { fullScreenMode } from "../../src/pages/common/fullScreenMode";
import setupPermissionReport from "../../data/generalSettings/setupPermissionReport";
const data = dataSetting.Login;

test("Setup Permission Report", async ({ page }) => {
  //fullScreenMode(page);
  test.setTimeout(600000);

  const loginPage = new LoginPage(page);
  await loginPage.goto(data.site);
  await loginPage.login(data.username, data.password);
  await page.goto(data.site + "/auth/login/" + data.username + "/PPA");
  await page.getByRole("link", { name: "ระบบจัดการข้อมูลกลาง" }).click();
  await page.locator("a").filter({ hasText: "Genaral Settings" }).click();
  await page.getByRole("link", { name: " Setup Permission" }).click();
  await page.getByRole("link", { name: " Report" }).click();
  await page.getByRole("link", { name: "Role Member Permission" }).click();
  await page.locator("a").filter({ hasText: "Genaral Settings" }).click();
  await page.getByRole("link", { name: " Setup Permission" }).click();

  await page.getByRole("link", { name: " Permission by User" }).click();
  await page.getByPlaceholder("Type to filter...").click();
  await page.getByPlaceholder("Type to filter...").fill(data.username);
  await page
    .getByRole("row", { name: data.username })
    .locator("a")
    .nth(3)
    .click();
  await page.getByText("Select All").click();
  await page.getByText("Save").click();
  await page.getByRole("button", { name: "OK" }).click();
  await page.getByPlaceholder("Type to filter...").click();
  await page.getByPlaceholder("Type to filter...").fill(data.username);
  await page.click(`(//i[@class='icon-user-check'])[1]`);

  const idValue = await page
    .locator(`[type="checkbox"][data-readonly]`)
    .nth(39)
    .getAttribute("id");
  // await page.locator("#ic_chk609").check();
  // แสดงค่า id ที่ได้
  console.log("id", idValue);
  await page.locator(`#${idValue}`).check();

  await page.getByRole("button", { name: " Close" }).click();
});