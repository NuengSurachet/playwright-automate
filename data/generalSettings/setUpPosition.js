import { setSharedProjectType,getSharedProjectType } from "../../src/utils/store/projectType.store";


export const setupPositionData = {
    modelTypeCode: getSharedProjectType('ModelTypeCode'), // Model Type Code : *
    modelTypeName:getSharedProjectType('ModelTypeCode'), // Model Type Name : *
    modelTypeNameEN: getSharedProjectType('ModelTypeCode'), // Model Type Name (EN) : *
    modelTypeShortName: getSharedProjectType('ModelTypeCode'), // Model Type Short Name : *
    projectType:getSharedProjectType('ProjectType'), // Project Type : * (01 = ระบุ , 02 = ระบุ) ,
}