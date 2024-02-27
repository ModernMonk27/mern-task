const faker = require('faker');
const bcrypt = require('bcryptjs');
const User = require('./models/userModel.js');

const generateUsers = (count) => {
    const users = [];
    for (let i = 0; i < count; i++) {
      const user = new User({
        username: faker.internet.userName(),
        password: faker.internet.password(),
        roles: ['Employee'], // You can modify this if needed
        active: true, // You can modify this if needed
      });
      users.push(user);
    }
    return users;
  };

module.exports = generateUsers;