const faker = require('faker');
const Note = require('../models/organisationModel.js');

const generateNotes = (users) => {
    const notes = [];
    users.forEach((user) => {
      const note = new Note({
        user: user._id, // Assign the user's ObjectId
        title: faker.lorem.words(),
        text: faker.lorem.paragraph(),
        completed: faker.random.boolean(),
      });
      notes.push(note);
    });
    return notes;
  };


  module.exports = generateNotes; 