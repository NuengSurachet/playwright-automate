import { test, expect } from "@playwright/test";
import { LoginPage } from "../../src/pages/common/login-page";
import dataSetting from "../../data/common/TestSetting.json";
import ProjectUnits from "../../data/generalSettings/setupProjectUnit"
const data = dataSetting.Login;

test.describe("Setup Project Unit", () => {
  test("Test Setup Project Unit", async ({ page }) => {
    //test.setTimeout(6000);
    await page.pause();

    const loginPage = new LoginPage(page);
    await loginPage.goto(data.site);
    await loginPage.loginByUserType("ADMIN")
    //await loginPage.login(data.username, data.password);
    await page
      .getByRole("link", { name: "ระบบจัดการข้อมูลกลาง" })
      .click({ force: true });
    await expect(page).not.toHaveURL(data.site + "panel/office");
    await page.waitForLoadState();
    await page.locator("#btn_mg").click({ force: true });
    await page.waitForLoadState();
    // Scroll down

    await page.locator("#ascrail2000 div").click({ force: true });
    await page.mouse.wheel(0, 500);

    for (const ProjectUnit of ProjectUnits) {
      
      await page.getByRole("link", { name: " Setup Project Unit" }).click();

      await page.getByPlaceholder("Type to filter...").click();
      await page.getByPlaceholder("Type to filter...").click();
      await page.getByPlaceholder("Type to filter...").fill(ProjectUnit.ProjectCode);
      await page.getByPlaceholder("Type to filter...").press("Enter");
      await page.getByRole("link", { name: " Select" }).click();
      await page.getByRole("link", { name: " New" }).click();
      await page.locator("#unitcode").click();
      await page.locator("#unitcode").fill(ProjectUnit.UnitCode);
      await page.locator("#unitname").click();
      await page.locator("#unitname").fill(ProjectUnit.UnitName);
      await page.locator("#valid_from").fill(ProjectUnit.ValidFrom);
      await page.locator("#phase_name").click();
      await page.locator("#u_type").selectOption(ProjectUnit.Model);
      await page.locator('#valid_to').fill(ProjectUnit.ValidTo);
      if (ProjectUnit.Status==="Active") {
        await page.locator("#status_Y").check();
      } else {
        await page.locator("#status_N").check();
      }
      await page.getByRole("button", { name: "" }).first().click();
      await page.getByLabel("Filter:").click();
      await page.getByLabel("Filter:").fill(ProjectUnit.PhaseBuilding);
      await page.getByLabel("Filter:").press("Enter");
      await page.getByText("SELECT").click();

      if(ProjectUnit.BlockFloor !==""){
        await page.getByRole('button', { name: '' }).nth(1).click();
        await page.locator('#DataTables_Table_2_filter').getByLabel('Filter:').click();
        await page.locator('#DataTables_Table_2_filter').getByLabel('Filter:').fill(ProjectUnit.BlockFloor);
        await page.locator('#DataTables_Table_2_filter').getByLabel('Filter:').press('Enter');
        await page.locator('#DataTables_Table_2').getByText('SELECT').click();
      }


      await page.locator("#SellingArea").click();
      await page.locator("#SellingArea").fill(ProjectUnit.SaleArea);
      await page.locator("#AssetType").selectOption(ProjectUnit.AssetType);
      await page.locator('#titledeedarea').dblclick();
      await page.locator('#titledeedarea').fill(ProjectUnit.TitleArea);
      await page.locator('#sale_price_allocate').click();
      await page.locator('#sale_price_allocate').fill(ProjectUnit.SalePriceAllocate);
      await page.getByText("Save").click();

      const res = await page
        .locator("body > div.sweet-alert.showSweetAlert.visible > h2")
        .textContent();
      console.log(res);
      const containsComplete = res?.includes("Complete");
      if (containsComplete) {
        await page
          .locator(
            "body > div.sweet-alert.showSweetAlert.visible > div.sa-button-container > div > button"
          )
          .click();
        await page.waitForLoadState();
      }
    }
  });
});
