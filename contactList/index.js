const express = require("express");
const port = 8000;
const path = require("path");
const app = express();

// we are using ejs
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// render first route
app.get("/profile", function (req, res) {
  return res.render("home");
});

app.listen(port, function (err) {
  if (err) {
    console.log("error in running the server");
  } else {
    console.log("my express server is running on port", port);
  }
});
