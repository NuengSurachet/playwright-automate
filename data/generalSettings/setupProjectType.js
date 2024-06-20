import { faker } from '@faker-js/faker';


export const setupProjectType = {
    codee: faker.string.uuid(), // ใส่ได้แค่3ตัวอักษรเท่านั้น
    name: faker.internet.userName(),
}
