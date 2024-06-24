
import { faker } from '@faker-js/faker';

export const setupUser = {
    firstName : faker.internet.userName(), // หา Project Name , Project Code
    email : faker.internet.email(), // Phase Code : * (ห้ามซ้ำ)
    phone : "0817778298", // Phase Name : *
    username : faker.internet.userName(), // Phase Name (EN) : *
    password : faker.internet.password(),
}