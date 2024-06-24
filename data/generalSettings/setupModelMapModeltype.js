import { setSharedProjectType,getSharedProjectType } from "../../src/utils/store/projectType.store"

setSharedProjectType('ModelCode',"MD01")
const ModelMapModeltype ={
    "ProjectCode":getSharedProjectType('ProjectCode'),      //Project Code :* 
    "ModelCode":getSharedProjectType('ModelCode'),         //Model Code : *   (ห้ามซ้ำ)
    "ModelName":getSharedProjectType('ModelCode'),         //Model Name : *
    "ModelName(EN)":getSharedProjectType('ModelCode'),     //Model Name (EN) : *
    "ModelType":getSharedProjectType('ModelTypeCode'),       //Model Type : *
    "ModelArea":"700.00",   //Model Area :
    "ParkingAmount":"0",    //Parking Amount :
    "Status":"Active"   // Status : * (Active ,  Inactive) 

}

export default ModelMapModeltype;