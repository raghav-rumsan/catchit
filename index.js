const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const keys = require("./config/keys");
// use the model first
require("./models/Users");

// require("./services/passport");
//import the services after model

mongoose.connect(keys.mongoURI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false,
});

const app = express();

app.use(fileUpload());
// Parse the request from the client
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.use(
//   cookieSession({
//     maxAge: 30 * 24 * 60 * 60 * 1000,
//     keys: [keys.cookieKey],
//   })
// );

// app.use(passport.initialize());
// app.use(passport.session());

require("./routes/userRoutes/register")(app);
require("./routes/userRoutes/login")(app);
require("./routes/userRoutes/currentUser")(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT);
