import { test, expect } from "@playwright/test";
import { LoginPage } from "../../src/pages/common/login-page";
import dataSetting from "../../data/common/TestSetting.json";
import { fullScreenMode } from "../../src/pages/common/fullScreenMode";
import setupPermissionReport from "../../data/generalSettings/setupPermissionReport";
import { setupProjectType } from "../../data/generalSettings/setupProjectType";
const data = dataSetting.Login;

test("setup ProjectType", async ({ page }) => {
  //fullScreenMode(page);
  test.setTimeout(6000);

  const loginPage = new LoginPage(page);
  await loginPage.goto(data.site);
  await loginPage.login(data.username, data.password);
  await page.goto(data.site + "/auth/login/" + data.username + "/PPA");
  await page.getByRole("link", { name: "ระบบจัดการข้อมูลกลาง" }).click();
  await page.locator("a").filter({ hasText: "Genaral Settings" }).click();
  await page.getByRole("link", { name: " Setup Project Type" }).click();
  await page.getByRole("button", { name: " New" }).click();
  await page.locator("#code").fill(setupProjectType.codee); //js
  await page.locator("#name").fill(setupProjectType.name); //js
  await page.getByRole("button", { name: " Save" }).click();
  await page.getByRole("button", { name: "OK" }).click();  
  await page.getByPlaceholder('Type to filter...').fill('nueng');
  await page.getByPlaceholder('Type to filter...').click();
  await page.getByPlaceholder('Type to filter...').fill(setupProjectType.name);
  await page.getByRole('gridcell', { name: '' }).click();
  await page.getByRole('button', { name: 'History Log' }).click();
  // const idValue = await page
  //   .locator(`[type="checkbox"][data-readonly]`)
  //   .nth(39)
  //   .getAttribute("id");
  // // await page.locator("#ic_chk609").check();
  // // แสดงค่า id ที่ได้
  // console.log("id", idValue);
  // await page.locator(`#${idValue}`).check();
});
