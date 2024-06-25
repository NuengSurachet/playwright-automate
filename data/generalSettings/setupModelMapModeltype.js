import { setSharedProjectType,getSharedProjectType } from "../../src/utils/store/projectType.store"

setSharedProjectType('ModelCode',"MD01")
const ModelMapModeltype ={
    "ProjectCode":"pc2",      //Project Code :* 
    "ModelCode":getSharedProjectType('ModelCode'),         //Model Code : *   (ห้ามซ้ำ)
    "ModelName":getSharedProjectType('ModelCode'),         //Model Name : *
    "ModelName(EN)":getSharedProjectType('ModelCode'),     //Model Name (EN) : *
    "ModelType":"MCT1",       //Model Type : *
    "ModelArea":"700.00",   //Model Area :
    "ParkingAmount":"0",    //Parking Amount :
    "Status":"Active"   // Status : * (Active ,  Inactive) 

}

export default ModelMapModeltype;