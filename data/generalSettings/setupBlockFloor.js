import { getSharedProjectType,setSharedProjectType } from "../../src/utils/store/projectType.store";

setSharedProjectType('BlockCode','BF2')
export const setupBlockFloor = {
    filterName: "pc2", //ช่องค้นหาชื่อ filterName  ProjectCode
    blockCode: getSharedProjectType('BlockCode'),//ช่องใส่ Block Code ห้ามซ้ำ
    remarks: getSharedProjectType('BlockCode')+" Test"//ช่องใส่ remarks

}

