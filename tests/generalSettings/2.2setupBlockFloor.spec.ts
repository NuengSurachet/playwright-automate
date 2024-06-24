import { test, expect } from "@playwright/test";
import { LoginPage } from "../../src/pages/common/login-page";
import dataSetting from "../../data/common/TestSetting.json";
import { fullScreenMode } from "../../src/pages/common/fullScreenMode";
import { setupModelType } from "../../data/generalSettings/setupModelType";
import { setupBlockFloor } from "../../data/generalSettings/setupBlockFloor";
const data = dataSetting.Login;

test("Setup Model Type", async ({ page }) => {
  //fullScreenMode(page);
  //test.setTimeout(6000);

  const loginPage = new LoginPage(page);
  await loginPage.goto(data.site);
  await loginPage.login(data.username, data.password);
  await page.goto(data.site + "/auth/login/" + data.username + "/PPA");
  await page.getByRole("link", { name: "ระบบจัดการข้อมูลกลาง" }).click();
  await page.locator("a").filter({ hasText: "Genaral Settings" }).click();
  await page.getByRole("link", { name: " Setup Block / Floor" }).click();
  await page.getByPlaceholder("Type to filter...").click();
  await page
    .getByPlaceholder("Type to filter...")
    .fill(setupBlockFloor.filterName);
  await page.getByRole("gridcell", { name: " Select" }).click();
  await page.getByRole("button", { name: " Add" }).click();
  // const idValue = await page
  await page.locator("#block_name").click();
  await page.locator("#block_name").fill(setupBlockFloor.blockCode);
  await page.locator("#block_name").press("Tab");
  await page.locator("#block_remarks").fill(setupBlockFloor.remarks);
  await page.getByRole("button", { name: " Save" }).click();
  await page.getByRole("button", { name: "OK" }).click();
  await page
    .getByRole("row", { name: "icon001 icon001 Active  " })
    .getByRole("link")
    .click();
  //   .locator(`[type="checkbox"][data-readonly]`)
  //   .nth(39)
  //   .getAttribute("id");
  // // await page.locator("#ic_chk609").check();
  // // แสดงค่า id ที่ได้
  // console.log("id", idValue);
  // await page.locator(`#${idValue}`).check();
});
