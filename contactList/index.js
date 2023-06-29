const express = require("express");
const port = 8000;
const path = require("path");
const app = express();

// database connection
const db = require("./config/mongoose");
const Contact = require("./models/contact");

// we are using ejs
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(__dirname + "/assets"));

// add middleware
app.use(express.urlencoded());
// use middleware for static file
app.use(express.static("assets"));

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
//
app.get("/practice", function (req, res) {
  return res.render("practice", {
    title: "let us play with ejs",
  });
});

// create a route for form to create contact and form
app.post("/create-contact", function (req, res) {
  // contactList.push({
  //   name: req.body.name,
  //   phone: req.body.phone,
  // });
  contactList.push(req.body);
  return res.redirect("back");
});
// delete contact
app.get("/delete-contact", function (req, res) {
  // GET THE QUERY FROM THE URL
  console.log(req.query);
  let phone = req.query.phone;

  let contactIndex = contactList.findIndex((contact) => contact.phone == phone);

  if (contactIndex != -1) {
    contactList.splice(contactIndex, 1);
  }
  return res.redirect("back");
});

app.listen(port, function (err) {
  if (err) {
    console.log("error in running the server");
  } else {
    console.log("my express server is running on port", port);
  }
});
