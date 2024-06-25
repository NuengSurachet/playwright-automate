import { expect, Page } from "@playwright/test";
import SetupApprove from "../../data/generalSettings/setupApprove.js";
import dataSetting from "../../data/common/TestSetting.json";

const data = dataSetting.Login;
const setGroupData = SetupApprove[0]

export const chooseMenu=async(page:Page)=>{
   
    await page.locator("#ascrail2000 div").click({ force: true });
    await page.mouse.wheel(500, 0);

    await page
      .getByRole("link", { name: "Setup Project & Department" })
      .click({ force: true });
    await page
      .getByRole("link", { name: "Setup Approve" })
      .click({ force: true });
}
export const setupUserApproveGroup = async (page: Page) => {
   //Save Group
   await page.getByText("Add Group").click({ force: true });
   await page.locator("#groupname").click({ force: true });
   await page.locator("#groupname").fill(setGroupData.groupName);
   await page.locator("#remark").click({ force: true });
   await page.locator("#remark").fill("for test iot", { force: true });
   await page.locator("#department").selectOption(setGroupData.department);
   await page.getByText("Save Group").click({ force: true });
   //Save Group
  };


export const setupUserApprove = async (page: Page) => {
    await page.locator('input[type="search"]').click({ force: true });
  
    await page.locator('input[type="search"]').fill(setGroupData.groupName);
    await page.locator('input[type="search"]').press('Enter');
    await page.getByRole('gridcell', { name: '      ' }).locator('a').first().click({ force: true });

    //Add row
    await page.locator(`[id="addjobtitle"]`).click({ force: true });
    await page.locator('//div[@class="input-group-btn"]').first().click({ force: true });
    await page.waitForLoadState();      
    await page.getByLabel('Search:').click({ force: true });
    await page.getByLabel('Search:').fill(setGroupData.user);
    await page.locator('button').filter({hasText:'SELECT'}).click({ force: true });
    await page.getByText('Save', { exact: true }).click();
   await page.locator('button').filter({hasText:'OK'}).click({ force: true });
  };