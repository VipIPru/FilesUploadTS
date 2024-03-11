// Importing the required and installed modules
var express = require("express");
var cors = require("cors");
var app = express();
const bodyParser = require("body-parser");
// using middleware with app
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// allow users to make a post request.
app.post("/api/uploadFile/", (req, res) => {
   let allFiles = req.body;
   console.log(allFiles);
});

// Allowing the app to listen on port 8000
app.listen(8000, () => {
   console.log("server started successfully");
});