const faker = require('faker/locale/es');

const firtName = faker.name.firstName();
const lastName = faker.name.lastName();

const jobTitle = faker.name.jobTitle();
const jobArea = faker.name.jobArea();
const prefix = faker.name.prefix();
const suffix = faker.name.suffix();
const phone = faker.phone.phoneNumber();

const month = faker.date.month();

console.log(`Employee: ${prefix} ${firtName} ${lastName} ${suffix} `);
console.log(`Job Title: ${jobTitle}`);
console.log(`Job Area: ${jobArea}`);
console.log(`PhoneNumber: ${phone}`);
console.log({month});
