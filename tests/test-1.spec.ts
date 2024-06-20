import { test, expect } from "@playwright/test";

test("Setup Permission Report", async ({ page }) => {
  //fullScreenMode(page);
  test.setTimeout(600000);
  await page.goto("https://www.google.com/");

  const idValue = await page
    .locator(`[class="lnXdpd"]`)

    .getAttribute("alt");

  // แสดงค่า id ที่ได้
  console.log(idValue);
  await page.locator(`[class="gLFyf"]`).fill(idValue || "asd");
  await page.getByLabel("ค้นหาด้วย Google").first().click();
  await page.getByRole("link", { name: "รูปภาพ" }).click();
  const id = await page.locator(`[class="YQ4gaf"]`).nth(2).getAttribute("id");
  console.log(id);

  // await page.getByRole("button", { name: " Close" }).click();
});
