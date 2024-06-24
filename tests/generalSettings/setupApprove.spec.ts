import { test, expect } from "@playwright/test";
import { LoginPage } from "../../src/pages/common/login-page"
import dataSetting from "../../data/common/TestSetting.json"
import SetupApprove from "../../data/generalSettings/setupApprove.js";

const data = dataSetting.Login;
const setGroupData = SetupApprove[0]

test.describe("Setup Approve", () => {
  let page;
  let currentUrl = "";
  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto(data.site);
    await page.waitForSelector("#inputPassword");
    currentUrl=page.url();
  });
  test("Test Setup Approve BOM", async () => {
    // test.setTimeout(600000);
    await page.pause();
    await page.getByPlaceholder("Username").click({ force: true });
    await page.getByPlaceholder("Username").fill(data.username, { force: true });
    await page.getByPlaceholder("Password").click({ force: true });
    await page.getByPlaceholder("Password").fill(data.password, { force: true });
    await page.getByPlaceholder("Password").press("Enter");
    await page.waitForSelector(".thumbnail");
    await page.locator(".thumbnail").first().click({ force: true });
    await page.locator(".caption-overflow > span").click({ force: true });
    await expect(page).not.toHaveURL(data.site+"auth/companylist");
    await page.waitForLoadState();
    await page
      .getByRole("link", { name: "ระบบจัดการข้อมูลกลาง" })
      .click({ force: true });
    await expect(page).not.toHaveURL(data.site+"panel/office");
    await page.waitForLoadState();
    await page.locator("#btn_mg").click({ force: true });
    await page.waitForLoadState();

    
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
      .filter({ hasText: "BOM" })
      .click({ force: true });
    //Save Group
    await page.getByText("Add Group").click({ force: true });
    await page.locator("#groupname").click({ force: true });
    await page.locator("#groupname").fill(setGroupData.groupName);
    await page.locator("#remark").click({ force: true });
    await page.locator("#remark").fill("for test iot", { force: true });
    await page.locator("#department").selectOption(setGroupData.department);
    await page.getByText("Save Group").click({ force: true });
    //Save Group

await page.locator('a').filter({ hasText: 'BOM' }).click();

await page.getByLabel('Filter:').click();
await page.getByLabel('Filter:').fill(setGroupData.groupName);
await page.getByLabel('Filter:').press('Enter');


// Use evaluate to get the text content of the element
const Datanotfound = await page.evaluate(() => {
  const element = document.querySelector('td.dataTables_empty');
  return element ? element.textContent : null;
});

 // Check the text content
 if (Datanotfound !== 'No matching records found') {
     // Wait for the element to be present in the DOM and clickable
     await page.waitForSelector('a[onclick^="load_detail_arganizechart"]');
     // Click the element
     await page.locator('a[onclick^="load_detail_arganizechart"]').first().click({ force: true }); 
     await page.locator(`[id="addjobtitle"]`).click({ force: true });
     await page.locator('//div[@class="input-group-btn"]').first().click({ force: true });
     await page.waitForLoadState();
     await page.getByLabel('Search:').click();
     await page.getByLabel('Search:').fill(setGroupData.user);
     await page.getByLabel('Search:').press('Enter');
     await page.getByLabel('Search:').press('Tab');
     await page.getByLabel('No.: activate to sort column').press('Tab');
     await page.getByLabel('Project/Department: activate').press('Tab');
     await page.getByRole('row', { name: 'No.: activate to sort column' }).getByLabel('Active: activate to sort').press('Tab');
     await page.getByRole('button', { name: 'SELECT' }).click({ force: true });
     await page.getByText('Save', { exact: true }).click();
     await page.getByRole('heading', { name: 'Save Completed !' }).click({ force: true });
     await page.getByRole('button', { name: 'OK' }).click({ force: true });
 }

   
  currentUrl =  page.url();
  });

  test("Test Setup Approve BOQ", async () => {
    // test.setTimeout(600000);
    await page.goto(currentUrl);
    await page.locator("#ascrail2000 div").click({ force: true });
    await page.mouse.wheel(500, 0);

    await page
      .getByRole("link", { name: "Setup Project & Department" })
      .click({ force: true });
    await page
      .getByRole("link", { name: "Setup Approve" })
      .click({ force: true });
    await page.locator("a").filter({ hasText: "BOQ" }).click({ force: true });
    await page.locator("a").filter({ hasText: "BOQ" }).click({ force: true });
    await page.getByRole("heading", { name: "BOQ ON / OFF" }).click({ force: true });
    await page.getByLabel("Filter:").click({ force: true });
    await page.getByLabel("Filter:").fill(setGroupData.groupName);
    await page.getByLabel("Filter:").press("Enter");
    // // Use evaluate to get the text content of the element
    // const Datanotfound = await page.evaluate(() => {
    //   const element = document.querySelector('td.dataTables_empty');
    //   return element ? element.textContent : null;
    // });

    //  // Check the text content
    //  if (Datanotfound !== 'No matching records found') {
      
    await page.getByText("Add Group").click({ force: true });
    await page.locator("#groupname").click({ force: true });
    await page.locator("#groupname").fill(setGroupData.groupName);
    await page.locator("#remark").click({ force: true });
    await page.locator("#remark").fill(setGroupData.remark);
    await page.locator("#department").selectOption(setGroupData.department);
    await page.getByText("Save Group").click({ force: true });
//Save group
await page.click(`[onclick="choose('1')"]`)
    // await page.locator("a").filter({ hasText: "BOQ (1)" }).click({ force: true });

    // await page.locator("a").filter({ hasText: "BOQ (1)" }).click({ force: true });
    await page.getByLabel("Filter:").click({ force: true });
    await page.getByLabel("Filter:").click({ force: true });
    await page.getByLabel("Filter:").fill(setGroupData.groupName);
    await page.getByLabel("Filter:").press("Enter");
    await page
      .getByRole("gridcell", { name: "      " })
      .locator("a")
      .first()
      .click({ force: true });


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

  //   await page.click(`[id="addjobtitle"]`)
  //   //await page.locator("#addjobtitle").click({ force: true });
  //   await page.locator('//div[@class="input-group-btn"]').first().click({ force: true });
  //   await page.getByLabel("Search:").click({ force: true });
  //   await page.getByLabel("Search:").fill(setGroupData.user);
  //   await page.getByRole('button', { name: 'SELECT' }).click({ force: true });
  //   await page.getByText("Save", { exact: true }).click({ force: true });
  //   await page.getByRole("button", { name: "OK" }).click({ force: true });
  // //  }
  // currentUrl=page.url();
  });
  
  test("Test Setup Approve Cost Control", async () => {
    // test.setTimeout(600000);
    await page.goto(currentUrl);
    await page.locator("#ascrail2000 div").click({ force: true });
    await page.mouse.wheel(500, 0);

    await page
      .getByRole("link", { name: "Setup Project & Department" })
      .click({ force: true });
    await page
      .getByRole("link", { name: "Setup Approve" })
      .click({ force: true });


      await page.locator('a').filter({ hasText: 'Cost Control (2)' }).click();
     

      //Save group
      await page.getByText("Add Group").click({ force: true });
      await page.locator("#groupname").click({ force: true });
      await page.locator("#groupname").fill(setGroupData.groupName);
      await page.locator("#remark").click({force:true});
      await page.locator("#remark").fill(setGroupData.remark);
      await page.locator("#department").selectOption(setGroupData.department);
      await page.getByText("Save Group").click({force:true});
      //Save group

      await page.locator('a').filter({ hasText: 'Cost Control (2)' }).click();
      //await page.locator('a').filter({ hasText: 'Cost Control (2)' }).click({ force: true });
      await page.getByLabel('Filter:').click({ force: true });
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
  });


  test("Test Setup Approve Adjust Budget", async () => {
    // test.setTimeout(600000);
    await page.goto(currentUrl);
    await page.locator("#ascrail2000 div").click({ force: true });
    await page.mouse.wheel(500, 0);

    await page
      .getByRole("link", { name: "Setup Project & Department" })
      .click({ force: true });
    await page
      .getByRole("link", { name: "Setup Approve" })
      .click({ force: true });


      await page.locator('a').filter({ hasText: 'Adjust Budget (22)' }).click();
      // await page.locator('a').filter({ hasText: 'Adjust Budget' }).click({ force: true });
      // await page.locator('a').filter({ hasText: 'Adjust Budget' }).click({ force: true });

      //Save group
      await page.getByText("Add Group").click({ force: true });
      await page.locator("#groupname").click({ force: true });
      await page.locator("#groupname").fill(setGroupData.groupName);
      await page.locator("#remark").click({force:true});
      await page.locator("#remark").fill(setGroupData.remark);
      await page.locator("#department").selectOption(setGroupData.department);
      await page.getByText("Save Group").click({force:true});
      //Save group


      await page.locator('a').filter({ hasText: 'Adjust Budget (22)' }).click();
      //await page.locator('a').filter({ hasText: 'Adjust Budget (22)' }).click({ force: true });
      await page.getByLabel('Filter:').click({ force: true });
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
  });

  test("Test Setup Approve Purchase Requisition", async () => {
    // test.setTimeout(600000);
    await page.goto(currentUrl);
    await page.locator("#ascrail2000 div").click({ force: true });
    await page.mouse.wheel(500, 0);

    await page
      .getByRole("link", { name: "Setup Project & Department" })
      .click({ force: true });
    await page
      .getByRole("link", { name: "Setup Approve" })
      .click({ force: true });


      await page.locator('a').filter({ hasText: 'Purchase Requisition (3)' }).click();
      // await page.locator('a').filter({ hasText: 'Purchase Requisition' }).click({ force: true });
      // await page.locator('a').filter({ hasText: 'Purchase Requisition' }).click({ force: true });

      //Save group
      await page.getByText("Add Group").click({ force: true });
      await page.locator("#groupname").click({ force: true });
      await page.locator("#groupname").fill(setGroupData.groupName);
      await page.locator("#remark").click({force:true});
      await page.locator("#remark").fill(setGroupData.remark);
      await page.locator("#department").selectOption(setGroupData.department);
      await page.getByText("Save Group").click({force:true});
      //Save group


      await page.locator('a').filter({ hasText: 'Purchase Requisition (3)' }).click();
      //await page.locator('a').filter({ hasText: 'Purchase Requisition (3)' }).click({ force: true });
      await page.getByLabel('Filter:').click({ force: true });
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
  });


  test("Test Setup Approve Purchase Requisition Decrement", async () => {
    // test.setTimeout(600000);
    await page.goto(currentUrl);
    await page.locator("#ascrail2000 div").click({ force: true });
    await page.mouse.wheel(500, 0);

    await page
      .getByRole("link", { name: "Setup Project & Department" })
      .click({ force: true });
    await page
      .getByRole("link", { name: "Setup Approve" })
      .click({ force: true });


      await page.locator('a').filter({ hasText: 'Purchase Requisition Decrement (4)' }).click();
      // await page.locator('a').filter({ hasText: 'Purchase Requisition Decrement' }).click({ force: true });
      // await page.locator('a').filter({ hasText: 'Purchase Requisition Decrement' }).click({ force: true });

      //Save group
      await page.getByText("Add Group").click({ force: true });
      await page.locator("#groupname").click({ force: true });
      await page.locator("#groupname").fill(setGroupData.groupName);
      await page.locator("#remark").click({force:true});
      await page.locator("#remark").fill(setGroupData.remark);
      await page.locator("#department").selectOption(setGroupData.department);
      await page.getByText("Save Group").click({force:true});
      //Save group


      await page.locator('a').filter({ hasText: 'Purchase Requisition Decrement (4)' }).click();
      //await page.locator('a').filter({ hasText: 'Purchase Requisition Decrement (4)' }).click({ force: true });
      await page.getByLabel('Filter:').click({ force: true });
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
  });

  test("Test Setup Approve Purchase Order", async () => {
    // test.setTimeout(600000);
    await page.goto(currentUrl);
    await page.locator("#ascrail2000 div").click({ force: true });
    await page.mouse.wheel(500, 0);

    await page
      .getByRole("link", { name: "Setup Project & Department" })
      .click({ force: true });
    await page
      .getByRole("link", { name: "Setup Approve" })
      .click({ force: true });


      
      await page.locator('a').filter({ hasText: 'Purchase Order (5)' }).click();
      // await page.locator('a').filter({ hasText: 'Purchase Order' }).click({ force: true });
      // await page.locator('a').filter({ hasText: 'Purchase Order' }).click({ force: true });

      //Save group
      await page.getByText("Add Group").click({ force: true });
      await page.locator("#groupname").click({ force: true });
      await page.locator("#groupname").fill(setGroupData.groupName);
      await page.locator("#remark").click({force:true});
      await page.locator("#remark").fill(setGroupData.remark);
      await page.locator("#department").selectOption(setGroupData.department);
      await page.getByText("Save Group").click({force:true});
      //Save group


      await page.locator('a').filter({ hasText: 'Purchase Order (5)' }).click();
      //await page.locator('a').filter({ hasText: 'Purchase Order (5)' }).click({ force: true });
      await page.getByLabel('Filter:').click({ force: true });
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
  });

  test("Test Setup Purchase Order Advance Deposit", async () => {
    // test.setTimeout(600000);
    await page.goto(currentUrl);
    await page.locator("#ascrail2000 div").click({ force: true });
    await page.mouse.wheel(500, 0);

    await page
      .getByRole("link", { name: "Setup Project & Department" })
      .click({ force: true });
    await page
      .getByRole("link", { name: "Setup Approve" })
      .click({ force: true });


      
      await page.locator('a').filter({ hasText: 'Purchase Order Advance' }).click({ force: true });
      // await page.locator('a').filter({ hasText: 'Purchase Order Advance Deposit' }).click({ force: true });
      // await page.locator('a').filter({ hasText: 'Purchase Order Advance Deposit' }).click({ force: true });

      //Save group
      await page.getByText("Add Group").click({ force: true });
      await page.locator("#groupname").click({ force: true });
      await page.locator("#groupname").fill(setGroupData.groupName);
      await page.locator("#remark").click({force:true});
      await page.locator("#remark").fill(setGroupData.remark);
      await page.locator("#department").selectOption(setGroupData.department);
      await page.getByText("Save Group").click({force:true});
      //Save group

      
      await page.locator('a').filter({ hasText: 'Purchase Order Advance' }).click();
      //await page.locator('a').filter({ hasText: 'Purchase Order Advance' }).click({ force: true });
      await page.getByLabel('Filter:').click({ force: true });
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
  });

  test("Test Setup Purchase Order Decrement", async () => {
    // test.setTimeout(600000);
    await page.goto(currentUrl);
    await page.locator("#ascrail2000 div").click({ force: true });
    await page.mouse.wheel(500, 0);

    await page
      .getByRole("link", { name: "Setup Project & Department" })
      .click({ force: true });
    await page
      .getByRole("link", { name: "Setup Approve" })
      .click({ force: true });


      
      await page.locator('a').filter({ hasText: 'Purchase Order Decrement (7)' }).click();
      // await page.locator('a').filter({ hasText: 'Purchase Order Decrement' }).click({ force: true });
      // await page.locator('a').filter({ hasText: 'Purchase Order Decrement' }).click({ force: true });

      //Save group
      await page.getByText("Add Group").click({ force: true });
      await page.locator("#groupname").click({ force: true });
      await page.locator("#groupname").fill(setGroupData.groupName);
      await page.locator("#remark").click({force:true});
      await page.locator("#remark").fill(setGroupData.remark);
      await page.locator("#department").selectOption(setGroupData.department);
      await page.getByText("Save Group").click({force:true});
      //Save group


      await page.locator('a').filter({ hasText: 'Purchase Order Decrement (7)' }).click();
      //await page.locator('a').filter({ hasText: 'Purchase Order Decrement (7)' }).click({ force: true });
      await page.getByLabel('Filter:').click({ force: true });
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
  });

  test("Test Setup Work Order", async () => {
    // test.setTimeout(600000);
    await page.goto(currentUrl);
    await page.locator("#ascrail2000 div").click({ force: true });
    await page.mouse.wheel(500, 0);

    await page
      .getByRole("link", { name: "Setup Project & Department" })
      .click({ force: true });
    await page
      .getByRole("link", { name: "Setup Approve" })
      .click({ force: true });


      
      await page.locator('a').filter({ hasText: 'Work Order (8)' }).click();
      // await page.locator('a').filter({ hasText: 'Work Order' }).click({ force: true });
      // await page.locator('a').filter({ hasText: 'Work Order' }).click({ force: true });

      //Save group
      await page.getByText("Add Group").click({ force: true });
      await page.locator("#groupname").click({ force: true });
      await page.locator("#groupname").fill(setGroupData.groupName);
      await page.locator("#remark").click({force:true});
      await page.locator("#remark").fill(setGroupData.remark);
      await page.locator("#department").selectOption(setGroupData.department);
      await page.getByText("Save Group").click({force:true});
      //Save group


      await page.locator('a').filter({ hasText: 'Work Order (8)' }).click();
      //await page.locator('a').filter({ hasText: 'Work Order (8)' }).click({ force: true });
      await page.getByLabel('Filter:').click({ force: true });
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
  });

  test("Test Setup Work Order Decrement", async () => {
    // test.setTimeout(600000);
    await page.goto(currentUrl);
    await page.locator("#ascrail2000 div").click({ force: true });
    await page.mouse.wheel(500, 0);

    await page
      .getByRole("link", { name: "Setup Project & Department" })
      .click({ force: true });
    await page
      .getByRole("link", { name: "Setup Approve" })
      .click({ force: true });


      
      await page.locator('a').filter({ hasText: 'Work Order Decrement (23)' }).click();
      // await page.locator('a').filter({ hasText: 'Work Order Decrement' }).click({ force: true });
      // await page.locator('a').filter({ hasText: 'Work Order Decrement' }).click({ force: true });

      //Save group
      await page.getByText("Add Group").click({ force: true });
      await page.locator("#groupname").click({ force: true });
      await page.locator("#groupname").fill(setGroupData.groupName);
      await page.locator("#remark").click({force:true});
      await page.locator("#remark").fill(setGroupData.remark);
      await page.locator("#department").selectOption(setGroupData.department);
      await page.getByText("Save Group").click({force:true});
      //Save group


      await page.locator('a').filter({ hasText: 'Work Order Decrement (23)' }).click();
      //await page.locator('a').filter({ hasText: 'Work Order Decrement (23)' }).click({ force: true });
      await page.getByLabel('Filter:').click({ force: true });
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
  });



  test("Test Setup Progress Subcontrator", async () => {
    // test.setTimeout(600000);
    await page.goto(currentUrl);
    await page.locator("#ascrail2000 div").click({ force: true });
    await page.mouse.wheel(500, 0);

    await page
      .getByRole("link", { name: "Setup Project & Department" })
      .click({ force: true });
    await page
      .getByRole("link", { name: "Setup Approve" })
      .click({ force: true });


      
      await page.locator('a').filter({ hasText: 'Progress Subcontrator (9)' }).click();
      // await page.locator('a').filter({ hasText: 'Progress Subcontrator' }).click({ force: true });
      // await page.locator('a').filter({ hasText: 'Progress Subcontrator' }).click({ force: true });

      //Save group
      await page.getByText("Add Group").click({ force: true });
      await page.locator("#groupname").click({ force: true });
      await page.locator("#groupname").fill(setGroupData.groupName);
      await page.locator("#remark").click({force:true});
      await page.locator("#remark").fill(setGroupData.remark);
      await page.locator("#department").selectOption(setGroupData.department);
      await page.getByText("Save Group").click({force:true});
      //Save group


      await page.locator('a').filter({ hasText: 'Progress Subcontrator (9)' }).click();
      // await page.locator('a').filter({ hasText: 'Progress Subcontrator (9)' }).click({ force: true });
      await page.getByLabel('Filter:').click({ force: true });
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

  });

  test("Test Setup Contract Close", async () => {
    // test.setTimeout(600000);
    await page.goto(currentUrl);
    await page.locator("#ascrail2000 div").click({ force: true });
    await page.mouse.wheel(500, 0);

    await page
      .getByRole("link", { name: "Setup Project & Department" })
      .click({ force: true });
    await page
      .getByRole("link", { name: "Setup Approve" })
      .click({ force: true });


      
      await page.locator('a').filter({ hasText: 'Contract Close (11)' }).click();
      // await page.locator('a').filter({ hasText: 'Contract Close' }).click({ force: true });
      // await page.locator('a').filter({ hasText: 'Contract Close' }).click({ force: true });

      //Save group
      await page.getByText("Add Group").click({ force: true });
      await page.locator("#groupname").click({ force: true });
      await page.locator("#groupname").fill(setGroupData.groupName);
      await page.locator("#remark").click({force:true});
      await page.locator("#remark").fill(setGroupData.remark);
      await page.locator("#department").selectOption(setGroupData.department);
      await page.getByText("Save Group").click({force:true});
      //Save group

      await page.locator('a').filter({ hasText: 'Contract Close (11)' }).click();
      // await page.locator('a').filter({ hasText: 'Contract Close (11)' }).click({ force: true });
      await page.getByLabel('Filter:').click({ force: true });
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

  });

  test("Test Setup Petty Cash", async () => {
    // test.setTimeout(600000);
    await page.goto(currentUrl);
    await page.locator("#ascrail2000 div").click({ force: true });
    await page.mouse.wheel(500, 0);

    await page
      .getByRole("link", { name: "Setup Project & Department" })
      .click({ force: true });
    await page
      .getByRole("link", { name: "Setup Approve" })
      .click({ force: true });


      
      await page.locator('a').filter({ hasText: 'Petty Cash (13)' }).click();
      // await page.locator('a').filter({ hasText: 'Petty Cash' }).click({ force: true });
      // await page.locator('a').filter({ hasText: 'Petty Cash' }).click({ force: true });

      //Save group
      await page.getByText("Add Group").click({ force: true });
      await page.locator("#groupname").click({ force: true });
      await page.locator("#groupname").fill(setGroupData.groupName);
      await page.locator("#remark").click({force:true});
      await page.locator("#remark").fill(setGroupData.remark);
      await page.locator("#department").selectOption(setGroupData.department);
      await page.getByText("Save Group").click({force:true});
      //Save group

      await page.locator('a').filter({ hasText: 'Petty Cash (13)' }).click();
      //await page.locator('a').filter({ hasText: 'Petty Cash (13)' }).click({ force: true });
      await page.getByLabel('Filter:').click({ force: true });
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

  });

  test("Test Setup Purchase Order Receive", async () => {
    // test.setTimeout(600000);
    await page.goto(currentUrl);
    await page.locator("#ascrail2000 div").click({ force: true });
    await page.mouse.wheel(500, 0);

    await page
      .getByRole("link", { name: "Setup Project & Department" })
      .click({ force: true });
    await page
      .getByRole("link", { name: "Setup Approve" })
      .click({ force: true });


      
      await page.locator('a').filter({ hasText: 'Purchase Order Receive (15)' }).click();
      // await page.locator('a').filter({ hasText: 'Purchase Order Receive' }).click({ force: true });
      // await page.locator('a').filter({ hasText: 'Purchase Order Receive' }).click({ force: true });

      //Save group
      await page.getByText("Add Group").click({ force: true });
      await page.locator("#groupname").click({ force: true });
      await page.locator("#groupname").fill(setGroupData.groupName);
      await page.locator("#remark").click({force:true});
      await page.locator("#remark").fill(setGroupData.remark);
      await page.locator("#department").selectOption(setGroupData.department);
      await page.getByText("Save Group").click({force:true});
      //Save group


      await page.locator('a').filter({ hasText: 'Purchase Order Receive (15)' }).click();
      //await page.locator('a').filter({ hasText: 'Purchase Order Receive (15)' }).click({ force: true });
      await page.getByLabel('Filter:').click({ force: true });
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

  });

  test("Test Setup Debit/Credit Note", async () => {
    // test.setTimeout(600000);
    await page.goto(currentUrl);
    await page.locator("#ascrail2000 div").click({ force: true });
    await page.mouse.wheel(500, 0);

    await page
      .getByRole("link", { name: "Setup Project & Department" })
      .click({ force: true });
    await page
      .getByRole("link", { name: "Setup Approve" })
      .click({ force: true });


      
      // await page.locator('a').filter({ hasText: 'Debit / Credit Note' }).click({ force: true });
      // await page.locator('a').filter({ hasText: 'Debit / Credit Note' }).click({ force: true });

      await page.getByText('Debit Note / Credit Note (18)').click();

      //Save group
      await page.getByText("Add Group").click({ force: true });
      await page.locator("#groupname").click({ force: true });
      await page.locator("#groupname").fill(setGroupData.groupName);
      await page.locator("#remark").click({force:true});
      await page.locator("#remark").fill(setGroupData.remark);
      await page.locator("#department").selectOption(setGroupData.department);
      await page.getByText("Save Group").click({force:true});
      //Save group


      await page.getByText('Debit Note / Credit Note (18)').click();
      //await page.locator('a').filter({ hasText: 'Debit Note / Credit Note (18)' }).click({ force: true });
      await page.getByLabel('Filter:').click({ force: true });
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

  });

  test("Test Setup Issue", async () => {
    // test.setTimeout(600000);
    await page.goto(currentUrl);
    await page.locator("#ascrail2000 div").click({ force: true });
    await page.mouse.wheel(500, 0);

    await page
      .getByRole("link", { name: "Setup Project & Department" })
      .click({ force: true });
    await page
      .getByRole("link", { name: "Setup Approve" })
      .click({ force: true });


      
      // await page.locator('a').filter({ hasText: 'Issue' }).click({ force: true });
      // await page.locator('a').filter({ hasText: 'Issue' }).click({ force: true });
      await page.getByText('Issue (20)').click({ force: true });

      //Save group
      await page.getByText("Add Group").click({ force: true });
      await page.locator("#groupname").click({ force: true });
      await page.locator("#groupname").fill(setGroupData.groupName);
      await page.locator("#remark").click({force:true});
      await page.locator("#remark").fill(setGroupData.remark);
      await page.locator("#department").selectOption(setGroupData.department);
      await page.getByText("Save Group").click({force:true});
      //Save group

      await page.getByText('Issue (20)').click();
      await page.getByLabel('Filter:').click({ force: true });
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

  });


});

     