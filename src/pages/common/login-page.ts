import { Page } from '@playwright/test';

// สร้างคลาส LoginPage เพื่อเก็บเมทอดและสมบัติที่เกี่ยวข้องกับหน้า Login
export class LoginPage {
    // ประกาศตัวแปร page เป็น private readonly เพื่อเก็บ reference ของหน้าที่กำลังใช้อยู่
  private readonly page: Page;

   // ประกาศตัวแปรสำหรับ selector ของ elements ต่างๆ บนหน้า Login
   private readonly usernameInput = 'input[id="user-name"]';
  private readonly passwordInput = 'input[id="password"]';
  private readonly loginButton = 'input[id="login-button"]';
  private readonly errorMessage = 'h3[data-test="error"]';

   // สร้าง constructor ที่รับ page เป็นพารามิเตอร์
  constructor(page: Page) {
    // กำหนดค่า page ที่รับเข้ามาให้กับ this.page
    this.page = page;
  }

   // สร้างเมทอด goto() เพื่อไปยังหน้า Login ที่ URL 'https://example.com/login'
   async goto(): Promise<void> {
    await this.page.goto('https://www.saucedemo.com/');
    await this.page.waitForLoadState('load'); // รอให้หน้าโหลดเสร็จ
  }

  // สร้างเมทอด login() เพื่อทำการ login ด้วยชื่อผู้ใช้และรหัสผ่านที่รับเข้ามาเป็นพารามิเตอร์
  async login(username: string, password: string): Promise<void> {
    // ใช้ fill() เพื่อกรอกชื่อผู้ใช้และรหัสผ่านใน input fields และ click() เพื่อกดปุ่มเข้าสู่ระบบ
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.loginButton);
  }

  // สร้างเมทอด verifyErrorMessage() เพื่อตรวจสอบว่ามีข้อความแสดงข้อผิดพลาดหลังจากการล็อกอินไม่สำเร็จปรากฏขึ้น
  async verifyErrorMessage(): Promise<void> {
    // รอให้ selector ของ error message ปรากฏขึ้น
    await this.page.waitForSelector(this.errorMessage);
  }

}