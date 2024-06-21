import { faker } from '@faker-js/faker';
import { format } from 'path';

function getRandomYearMonth() {
    const year = faker.date.future().getFullYear();
    const month = (faker.date.future().getMonth() + 1).toString().padStart(2, '0');
    return `${year}-${month}`;
}

export const SetupDocumentNumbering = {
    name: "SC3686",// ใส่ชื่อเอกสาร ช่องที่ 1
    Prefix: "SC", //ใส่อักษรย่อPrefixช่องที่ 2
    format: "ym",
    //ใส่อักษรย่อformatช่องที่ 3  (ใส่ค่าให้ตรงกับช่องข้างล่างเท่านั้น )
    //    Ym == >  YYYY/MM
    //    ym == >  YY/MM 
    //    mY == >  MM/YYYY
    //    my == >  MM/YY 
    //    ymd == >  YY/MM/DD
    //    dmy == >  DD/MM/YY
    //    Ymd == >  YYYY/MM/DD
    //    dmY == >  DD/MM/YYYY





    digits: "5", // ใส่จํานวนหลัก ช่องที่4
    nextRun: "99",//ใส่ค่าตัวเลข   ช่องที่5
    lastNo: "9999",//ใส่ค่าตัวเลข ช่องที่6
    get startDate() {
        return getRandomYearMonth(); // ใส่วันที่ห้ามซ้ำกันกับวันก่อนหน้า ช่องที่7
    },
};
