import { faker } from '@faker-js/faker';
import dataSetting from "../../data/common/TestSetting.json";

const data = dataSetting.Login
const SetupApprove =
    [{
            "groupName":faker.internet.userName(),   //Group Name : *  (ห้ามซ้ำ) 
            "remark":"Test IOT",    //Remark :
            "department":"HOF",  //Department : *                                                //to do
            "user":data.username       //User Name : * Add Row
    }]

    export default SetupApprove;
