import { expect, Page } from "@playwright/test";
import SetupApprove from "../../data/generalSettings/setupApprove.js";
import dataSetting from "../../data/common/TestSetting.json";

const data = dataSetting.Login;
const setGroupData = SetupApprove[0];

export const chooseMenu = async (page: Page) => {
  await page.locator("#ascrail2000 div").click();
  await page.mouse.wheel(500, 0);

  await page
    .getByRole("link", { name: "Setup Project & Department" })
    .click();
  await page
    .getByRole("link", { name: "Setup Approve" })
    .click();
};
export const setupUserApproveGroup = async (page: Page) => {
  //Save Group
  await page.getByText("Add Group").click();
  await page.locator("#groupname").click();
  await page.locator("#groupname").fill(setGroupData.groupName);
  await page.locator("#remark").click();
  await page.locator("#remark").fill("for test iot", );
  //await page.locator("#department").selectOption(setGroupData.department);
  await page
    .locator("#department")
    .selectOption(await page.locator("#department").selectOption({ index: 2 }));

  await page.getByText("Save Group").click();
  //Save Group
};

export const setupUserApprove = async (page: Page) => {
  await page.locator('input[type="search"]').click();

  await page.locator('input[type="search"]').fill(setGroupData.groupName);
  await page.locator('input[type="search"]').press("Enter");
  await page
    .getByRole("gridcell", { name: "      " })
    .locator("a")
    .first()
    .click();

  //Add row
  await page.locator(`[id="addjobtitle"]`).click();
  await page
    .locator('//div[@class="input-group-btn"]')
    .first()
    .click();
  await page.waitForLoadState();
  await page.getByLabel("Search:").click();
  await page.getByLabel("Search:").fill(setGroupData.user);
  await page
    .locator("button")
    .filter({ hasText: "SELECT" })
    .click();
  await page.getByText("Save", { exact: true }).click();
  await page.locator("button").filter({ hasText: "OK" }).click();
};
