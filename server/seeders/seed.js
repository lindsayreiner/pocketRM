const db = require('../config/connection');
const { Profile } = require('../models');

const profileData = require('./profileSeeds.json');

db.once('open', async () => {
  await Profile.deleteMany({});

  const profiles = await Profile.insertMany(profileData);

  console.log('Profiles seeded!');
  process.exit(0);
});
