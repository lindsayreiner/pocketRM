const db = require('../config/connection');
const { Contact, User } = require('../models');

const contactData = require('./contactSeeds.json');
const userData = require('./userSeeds.json')

db.once('open', async () => {
  await Contact.deleteMany({});
  await User.deleteMany({});

  const contacts = await Contact.insertMany(contactData);
  const users = await User.insertMany(userData);

  console.log('Contacts seeded!');
  console.log('Users seeded!');
  process.exit(0);
});
