import { test, expect, chromium } from "@playwright/test";
import {LoginPage}  from "../../src/pages/common/login-page";
import dataSetting from "../../data/common/TestSetting.json";

test.describe("Setup Company", () => {
      const data=dataSetting.Login;
    
      test("Add new company", async () => {
        test.setTimeout(600000);
        const browser = await chromium.launch();
        const context = await browser.newContext();
        const page = await context.newPage();
        // await page.pause();
        const loginPage = new LoginPage(page);
        await loginPage.goto(data.site);
        await loginPage.login(data.username, data.password);
        // await expect(page).not.toHaveURL(excelData[0].site + "/auth/index");
        // try {
        //   await page.locator(".thumbnail").first().click();
        //   await page.locator(".caption-overflow > span").click();
        //   await page.waitForLoadState();
        // } catch (error) {
        //   await page.waitForSelector(".thumbnail");
        //   await page.locator(".thumbnail").first().click();
        //   await page.locator(".caption-overflow > span").click();
        //   await page.waitForLoadState();
        // }

        if (!page.isClosed()) {
          await page
            .getByRole("link", { name: "ระบบจัดการข้อมูลกลาง" })
            .click({ timeout: 50000 });
        }
        if (!page.isClosed()) {
          await page.locator("#btn_mg").click({ force: true });
        }
        await page.locator("a").filter({ hasText: "New" }).click( { force: true });
        await page.locator('input[name="maincode"]').click( { force: true });
        await page.locator("#maincode").fill("TestIOT", { force: true });
        await page.waitForSelector("#taxnova");
        await page.locator("#taxnova").fill("12345", { force: true });


    if (!page.isClosed()) {
      await page.waitForSelector("#name");
      await page.locator("#name").click({ force: true });
    }
    if (!page.isClosed()) {
      await page.locator("#name").fill("Test IOT", { force: true });
    }
    await page.locator("#nameen").click({ force: true });
    await page.locator("#nameen").fill("Test IOT", { force: true });
    await page.locator("#AddressNo").click({ force: true });
    await page.locator("#AddressNo").fill("11", { force: true });
    await page.locator("#Moo").click({ force: true });
    await page.locator("#Moo").fill("1", { force: true });
    await page.locator("#Building").click({ force: true });
    await page.locator("#Building").fill("A", { force: true });
    await page.locator("#Floor").click({ force: true });
    await page.locator("#Floor").fill("1", { force: true });
    await page.locator("#Soi").click({ force: true });
    await page.locator("#Soi").fill("A", { force: true });
    await page.locator("#Road").click({ force: true });
    await page.locator("#Road").fill("C", { force: true });
    await page.getByTitle("-- เลือกจังหวัด --").click({ force: true });
    await page.getByRole("treeitem", { name: "กรุงเทพมหานคร" }).click();
    await page.getByTitle("-- เลือกอำเภอ/เขต --").click({ force: true });
    await page.locator('input[type="search"]').click({ force: true });
    await page.locator('input[type="search"]').fill("คลองเตย", { force: true });
    await page
      .getByRole("treeitem", { name: "คลองเตย" })
      .click({ force: true });
    await page.getByTitle("-- เลือกตำบล/แขวง --").click({ force: true });
    await page.locator('input[type="search"]').click({ force: true });
    await page.locator('input[type="search"]').fill("คลองเต", { force: true });
    await page
      .getByRole("treeitem", { name: "คลองเตย" })
      .click({ force: true });
    await page.locator('input[name="email"]').click({ force: true });
    await page
      .locator('input[name="email"]')
      .fill("test@gmail.com", { force: true });
    await page.locator("#tel").click({ force: true });
    await page.locator("#tel").fill("000000000");
    await page.getByRole("button", { name: " Save" }).click({ force: true });
    await page.getByRole("button", { name: "OK" }).click({ force: true });
    // ติด กรอก sap company code
    await page
      .locator("a")
      .filter({ hasText: data.username })
      .click({ force: true });
    await page.getByRole("link", { name: "Logout" }).click({ force: true });
  });

  test("Edit company ", async () => {
    test.setTimeout(600000);
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage = new LoginPage(page);
    await loginPage.goto(data.site);
    await loginPage.login(data.username, data.password);
    await page.waitForLoadState();
    await page
      .getByRole("link", { name: "ระบบจัดการข้อมูลกลาง" })
      .click({ force: true });
    await page
      .locator("a")
      .filter({ hasText: "Genaral Settings" })
      .click({ force: true });
    await page
      .getByRole("link", { name: "Setup Company" })
      .click({ force: true });
    await page.getByPlaceholder("Type to filter...").click({ force: true });
    await page
      .getByPlaceholder("Type to filter...")
      .fill("MD105", { force: true });
    await page.getByPlaceholder("Type to filter...").click({ force: true });
    await page.getByRole("gridcell", { name: "MD105" }).click({ force: true });
    await page.getByRole("link", { name: "" }).click({ force: true });
    await page.locator("#Moo").click({ force: true });
    await page.locator("#Moo").fill("1", { force: true });
    await page.locator("#Building").fill("A", { force: true });
    await page.locator("#Building").click({ force: true });
    await page.locator("#Floor").click({ force: true });
    await page.locator("#Floor").fill("1", { force: true });
    await page.locator("#Floor").press("Tab");
    await page.getByRole("button", { name: " Save" }).click({ force: true });
  });
});
