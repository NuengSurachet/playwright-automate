import { test, expect } from "@playwright/test";
import { LoginPage } from "../../src/pages/common/login-page";
import dataSetting from "../../data/common/TestSetting.json";
import { fullScreenMode } from "../../src/pages/common/fullScreenMode";
import setupPermissionReport from "../../data/generalSettings/setupPermissionReport";
import { setupProjectType } from "../../data/generalSettings/setupProjectType";
const data = dataSetting.Login;

test("Setup Cost Center", async ({ page }) => {
  //fullScreenMode(page);
  test.setTimeout(600000);

  const loginPage = new LoginPage(page);
  await loginPage.goto(data.site);
  await loginPage.login(data.username, data.password);
  await page.goto(data.site + "/auth/login/" + data.username + "/PPA");
  await page.getByRole("link", { name: "ระบบจัดการข้อมูลกลาง" }).click();
  await page.locator("a").filter({ hasText: "Cost Control" }).click();
  await page.getByRole("link", { name: " Setup Cost Center" }).click();
  await page.getByRole("button", { name: " Add" }).click();
  await page.locator("#cgroup_code").click();
  await page.locator("#cgroup_code").fill("icon001");
  await page.locator("#cgroup_name").click();
  await page.locator("#cgroup_name").fill("ค่าน้ำประปา");

  await page.locator("#valid_from").fill("2024-06-21");

  await page.locator("#basiccc_b_filter").getByLabel("Filter:").click();
  await page
    .locator("#basiccc_b_filter")
    .getByLabel("Filter:")
    .fill("น้ำประปา");
  await page
    .locator("tr")
    .filter({ hasText: "64 11501145 WIP" })
    .locator("button")
    .click();
  await page.locator("#open_expense_acc").getByText("X").click();
  await page.locator("#ex_lock_add2").check();
  await page.getByText("Save").click();
  await page.getByRole("button", { name: "OK" }).click();
  await page.getByLabel("Filter:").fill("");
  // const idValue = await page
  //   .locator(`[type="checkbox"][data-readonly]`)
  //   .nth(39)
  //   .getAttribute("id");
  // // await page.locator("#ic_chk609").check();
  // // แสดงค่า id ที่ได้
  // console.log("id", idValue);
  // await page.locator(`#${idValue}`).check();
});
