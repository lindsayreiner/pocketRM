const db = require("../config/connection");
const { Contact } = require("../models");

const contactData = require("./contactSeeds.json");
// const userData = require("./userSeeds.json");

db.once("open", async () => {
  await Contact.deleteMany({});
  // await User.deleteMany({});



  await Contact.insertMany(contactData);
  // await User.insertMany(userData);

  console.log("Contacts seeded!");
  // console.log("Users seeded!");
  process.exit(0);
});
