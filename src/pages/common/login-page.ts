import { expect, Page } from "@playwright/test";
import dataSetting from "../../../data/common/TestSetting.json";
import changlanguage from "../../utils/function/changlanguage.spec";

// สร้างคลาส LoginPage เพื่อเก็บเมทอดและสมบัติที่เกี่ยวข้องกับหน้า Login
export class LoginPage {
  // ประกาศตัวแปร page เป็น private readonly เพื่อเก็บ reference ของหน้าที่กำลังใช้อยู่
  private readonly page: Page;

  // ประกาศตัวแปรสำหรับ selector ของ elements ต่างๆ บนหน้า Login
  private readonly usernameInput = 'input[id="inputEmail"]';
  private readonly passwordInput = 'input[id="inputPassword"]';
  private readonly errorMessage = 'h2[data-test="Login Error."]';

  // สร้าง constructor ที่รับ page เป็นพารามิเตอร์
  constructor(page: Page) {
    // กำหนดค่า page ที่รับเข้ามาให้กับ this.page
    this.page = page;
  }
  // สร้างเมทอด goto() เพื่อไปยังหน้า Login ที่ URL 'https://example.com/login'
  async goto(site_url: string): Promise<void> {
    await this.page.goto(site_url + "/auth/index");
    await this.page.waitForLoadState("load"); // รอให้หน้าโหลดเสร็จ
  }

  // สร้างเมทอด login() เพื่อทำการ login ด้วยชื่อผู้ใช้และรหัสผ่านที่รับเข้ามาเป็นพารามิเตอร์
  async login(username: string, password: string): Promise<void> {
    // ใช้ fill() เพื่อกรอกชื่อผู้ใช้และรหัสผ่านใน input fields และ click() เพื่อกดปุ่มเข้าสู่ระบบ
    await this.page.fill(this.usernameInput, username, { force: true });
    debugger;
    await this.page.fill(this.passwordInput, password.toString(), {
      force: true,
    });
    // await this.page.click(this.loginButton);
    await this.page
      .getByRole("button", { name: "Login" })
      .click({ force: true });

    try {
      const img = await this.page.locator('//div[@class="thumb"]//img').nth(11);
      const icon = await this.page.locator(
        '//i[@class="glyphicon glyphicon-log-in"]'
      ).nth(11);
      await img.hover();
      await icon.hover({ force: true });
      await icon.click({ force: true });
    
    } catch (error) {
      await this.page.waitForLoadState();
    }
  }

  async loginByUserType(userType: string): Promise<void> {
    // ใช้ fill() เพื่อกรอกชื่อผู้ใช้และรหัสผ่านใน input fields และ click() เพื่อกดปุ่มเข้าสู่ระบบ
    await this.page.fill(
      this.usernameInput,
      dataSetting.Users[userType].username,
      { force: true }
    );
    debugger;
    await this.page.fill(
      this.passwordInput,
      dataSetting.Users[userType].password.toString(),
      { force: true }
    );
    // await this.page.click(this.loginButton);
    await this.page
      .getByRole("button", { name: "Login" })
      .click({ force: true });
    try {
      await this.page.locator(".thumbnail").first().click({ force: true });
      await this.page
        .locator(".caption-overflow > span")
        .click({ force: true });
      await this.page.waitForLoadState();
    } catch (error) {
      await this.page.waitForSelector(".thumbnail");
      await this.page.locator(".thumbnail").first().click({ force: true });
      await this.page
        .locator(".caption-overflow > span")
        .click({ force: true });
      await this.page.waitForLoadState();
    }
  }

  // สร้างเมทอด verifyErrorMessage() เพื่อตรวจสอบว่ามีข้อความแสดงข้อผิดพลาดหลังจากการล็อกอินไม่สำเร็จปรากฏขึ้น
  async verifyErrorMessage(): Promise<void> {
    // รอให้ selector ของ error message ปรากฏขึ้น
    await this.page.waitForSelector(this.errorMessage);
  }
}
