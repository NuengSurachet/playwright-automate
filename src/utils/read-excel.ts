import * as XLSX from 'xlsx';

/**
 * อ่านข้อมูลจากไฟล์ Excel และส่งกลับเป็น JSON
 * @param filePath พาธของไฟล์ Excel
 * @returns ข้อมูลจากไฟล์ Excel ในรูปแบบ JSON
 */
export function readExcelFile(filePath: string): any[] {
  // อ่านไฟล์ Excel
  const workbook = XLSX.readFile(filePath);

  // อ่านแผ่นงานแรก (Sheet) จาก workbook
  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];

  // แปลงแผ่นงานเป็น JSON
  const jsonData = XLSX.utils.sheet_to_json(worksheet);

  return jsonData;
}



// import { readExcelFile } from './utils/excelUtils';

// // ตัวอย่างการใช้งาน
// const excelData = readExcelFile('path/to/your/excel-file.xlsx');
// console.log(excelData);