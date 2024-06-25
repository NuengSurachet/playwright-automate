import { Page } from "@playwright/test";
import SetupApprove from "../../data/generalSettings/setupApprove.js";

const setGroupData = SetupApprove[0]

export const setupUserApprove = async (page: Page) => {
    await page.locator('input[type="search"]').click({ force: true });
  
    await page.getByLabel('Filter:').fill(setGroupData.groupName);
    await page.getByLabel('Filter:').press('Enter');
    await page.getByRole('gridcell', { name: '      ' }).locator('a').first().click({ force: true });

    //Add row
    await page.locator(`[id="addjobtitle"]`).click({ force: true });
    await page.locator('//div[@class="input-group-btn"]').first().click({ force: true });
    await page.waitForLoadState();      
    await page.getByLabel('Search:').click({ force: true });
    await page.getByLabel('Search:').fill(setGroupData.user);
    await page.getByLabel('Search:').press('Tab');
    await page.getByLabel('No.: activate to sort column').press('Tab');
    await page.getByLabel('Project/Department: activate').press('Tab');
    await page.getByRole('row', { name: 'No.: activate to sort column' }).getByLabel('Active: activate to sort').press('Tab');
    await page.getByRole('button', { name: 'SELECT' }).click({ force: true });
    
    await page.getByText('Save', { exact: true }).click();
   await page.getByRole('heading', { name: 'Save Completed !' }).click({ force: true });
   await page.getByRole('button', { name: 'OK' }).click({ force: true });
  };