import { test, expect } from "@playwright/test";
import { LoginPage } from "../../../src/pages/common/login-page";
import { describe } from "node:test";

const deleteRow = async (page) => {
  await page.locator("#delete110300001MM1").click();
  await page.getByRole("button", { name: "Ok" }).click();
};

describe("ระบบจัดการในสำนักงาน", () => {
  test("PoOnlyAdvance", async ({ page }) => {
  
  });
});
