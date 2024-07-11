import { getSharedProjectType,setSharedProjectType } from "../../src/utils/store/projectType.store";

setSharedProjectType('Unit',"UN08")
export const mapUnitBlockFloorData = {
    projectName : "pc2",
    unitNames : [getSharedProjectType('Unit')], //ใส่ชื่อ Unit เพื่อให้ระบบเลือกให้
    blockCode : getSharedProjectType('BlockCode') // ใส่ Block Code เพื่อให้ระบบเลือกให้
    
}