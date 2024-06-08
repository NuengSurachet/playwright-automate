# playwright-automate
# โฟลเดอร์

tests/   test scripts แบ่งตามเมนูหลัก เช่น crm และ admin ในแต่ละโฟลเดอร์ของเมนูหลักจะมีการทดสอบเมนูย่อยต่าง ๆ เช่น lead.spec.js และ customer.spec.js

tests/helpers/   โฟลเดอร์นี้จะเก็บ helper functions ที่ใช้ใน test scripts เช่น  general-helpers.js  สำหรับฟังก์ชันทั่วไป

src/pages/  โฟลเดอร์นี้จะเก็บ page object models ของแต่ละหน้าในระบบ โดยแบ่งตามเมนูหลักและเมนูย่อย เช่น lead-page.js และ customer-page.js มีโฟลเดอร์ common สำหรับหน้าเพจที่ใช้ร่วมกัน เช่น หน้า login และ dashboard

data/   โฟลเดอร์นี้จะเก็บข้อมูลทดสอบ เช่นไฟล์ test-data.xlsx

reports/screenshots  เก็บรูป error log

reports/result  เก็บผลการทดสอบ

# How to run testing
![2024-06-08T15_02_50](https://github.com/tannaporn/playwright-automate/assets/68152912/b1edf7ed-00b3-4ca9-b630-698a61d53d5e)
