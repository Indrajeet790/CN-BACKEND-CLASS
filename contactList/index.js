const express = require("express");
const port = 8000;
const path = require("path");
const app = express();

// we are using ejs
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// create a variable
var contactList = [
  {
    name: "vijay",
    phone: "1223345",
  },
  {
    name: "shyam",
    phone: "3456789",
  },
  {
    name: "tony stark",
    phone: "34567890",
  },
];
// render first route contact list
app.get("/", function (req, res) {
  return res.render("home", {
    title: "My ContactList",
    Contact_list: contactList,
  });
});

app.listen(port, function (err) {
  if (err) {
    console.log("error in running the server");
  } else {
    console.log("my express server is running on port", port);
  }
});
