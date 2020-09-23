const faker = require('faker');

const firtName = faker.name.firstName();
const lastName = faker.name.lastName();

const jobTitle = faker.name.jobTitle();
const jobArea = faker.name.jobArea();
const prefix = faker.name.prefix();
const suffix = faker.name.suffix();
const phone = faker.phone.phoneNumber();

console.log(`Employee: ${prefix} ${firtName} ${lastName} ${suffix} `);
console.log(`Job Title: ${jobTitle}`);
console.log(`Job Area: ${jobArea}`);
console.log(`PhoneNumber: ${phone}`);
