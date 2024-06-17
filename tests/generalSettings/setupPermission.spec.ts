import { test, expect } from "@playwright/test";

test.describe("Setup Permission", () => {
  test("Test Setup Permission", async ({ page }) => {
    test.setTimeout(600000);
    await page.pause();
    await page.goto("https://maison-cm-test.iconframework.com/");
    await page.getByPlaceholder("Username").click({ force: true });
    await page.getByPlaceholder("Username").fill("icon002", { force: true });
    await page.getByPlaceholder("Password").click({ force: true });
    await page.getByPlaceholder("Password").fill("123456", { force: true });
    await page.getByPlaceholder("Password").press("Enter");
    await page.waitForSelector(".thumbnail");
    await page.locator(".thumbnail").first().click({ force: true });
    await page.locator(".caption-overflow > span").click({ force: true });
    await expect(page).not.toHaveURL(
      "https://maison-cm-test.iconframework.com/auth/companylist"
    );
    await page.waitForLoadState();
    await page
      .getByRole("link", { name: "ระบบจัดการข้อมูลกลาง" })
      .click({ force: true });
    await expect(page).not.toHaveURL(
      "https://maison-cm-test.iconframework.com/panel/office"
    );
    await page.waitForLoadState();
    await page.locator("#btn_mg").click({ force: true });
    await page.waitForLoadState();
    // Scroll down

    await page.locator("#ascrail2000 div").click({ force: true });
    await page.mouse.wheel(0, 500);
    await page
      .getByRole("link", { name: "Setup Permission" })
      .click({ force: true });
    await page.waitForLoadState();

    await page
      .getByRole("link", { name: "Permission by User" })
      .click({ force: true });
    await page.getByPlaceholder("Type to filter...").click({ force: true });
    await page
      .getByPlaceholder("Type to filter...")
      .fill("icon002", { force: true });
    await page.getByRole("link", { name: "" }).click({ force: true });
    await page.locator(".main_module").first().check({ force: true });
    await page
      .locator("td:nth-child(3) > .main_module")
      .first()
      .check({ force: true });
    await page
      .locator("td:nth-child(4) > .main_module")
      .first()
      .check({ force: true });
    await page
      .locator("tr:nth-child(41) > td:nth-child(2) > .main_module")
      .check({ force: true });
    await page
      .locator("tr:nth-child(41) > td:nth-child(3) > .main_module")
      .check({ force: true });
    await page
      .locator("tr:nth-child(41) > td:nth-child(4) > .main_module")
      .check({ force: true });
    await page
      .locator("tr:nth-child(41) > td:nth-child(5) > .main_module")
      .check({ force: true });
    await page
      .locator("tr:nth-child(41) > td:nth-child(6) > .main_module")
      .check({ force: true });
    await page
      .locator("tr:nth-child(41) > td:nth-child(7) > .main_module")
      .check({ force: true });
    await page
      .locator("tr:nth-child(63) > td:nth-child(2) > .main_module")
      .check({ force: true });
    await page
      .locator("tr:nth-child(63) > td:nth-child(3) > .main_module")
      .check({ force: true });
    await page
      .locator("tr:nth-child(63) > td:nth-child(4) > .main_module")
      .check({ force: true });
    await page
      .locator("tr:nth-child(63) > td:nth-child(6) > .main_module")
      .check({ force: true });
    await page
      .locator("tr:nth-child(63) > td:nth-child(7) > .main_module")
      .check({ force: true });
    await page
      .locator("tr:nth-child(80) > td:nth-child(2) > .main_module")
      .check({ force: true });
    await page
      .locator("tr:nth-child(80) > td:nth-child(3) > .main_module")
      .check({ force: true });
    await page
      .locator("tr:nth-child(80) > td:nth-child(4) > .main_module")
      .check({ force: true });
    await page
      .locator("tr:nth-child(80) > td:nth-child(5) > .main_module")
      .check({ force: true });
    await page
      .locator("tr:nth-child(80) > td:nth-child(6) > .main_module")
      .check({ force: true });
    await page
      .locator("tr:nth-child(80) > td:nth-child(7) > .main_module")
      .check({ force: true });
    await page
      .locator("tr:nth-child(98) > td:nth-child(2) > .main_module")
      .check();
    await page
      .locator("tr:nth-child(98) > td:nth-child(3) > .main_module")
      .check();
    await page
      .locator("tr:nth-child(98) > td:nth-child(4) > .main_module")
      .check();
    await page
      .locator("tr:nth-child(98) > td:nth-child(5) > .main_module")
      .check();
    await page
      .locator("tr:nth-child(98) > td:nth-child(6) > .main_module")
      .check();
    await page
      .locator("tr:nth-child(98) > td:nth-child(7) > .main_module")
      .check();
    await page
      .locator("tr:nth-child(122) > td:nth-child(2) > .main_module")
      .check();
    await page
      .locator("tr:nth-child(122) > td:nth-child(3) > .main_module")
      .check();
    await page
      .locator("tr:nth-child(122) > td:nth-child(4) > .main_module")
      .check();
    await page
      .locator("tr:nth-child(122) > td:nth-child(6) > .main_module")
      .check();
    await page
      .locator("tr:nth-child(122) > td:nth-child(7) > .main_module")
      .check();
    await page
      .locator("tr:nth-child(122) > td:nth-child(7) > .main_module")
      .check();
    await page
      .locator("tr:nth-child(136) > td:nth-child(2) > .main_module")
      .check();
    await page
      .locator("tr:nth-child(136) > td:nth-child(3) > .main_module")
      .check();
    await page
      .locator("tr:nth-child(136) > td:nth-child(4) > .main_module")
      .check();
    await page
      .locator("tr:nth-child(136) > td:nth-child(5) > .main_module")
      .check();
    await page
      .locator("tr:nth-child(136) > td:nth-child(6) > .main_module")
      .check();
    await page
      .locator("tr:nth-child(136) > td:nth-child(7) > .main_module")
      .check();
    await page
      .locator("tr:nth-child(164) > td:nth-child(2) > .main_module")
      .check();
    await page
      .locator("tr:nth-child(164) > td:nth-child(3) > .main_module")
      .check();
    await page
      .locator("tr:nth-child(164) > td:nth-child(4) > .main_module")
      .check();
    await page
      .locator("tr:nth-child(164) > td:nth-child(5) > .main_module")
      .check();
    await page
      .locator("tr:nth-child(164) > td:nth-child(6) > .main_module")
      .check();
    await page
      .locator("tr:nth-child(164) > td:nth-child(7) > .main_module")
      .check();
  });
});

test.describe("Setup Project & department", () => {
  test("Test Setup Approve BOM", async ({ page }) => {
    test.setTimeout(600000);
    await page.locator("#ascrail2000 div").click({ force: true });
    await page.mouse.wheel(500, 0);

    await page
      .getByRole("link", { name: "Setup Project & Department" })
      .click({ force: true });
    await page
      .getByRole("link", { name: "Setup Approve" })
      .click({ force: true });
    await page
      .locator("a")
      .filter({ hasText: "BOM (10)" })
      .click({ force: true });
    //Save Group
    await page.getByText("Add Group").click({ force: true });
    await page.locator("#groupname").click({ force: true });
    await page.locator("#groupname").fill("icon002-iot");
    await page.locator("#remark").click({ force: true });
    await page.locator("#remark").fill("for test iot", { force: true });
    await page.locator("#department").selectOption("PPA005");
    await page.getByText("Save Group").click({ force: true });
    //Save Group

    await page
      .locator("a")
      .filter({ hasText: "BOM (10)" })
      .click({ force: true });
    await page
      .locator("a")
      .filter({ hasText: "BOM (10)" })
      .click({ force: true });
    await page.getByLabel("Filter:").click({ force: true });
    await page.getByLabel("Filter:").fill("icon002", { force: true });
    await page.getByLabel("Filter:").press("Enter");
    await page
      .getByRole("row", { name: "12 Department : ( PPA005 )" })
      .locator("a")
      .first()
      .click({ force: true });
    await page.locator("#addjobtitle").click({ force: true });
    await page.locator('xpath=//a[@data-target="#userfrom_m2235"]').click();
    await page.waitForLoadState();
    await page.waitForLoadState();
    await page.getByLabel("Search:").click({ force: true });
    await page.getByLabel("Search:").fill("icon002", { force: true });
    await page.getByRole("button", { name: "SELECT" }).click({ force: true });
    await page.getByText("Save", { exact: true }).click({ force: true });
    await page.getByRole("button", { name: "OK" }).click({ force: true });
  });

  test("Test Setup Approve BOQ", async ({ page }) => {
    test.setTimeout(600000);
    await page.locator("#ascrail2000 div").click({ force: true });
    await page.mouse.wheel(500, 0);

    await page
      .getByRole("link", { name: "Setup Project & Department" })
      .click({ force: true });
    await page
      .getByRole("link", { name: "Setup Approve" })
      .click({ force: true });
    await page.locator("a").filter({ hasText: "BOQ (1)" }).click();
    await page.locator("a").filter({ hasText: "BOQ (1)" }).click();
    await page.getByRole("heading", { name: "BOQ ON / OFF" }).click();
    await page.getByLabel("Filter:").click();
    await page.getByLabel("Filter:").fill("icon002");
    await page.getByLabel("Filter:").press("Enter");
    await page
      .getByRole("gridcell", { name: "No matching records found" })
      .click();

    await page.getByText("Add Group").click();
    await page.locator("#groupname").click();
    await page.locator("#groupname").fill("icon002");
    await page.locator("#remark").click();
    await page.locator("#remark").fill("TestIOT");
    await page.locator("#department").selectOption("PPA005");
    await page.getByText("Save Group").click();
    await page.locator("a").filter({ hasText: "BOQ (1)" }).click();
    await page.locator("a").filter({ hasText: "BOQ (1)" }).click();
    await page.getByLabel("Filter:").click();
    await page.getByLabel("Filter:").click();
    await page.getByLabel("Filter:").fill("icon002");
    await page.getByLabel("Filter:").press("Enter");
    await page
      .getByRole("gridcell", { name: "      " })
      .locator("a")
      .first()
      .click();
    await page.locator("#addjobtitle").click();
    await page.locator("#newjobtitle239 a").first().click();
    await page.getByLabel("Search:").click();
    await page.getByLabel("Search:").fill("icon002");
    await page.getByRole("gridcell", { name: "icon002 | icon002" }).click();
    await page.getByRole("button", { name: "SELECT" }).click();
    await page.getByText("Save", { exact: true }).click();
    await page.getByRole("button", { name: "OK" }).click();
  });
  // test("Test Setup Approve BOQ", async ({ page }) => {
  //   test.setTimeout(600000);
  //   await page.locator("#ascrail2000 div").click({ force: true });
  //   await page.mouse.wheel(500, 0);

  //   await page
  //     .getByRole("link", { name: "Setup Project & Department" })
  //     .click({ force: true });
  //   await page
  //     .getByRole("link", { name: "Setup Approve" })
  //     .click({ force: true });
  //     await page.locator('a').filter({ hasText: 'Cost Control (2)' }).click();
  //     await page.locator('a').filter({ hasText: 'Cost Control (2)' }).click();
  //     await page.getByLabel('Filter:').click();
  //     await page.getByLabel('Filter:').fill('icon002');
  //     await page.getByRole('gridcell', { name: 'No matching records found' }).click();
  //     await page.getByText('Add Group').click();
  //     await page.locator('#groupname').click();
  //     await page.locator('#groupname').fill('icon002');
  //     await page.locator('#remark').click();
  //     await page.locator('#remark').fill('test iot');
  //     await page.locator('#department').selectOption('PPA005');
  //     await page.getByText('Save Group').click();
  //     await page.locator('a').filter({ hasText: 'Cost Control (2)' }).click();
  //     await page.locator('a').filter({ hasText: 'Cost Control (2)' }).click();
  //     await page.getByRole('heading', { name: 'Cost Control ON / OFF' }).click();
  //     await page.getByLabel('Filter:').click();
  //     await page.getByLabel('Filter:').click();
  //     await page.getByLabel('Filter:').fill('icon002');
  //     await page.getByRole('gridcell', { name: '      ' }).locator('a').first().click();
  //     await page.locator('#addjobtitle').click();
  //     await page.locator('#newjobtitle240 a').first().click();
  //     await page.getByLabel('Search:').click();
  //     await page.getByLabel('Search:').fill('icon002');
  //     await page.getByRole('gridcell', { name: 'icon002 | icon002' }).click();
  //     await page.getByRole('button', { name: 'SELECT' }).click();
  //     await page.getByRole('button', { name: 'OK' }).click();
  // });

});
