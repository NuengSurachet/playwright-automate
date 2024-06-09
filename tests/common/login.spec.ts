import {  chromium, expect, test } from '@playwright/test';
// เรียกใช้คลาส LoginPage ที่เราได้สร้างไว้แล้วในไฟล์ login-page.ts
import { LoginPage } from '../../src/pages/common/login-page';



// เริ่มสร้าง test suite สำหรับการทดสอบการล็อกอิน
test.describe('Login Tests',  () => {
//  const browser =  await chromium.launch();
//  const context = await browser.newContext()
//  const page =await context.newPage();

    test('Successful login with valid credentials', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
    
        // Attempt to login with valid credentials
        await loginPage.login('standard_user', 'secret_sauce');
    
        // Verify that user is logged in successfully
        //เป็นการตรวจสอบว่า URL ของหน้าปัจจุบันไม่ใช่ 'https://www.saucedemo.com/'
        await expect(page).not.toHaveURL('https://www.saucedemo.com/');
      });

    // เริ่มเขียน test case สำหรับการล็อกอินไม่สำเร็จด้วยข้อมูลเข้าสู่ระบบที่ไม่ถูกต้อง
    test('Unsuccessful login with invalid credentials', async ({ page }) => {
      // สร้างอินสแตนซ์ของ LoginPage โดยส่ง page ไปยัง constructor
      const loginPage = new LoginPage(page);
      // เรียกใช้เมทอด goto() เพื่อไปยังหน้า Login
      await loginPage.goto();
  
      // พยายามที่จะ login ด้วยข้อมูลเข้าสู่ระบบที่ไม่ถูกต้อง
      await loginPage.login('invalid-username', 'invalid-password');
  
      // ตรวจสอบว่ามีข้อความแสดงข้อผิดพลาดหลังจากการล็อกอินไม่สำเร็จปรากฏขึ้น
      await loginPage.verifyErrorMessage();
    });
  });