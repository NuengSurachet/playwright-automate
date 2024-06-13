import * as path from 'path';



export function GetprojectRoot(): string {
    // อ่านไฟล์ Excel
    const currentDir = __dirname;

    // // ใช้ __filename เพื่อหา path ของไฟล์ปัจจุบัน
     const currentFile = __filename;
    
    // รวบรวม path ที่คุณต้องการหา
     let projectRoot = path.resolve(currentDir, '../..'); // สมมติว่าโปรเจ็กต์อยู่ใน directory ข้างบน
    
     console.log('Current Directory:', currentDir);
     console.log('Current File:', currentFile);
     console.log('Project Root:', projectRoot);
  
    return projectRoot;
  }



