import generateNotes from "./organisationSeeds";
import generateUsers from "./userSeeds";

const seedDatabase = async () => {
    try {
      // Generate users
      const users = generateUsers(10); // Generate 10 users
      await User.insertMany(users); // Insert users into the database
  
      // Retrieve the inserted users
      const insertedUsers = await User.find();
  
      // Generate notes associated with users
      const notes = generateNotes(insertedUsers);
      await Note.insertMany(notes); // Insert notes into the database
  
      console.log('Database seeded successfully.');
    } catch (error) {
      console.error('Error seeding database:', error);
    } finally {
      // Close the MongoDB connection
      mongoose.disconnect();
    }
  };

  module.exports = seedDatabase;