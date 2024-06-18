import { test, expect } from "@playwright/test";
import dataSetting from "../../../data/common/TestSetting.json";

const data = dataSetting.Login;


const gotoMenu = async (page) => {
  // ไปยัง URL ที่ต้องการ
  await page.goto(data.site+"auth/index");

  await page.getByPlaceholder("Username").click();
  await page.getByPlaceholder("Username").fill(data.username);
  await page.getByPlaceholder("Password").fill(data.password);
  await page.getByRole("button", { name: "Login" }).click();

  await page.waitForSelector(".thumbnail");
  await page.locator(".thumbnail").first().click();

  await page.waitForSelector(".caption-overflow > span");
  await page.locator(".caption-overflow > span").click();
  await page.getByRole("link", { name: "ระบบจัดการข้อมูลกลาง" }).click();
  await page.waitForSelector("a");
};

test("test", async ({ page }) => {
  // await gotoMenu(page);
  await page.goto(
    data.site+"auth/login/"+data.username+"/PPA"
  );

  await page.getByRole("link", { name: "ระบบจัดการข้อมูลกลาง" }).click();
  await page.waitForSelector("a");
  await page.locator("a").filter({ hasText: "Genaral Settings" }).click();
  await page
    .getByRole("link", { name: " Setup Project & Department" })
    .click();
  await page.getByRole("link", { name: " New" }).click();
  await page.getByPlaceholder("Code").click();
  await page.getByPlaceholder("Code").fill("IN");
  await page.getByPlaceholder("Name", { exact: true }).click();
  await page.getByPlaceholder("Name", { exact: true }).fill("Icon-N1");
  await page.locator("#startproject").fill("2024-06-01");
  await page.getByPlaceholder("Name Eng").click();
  await page.getByPlaceholder("Name Eng").fill("Icon-N1");
  await page.getByLabel("Yes").check();
  await page.locator("#pjtype").selectOption("IM");

  await page.getByRole("link", { name: "Admin" }).click();

  await page.locator(`//button[@class='badmin btn bg-info']`).click();

  await page.locator('input[name="adminname2\\[\\]"]').click();
  await page.locator('input[name="adminname2\\[\\]"]').fill("add1");
  await page.getByRole("link", { name: "Consultants" }).click();

  await page.locator(`//button[@class='bcontact btn bg-info']`).click();
  await page.locator(`//input[@name='contactname[]']`).click(); 
  await page.locator('input[name="contactname\\[\\]"]').click();
  await page.locator('input[name="contactname\\[\\]"]').fill('add1');
});
