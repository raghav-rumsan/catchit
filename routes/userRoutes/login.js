const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");

const Users = mongoose.model("users");

module.exports = (app) => {
  app.post("/api/login", async (req, res) => {
    const { email, password } = req.body;
    const user = await Users.findOne({ email });
    if (!user) {
      res
        .status(404)
        .send({ message: "Cannot find the user. Please register." });
    }
    try {
      if (await bcrypt.compare(password, user.password)) {
        const userData = {
          email: user.email,
          role: user.role,
        };

        const accessToken = jwt.sign(userData, keys.accessTokenKey, {
          expiresIn: "1day",
        });

        // const refreshToken = jwt.sign(userData, keys.refreshTokenKey);

        res
          .status(200)
          .send({ message: "Welcome", user: userData, token: accessToken });
      }
      res.status(403).send({ message: "Not allowed" });
    } catch (error) {
      res.status(500).send({ message: "Something went wrong" });
    }
  });
};
