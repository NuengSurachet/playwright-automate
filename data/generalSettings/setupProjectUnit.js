import { getSharedProjectType, setSharedProjectType } from "../../src/utils/store/projectType.store";

setSharedProjectType('UnitCode1',"UN01");
setSharedProjectType('UnitCode2',"UN02");
setSharedProjectType('UnitCode3',"UN03");
const ProjectUnits =[
    {
        "ProjectCode":getSharedProjectType('ProjectCode'),      //Project Code : *
        "UnitCode":getSharedProjectType('UnitCode1'),           //Unit Code : *  (ห้ามซ้ำ)
        "UnitName":getSharedProjectType('UnitCode1'),               //Unit Name : *
        "ValidFrom":"2024-01-01",              //Valid From : *
        "ValidTo":"2024-12-01",         //Valid To : 
        "Model":getSharedProjectType('ModelCode'),             //Model : *
        "Status":"Active",          //Status : *    (Active,Inactive)
        "PhaseBuilding":"0111",       //  Phase / Building *
        "BlockFloor":"",            //Block / Floor  
        "SaleArea":"10000",          //Sale Area :*
        "AssetType":"2",              //Asset Type
        "TitleArea":"0",              //Title area
        "SalePriceAllocate":"0",       //Sale Price Allocate
    },
    {
        "ProjectCode":getSharedProjectType('ProjectCode'),      //Project Code : *
        "UnitCode":getSharedProjectType('UnitCode2'),           //Unit Code : *  (ห้ามซ้ำ)
        "UnitName":getSharedProjectType('UnitCode2'),               //Unit Name : *
        "ValidFrom":"2024-01-01",              //Valid From : *
        "ValidTo":"2024-12-01",         //Valid To : 
        "Model":getSharedProjectType('ModelCode'),             //Model : *
        "Status":"Active",          //Status : *    (Active,Inactive)
        "PhaseBuilding":"0111",       //  Phase / Building *
        "BlockFloor":"",            //Block / Floor  
        "SaleArea":"10000",          //Sale Area :*
        "AssetType":"2",              //Asset Type
        "TitleArea":"0",              //Title area
        "SalePriceAllocate":"0",       //Sale Price Allocate


    },
    {
        "ProjectCode":getSharedProjectType('ProjectCode'),      //Project Code : *
        "UnitCode":getSharedProjectType('UnitCode3'),           //Unit Code : *  (ห้ามซ้ำ)
        "UnitName":getSharedProjectType('UnitCode3'),               //Unit Name : *
        "ValidFrom":"2024-01-01",              //Valid From : *
        "ValidTo":"2024-12-01",         //Valid To : 
        "Model":getSharedProjectType('ModelCode'),             //Model : *
        "Status":"Active",          //Status : *    (Active,Inactive)
        "PhaseBuilding":"0111",       //  Phase / Building *
        "BlockFloor":"",            //Block / Floor  
        "SaleArea":"10000",          //Sale Area :*
        "AssetType":"2",              //Asset Type
        "TitleArea":"0",              //Title area
        "SalePriceAllocate":"0",       //Sale Price Allocate


    }
]

export default ProjectUnits