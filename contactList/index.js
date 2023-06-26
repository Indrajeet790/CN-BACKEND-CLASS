const express = require("express");
const port = 8000;
const path = require("path");
const app = express();

// we are using ejs
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// add middleware
app.use(express.urlencoded());

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

app.listen(port, function (err) {
  if (err) {
    console.log("error in running the server");
  } else {
    console.log("my express server is running on port", port);
  }
});
