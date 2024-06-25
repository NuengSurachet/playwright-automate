import { getSharedProjectType, setSharedProjectType } from "../../src/utils/store/projectType.store";

setSharedProjectType('UnitCode1',"UN07");
setSharedProjectType('UnitCode2',"UN08");
setSharedProjectType('UnitCode3',"UN09");
const ProjectUnits =[
    {
        "ProjectCode":"pc2",      //Project Code : *
        "UnitCode":getSharedProjectType('UnitCode1'),           //Unit Code : *  (ห้ามซ้ำ)
        "UnitName":getSharedProjectType('UnitCode1'),               //Unit Name : *
        "ValidFrom":"2024-01-01",              //Valid From : *
        "ValidTo":"2024-12-01",         //Valid To : 
        "Model":"MD01",             //Model : *
        "Status":"Active",          //Status : *    (Active,Inactive)
        "PhaseBuilding":"Ph01",       //  Phase / Building *
        "BlockFloor":"",            //Block / Floor  
        "SaleArea":"10000",          //Sale Area :*
        "AssetType":"2",              //Asset Type
        "TitleArea":"0",              //Title area
        "SalePriceAllocate":"0",       //Sale Price Allocate
    },
    {
        "ProjectCode":"pc2",      //Project Code : *
        "UnitCode":getSharedProjectType('UnitCode2'),           //Unit Code : *  (ห้ามซ้ำ)
        "UnitName":getSharedProjectType('UnitCode2'),               //Unit Name : *
        "ValidFrom":"2024-01-01",              //Valid From : *
        "ValidTo":"2024-12-01",         //Valid To : 
        "Model":"MD01",             //Model : *
        "Status":"Active",          //Status : *    (Active,Inactive)
        "PhaseBuilding":"Ph01",       //  Phase / Building *
        "BlockFloor":"",            //Block / Floor  
        "SaleArea":"10000",          //Sale Area :*
        "AssetType":"2",              //Asset Type
        "TitleArea":"0",              //Title area
        "SalePriceAllocate":"0",       //Sale Price Allocate


    },
    {
        "ProjectCode":"pc2",      //Project Code : *
        "UnitCode":getSharedProjectType('UnitCode3'),           //Unit Code : *  (ห้ามซ้ำ)
        "UnitName":getSharedProjectType('UnitCode3'),               //Unit Name : *
        "ValidFrom":"2024-01-01",              //Valid From : *
        "ValidTo":"2024-12-01",         //Valid To : 
        "Model":"MD01",             //Model : *
        "Status":"Active",          //Status : *    (Active,Inactive)
        "PhaseBuilding":"Ph01",       //  Phase / Building *
        "BlockFloor":"",            //Block / Floor  
        "SaleArea":"10000",          //Sale Area :*
        "AssetType":"2",              //Asset Type
        "TitleArea":"0",              //Title area
        "SalePriceAllocate":"0",       //Sale Price Allocate


    }
]

export default ProjectUnits