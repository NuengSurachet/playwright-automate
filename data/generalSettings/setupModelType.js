import { setSharedProjectType, getSharedProjectType } from "../../src/utils/store/projectType.store"

setSharedProjectType('ModelTypeCode', "MCT1")
export const setupModelType = {
    modelTypeCode: getSharedProjectType('ModelTypeCode'),  //ห้ามซ้ำ ใส่ช่องหัวข้อ modelTypeCode
    modelTypeName: getSharedProjectType('ModelTypeCode') + "-Test",//ห้ามซ้ำ ใส่ช่องหัวข้อ modelTypeName
    modelTypeNameEN: getSharedProjectType('ModelTypeCode') + "-Test",//ห้ามซ้ำ ใส่ช่องหัวข้อ modelTypeNameEN
    modelTypeShortName: getSharedProjectType('ModelTypeCode') + "-Test",//ห้ามซ้ำ ใส่ช่องหัวข้อ modelTypeShortName
    ProjectType: "pt1", //ใส่ชื่ Project Type ให้ตรงกันกับ Project Type ทีที่ต้องการเลือก
}

	 