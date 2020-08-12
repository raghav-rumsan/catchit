const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const cors = require("cors");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const keys = require("./config/keys");
// use the model first
require("./models/Users");
require("./models/Quotes");

// require("./services/passport");
//import the services after model

mongoose.connect(keys.mongoURI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false,
});

const app = express();
app.options("*", cors());

app.use(fileUpload());
// Parse the request from the client
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("./routes/userRoutes/register")(app);
require("./routes/userRoutes/login")(app);
require("./routes/userRoutes/currentUser")(app);
require("./routes/dailyQuotes/createQuotes")(app);
require("./routes/dailyQuotes/getQuotes")(app);
require("./routes/employeeRoutes/employeeList")(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT);
