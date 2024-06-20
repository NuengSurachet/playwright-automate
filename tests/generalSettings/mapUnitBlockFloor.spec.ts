import { expect, test } from "@playwright/test";
import dataSetting from "../../data/common/TestSetting.json";
import { LoginPage } from "../../src/pages/common/login-page";
import { mapUnitBlockFloorData } from "../../data/generalSettings/mapUnitBlockFloor";

const dataLogin = dataSetting.Login;
const data = mapUnitBlockFloorData;

test.describe("Genaral Settings", async () => {
  test("Setup Phase Building", async ({ page }) => {
    await page.goto(dataLogin.site);
    const loginPage = new LoginPage(page);
    await loginPage.goto(dataLogin.site);
    await loginPage.login(dataLogin.username, dataLogin.password);
    await page.getByRole("link", { name: "ระบบจัดการข้อมูลกลาง" }).click();
    await page.waitForLoadState();
    await page.locator("a").filter({ hasText: "Genaral Settings" }).click();
    await page.getByRole("link", { name: " Setup Project Unit" }).click();
    await page.getByPlaceholder("Type to filter...").click();
    await page.getByPlaceholder("Type to filter...").fill(data.projectName);
    const linkSelector = `//td[contains(text(), '${data.projectName}')]/following-sibling::td[@class="text-center"]/a[contains(@class, 'label-primary')]`;
    await page.click(linkSelector);

    await page.getByRole("link", { name: " Setup Block / Floor" }).click();
    await page.getByPlaceholder("Type to filter...").click();
    await page.getByPlaceholder("Type to filter...").fill(data.projectName);
    const linkSelector2 = `//td[contains(text(), '${data.projectName}')]/following-sibling::td[@class="text-center"]/a[contains(@class, 'label-primary')]`;
    await page.click(linkSelector2);

    const blockCode = data.blockCode

    const blockCodeCell = await page.getByRole('gridcell', { name: blockCode });

    // Find the row containing the block code
    const row = blockCodeCell.locator('xpath=ancestor::tr');

    // Find the specific link within that row
    const link = row.locator('a');

    // Perform an action on the link, such as clicking it
    await link.first().click();

    for (const unitName of data.unitNames) {
      const buttonSelector = `//td[contains(text(), '${unitName}')]/following-sibling::td[@class="text-center"]/button`
      await page.click(buttonSelector);
    }
    await page.getByRole('button', { name: ' Save' }).click();
    await page.getByRole('button', { name: 'OK' }).click();
    await page.getByRole('link', { name: ' Setup Project Unit' }).click();
    await page.getByRole('row', { name: data.projectName })
    .getByRole('link').click();
  });
});
