import { test, expect } from "@playwright/test";

const gotoMenu = async (page) => {
  // ไปยัง URL ที่ต้องการ
  await page.goto("https://maison-cm-test.iconframework.com/auth/index");

  await page.getByPlaceholder("Username").click();
  await page.getByPlaceholder("Username").fill("icon001");
  await page.getByPlaceholder("Password").fill("123456");
  await page.getByRole("button", { name: "Login" }).click();

  await page.waitForSelector(".thumbnail");
  await page.locator(".thumbnail").first().click();

  await page.waitForSelector(".caption-overflow > span");
  await page.locator(".caption-overflow > span").click();
  await page.getByRole("link", { name: "ระบบจัดการข้อมูลกลาง" }).click();
  await page.waitForSelector("a");
};

const deleteRow = async (page) => {
  //await page.locator("#delete_jobtitle569").click();  ลบแบบมี text อ้างถึง
  await page.locator("(//i[@class='icon-trash'])[1]").click(); // ลบแบบไม่มี text จับเป็น icon แต่บอกถึง index
  await page.getByRole("button", { name: "Yes, delete it!" }).click();
};

const setupApproveBOM = async (page) => {
  await page.locator("a").filter({ hasText: "BOM" }).click();
  await page
    .getByRole("row", { name: "1 Department : ( PPA004 )" })
    .locator("a")
    .first()
    .click();
  await page
    .getByRole("row", { name: "1 Department : ( PPA004 )" })
    .locator("a")
    .first()
    .click();
  await page.locator("#addjobtitle").click();

  await page.locator("#newjobtitle39 a").first().click();
  await page.getByLabel("Search:").click();
  await page.getByLabel("Search:").fill("M");
  await page
    .getByRole("row", { name: "Mtest | Mtest SELECT" })
    .getByRole("button")
    .click();
  await page.locator("#new_job39").click();
  await page.getByRole("button", { name: "OK" }).click();
};
const setupApproveBOQ = async (page) => {
  await page.waitForSelector("a");
  await page.locator("a").filter({ hasText: "BOQ" }).click();
  await page
    .getByRole("row", { name: "5 Department : ( PPA005 )" })
    .locator("a")
    .first()
    .click();
  await page.locator("#addjobtitle").click();
  await page.locator("#newjobtitle182 a").first().click();
  await page.getByLabel("Search:").click();
 await page.getByLabel('Search:').click();
 await page.getByLabel('Search:').fill('M');
 await page.getByText('Search:').click();
 await page.getByRole('row', { name: 'Mtest | Mtest SELECT' }).getByRole('button').click();
 await page.getByText('Save', { exact: true }).click();
 await page.getByRole('button', { name: 'OK' }).click();
  //await deleteRow(page);
};

test("test", async ({ page }) => {
  // await gotoMenu(page);
  await page.goto(
    "https://maison-cm-test.iconframework.com/auth/login/icon001/PPA"
  );
  await page.getByRole("link", { name: "ระบบจัดการข้อมูลกลาง" }).click();
  await page.waitForSelector("a");
  await page.locator("a").filter({ hasText: "Genaral Settings" }).click();
  await page
    .getByRole("link", { name: " Setup Project & Department" })
    .click();
  await page.getByRole("link", { name: " Setup Approve" }).click();
  await setupApproveBOM(page);
  await setupApproveBOQ(page);
});
