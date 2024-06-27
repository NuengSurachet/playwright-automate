import { test } from "@playwright/test";
import dataSetting from "../../data/common/TestSetting.json";
import { LoginPage } from "../../src/pages/common/login-page";
import {
  setupBusinessPartnerGroupData,
  setupBusinessPartnerData,
} from "../../data/generalSettings/setupUOM";

const dataLogin = dataSetting.Login;
const firstModuleData = setupBusinessPartnerGroupData;
const secondModuleData = setupBusinessPartnerData;

test.describe("Setup UOM", async () => {
  test("Setup Business Partner Group", async ({ page }) => {
    await page.goto(dataLogin.site);
    const loginPage = new LoginPage(page);
    await loginPage.goto(dataLogin.site);
    await loginPage.login(dataLogin.username, dataLogin.password);
    await page.waitForTimeout(3000);
    await page.locator(`[class="panel-title"]`).nth(0).click()
    await page
      .locator("a")
      .filter({ hasText: "Business Partner" })
      .first()
      .click();
    await page
      .getByRole("link", { name: " Setup Business Partner Group" })
      .click();
    await page.getByRole("button", { name: " Add" }).click();
    await page.locator("#vendor_code").fill(firstModuleData.bpGroupCode);
    await page.locator("#vendor_name").fill(firstModuleData.bpGroupName);
    await page.getByRole("radio", { name: firstModuleData.bpGroupType });
    await page.getByRole("button", { name: "" }).click();
    await page
      .locator("tr")
      .filter({ hasText: firstModuleData.chartOfAccount })
      .locator("button")
      .click();
    await page.getByRole("radio", {
      name: firstModuleData.status,
      exact: true,
    });
    await page.locator("#petty_cash_vg").selectOption(firstModuleData.subtype);
    await page.locator("#save_vg").click();
    await page.getByRole("button", { name: "OK" }).click();
    await page
      .getByRole("link", { name: " Setup Business Partner", exact: true })
      .click({ force: true });
    await page.getByRole("link", { name: " Add" }).click();
    await page.locator("#h_code").selectOption("Manual");
    await page.locator("#vender_code").fill(secondModuleData.bpCode);
    await page.locator("#vender_name").fill(secondModuleData.bpName);
    await page.locator("#cardfnme").fill(secondModuleData.bpName);
    await page.waitForSelector("div.col-sm-4");
    // Click the button inside the specific div
    await page.click("div.col-sm-4 button.get_g.btn.btn-info");
    await page
      .locator("tr")
      .filter({ hasText: secondModuleData.bpGroup })
      .locator("button")
      .click();
    await page.getByRole("link", { name: "Contact Persons" }).click();
    await page.locator("#bottom-tab2").getByText("Contact Persons").click();
    await page
      .locator('input[name="cp_name\\[\\]"]')
      .fill(secondModuleData.contactId);
    await page
      .locator('input[name="cp_first_name\\[\\]"]')
      .fill(secondModuleData.firstName);
    await page
      .locator('input[name="cp_last_name\\[\\]"]')
      .fill(secondModuleData.lastName);
    await page.getByRole("link", { name: "Address" }).click();
    await page.getByText("Ship To").click();
    await page
      .locator('input[name="add_address\\[\\]"]')
      .fill(secondModuleData.branchId);
    await page
      .locator('input[name="add_address_name\\[\\]"]')
      .fill(secondModuleData.branchName);
    await page
      .locator('input[name="add_street\\[\\]"]')
      .fill(secondModuleData.streetPOBox);
    await page
      .locator('input[name="add_block\\[\\]"]')
      .fill(secondModuleData.block);
    await page
      .locator('input[name="add_city\\[\\]"]')
      .fill(secondModuleData.city);
    await page
      .locator('input[name="add_zipcode\\[\\]"]')
      .fill(secondModuleData.zipcode);
    await page.getByRole("link", { name: "Payment Terms" }).click();
    await page
      .locator("#bottom-tab4")
      .getByRole("button", { name: "" })
      .click();
    await page
      .locator("tr")
      .filter({ hasText: secondModuleData.paymentTerms })
      .locator("button")
      .click();
    await page.getByRole("button", { name: " Save" }).click();
  });
});
