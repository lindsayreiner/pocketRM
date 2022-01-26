const db = require("../config/connection");
const { Contact } = require("../models");

const contactData = require("./contactSeeds.json");

db.once("open", async () => {
    await Contact.deleteMany({});

    const contacts = await Contact.insertMany(contactData);

    console.log("Contacts seeded!");

    process.exit(0);
});
