import { faker } from '@faker-js/faker';
import { setSharedProjectType,getSharedProjectType } from '../../src/utils/store/projectType.store';

 setSharedProjectType('ProjectType',"pt1");
export const setupProjectType = {
    code:getSharedProjectType('ProjectType'), // ใส่ได้แค่3ตัวอักษรเท่านั้น
    name: getSharedProjectType('ProjectType'),
}
