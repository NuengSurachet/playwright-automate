import { faker } from '@faker-js/faker';

const SetupApprove =
    [{
            "groupName":faker.internet.userName(),   //Group Name : *  (ห้ามซ้ำ) 
            "remark":"Test IOT",    //Remark :
            "department":"DEP001",  //Department : *
            "user":"icon002"        //User Name : * Add Row
    }]

    export default SetupApprove;
