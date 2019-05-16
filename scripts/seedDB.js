const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
process.env.MONGODB_URI ||
"mongodb://localhost/texascentral"
);

const messageSeed = [
    {
        address: "6507 Trammel Drive",
        zip: "75214",
        message:
        "I have been approached by Texas Central to acquire my property, they've offered be half of what it's worth.",
        date: new Date(Date.now())
    },
    {
        address: "8201 S Julius Schepps",
        zip: "75214",
        message:
        "Texas Central says they have the ability to take my land even if I don't accept the offer....I don't know what to do.",
        date: new Date(Date.now())
    },
    {
        address: "3930 Jaffee Street",
        zip: "75214",
        message:
        "Texas Central have given me 20 thousand more dollars than my house is worth. I'm very pleased with the entire experience.",
        date: new Date(Date.now())
    }
];

    db.Message
    .remove({})
    .then(() => db.Message.collection.insertMany(messageSeed))
    .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
    })
    .catch(err => {
    console.error(err);
    process.exit(1);
    });
