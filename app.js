const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.get("/", function(req, res) {

  const today = new Date();
  const currentDay = today.getDay();

  if(currentDay === 6 || currentDay === 0){
      res.write("<h1>Yay it's the weekend!</h1>");
      res.write("<p>Relax (for now)<p>")
    } else {
      res.write("<h1>Boo! You have work!</h1>");
      res.write("<p> Why are you not working? <p> ")
      res.send();

    }

});

    app.listen("3000", function() {
      console.log("Server is running on port 3000 . . .");

    })
