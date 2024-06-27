// global-setup.ts
import { FullConfig } from '@playwright/test';
import dotenv from 'dotenv';
import { resolve } from 'path';

function loadEnvFile(env: string) {
  const envFilePath = resolve(__dirname, `./environment/.env.${env}`);
  console.log(__dirname);
  
  dotenv.config({ path: envFilePath });
}

export default async function globalSetup(config: FullConfig) {
  // ระบุ environment ที่ต้องการใช้y
  const environment = process.env.TEST_ENV?.trim() || 'A'; // ค่าเริ่มต้นเป็น 'A'
  loadEnvFile(environment);

  // สามารถเข้าถึงตัวแปรจาก process.env ได้ที่นี่
  console.log('BASE_URL:', process.env.BASE_URL);
  console.log('username:', process.env.username);
}
