const faker = require('faker');
const fs = require('fs');

function generateUsers() {
  let users = [];
  for (let id = 1; id <= 100; id++) {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const email = faker.internet.email();
    const phone = faker.phone.phoneNumber();

    users.push({
      id,
      firstName,
      lastName,
      email,
      phone,
    });
  }
  return {data: users};
}

const generateData = generateUsers();

fs.writeFileSync('data.json', JSON.stringify(generateData, null, '\t'));
