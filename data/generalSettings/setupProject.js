import { setSharedProjectType,getSharedProjectType } from "../../src/utils/store/projectType.store";

// setSharedProjectType('ProjectCode',"pc1");
const SetupProjects =
[{
       "ProjectorDepartment":"Project",   //Project/Department :*      (value Project or Department)
        "Code":getSharedProjectType('ProjectCode'),                //Code : *  (ห้ามซ้ำ)
        "Name":getSharedProjectType('ProjectCode'),                //Name : *
        "NameEng":getSharedProjectType('ProjectCode'),             //Name Eng : *
        "ControlBOQ":"Yes",             //Control BOQ : *
        "StartDate":"2024-06-01",         //Start Date : *
        "EstimateCloseDate":"2025-06-01",   //Estimate Close Date :
        "ShortName":"Icon",             //Short Name :
        "Status":"Active",                 //Status : *
        "ControlBudget":"by Summary Cost Code",    //  Control Budget : *
        "LockProjectDate":"false",         //Lock Project Date :     (true คือจะใช้งานไม่ได้ชั่วคราว)
        "InsuranceContractYear":"10",       //Insurance Contract/Year :
        "ProjectType":getSharedProjectType('ProjectType'),             //Project Type : *
        "JobsDetail":"Icon RPA",        //Jobs Detail :
        "Tel":"0987654327",             //Tel :
        "EMail":"icon@g.com",          //E-Mail :
        "Fax":"987545556",               //Fax :
        "Websit":"www.icon.com",        //Website :

}]

//Tab Admin
export const Admin =
[{
    "Name":"admin1",
    "Position":"admin",
    "Telephone":"0909909999",
    "Email":"icon@u.com"

}]
// Tab Consultants
export const Consultants =
[{
     "Name":"admin2",
     "Position":"admin",
     "Telephone":"0909909999",
     "Email":"icon@u.com"
}
]


export default SetupProjects;
