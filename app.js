const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res) {

  const today = new Date();
  const currentDay = today.getDay();
  var day = "";

  if (currentDay === 6 || currentDay === 0) {
    day = "Weekend";
    res.sendFile(__dirname + "weekend.hmtl");
  } else {
    res.sendFile(__dirname + "weekday.html");
    day = "Weekday";

  }

});

app.listen("3000", function() {
  console.log("Server is running on port 3000 . . .");

})
