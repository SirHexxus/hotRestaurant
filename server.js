// Dependencies
// =============================================================
const express = require("express");
const path = require("path");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Creating a reservations constructor (DATA)

let reservations = [];
let waitingList =[];
function Reservation(name, phoneNumber, email, id) {
   this.name = name;
   this.phoneNumber = phoneNumber;
   this.email = email;
   this.id = id;
}

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  