import { faker } from '@faker-js/faker';

function getRandomYearMonth() {
    const year = faker.date.future().getFullYear();
    const month = (faker.date.future().getMonth() + 1).toString().padStart(2, '0');
    return `${year}-${month}`;
}

export const SetupDocumentNumbering = {
    get startDate() {
        return getRandomYearMonth(); // date ห้ามซ้ำ
    },
    name: "SC3686",
    Prefix: "SC",
    digits: "5",
    nextRun: "99",
    lastNo: "9999",
};
