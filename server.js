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

// built-in dummy reservation for testing purposes
reservations = [
  {
  name: "bob",
  phoneNumber: "8675309",
  email: "fakeemail@fakenews.com",
  id: "u wot m8"
},
{
  routeName: "yoda",
  name: "Yoda",
  role: "Jedi Master",
  age: 900,
  forcePoints: 2000
}
];


app.get("/", function(req, res) {
res.send("Welcome! Make a new reservation.");
});

app.get("/api/tables", function(req, res) {
  return res.json(reservations);
});

app.get("/api/reserve", function(req, res) {
res.sendFile(path.join(__dirname, ""));
});
  
  // Create New tables - takes in JSON input
app.post("/api/tables", function(req, res) {
   var newTable = req.body;
 
   console.log(newTable);
 
   reservations.push(newTable);
 
   res.json(newTable);
 });
 
 app.listen(PORT, function() {
   console.log("App listening on PORT " + PORT);
 });