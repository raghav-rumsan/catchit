const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const authenticateToken = require("../../middlewares/authenticateToken");
const isSuperAdmin = require("../../middlewares/isSuperAdmin");
const allowCors = require("../../middlewares/allowCors");

const User = mongoose.model("users");

module.exports = (app) => {
  app.post(
    "/api/register",
    allowCors,
    authenticateToken,
    isSuperAdmin,
    async (req, res) => {
      const { full_name, password, email, role, rank, date_joined } = req.body;
      console.log("req.body", req.body);
      try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const existingUser = await User.findOne({ email });
        if (!existingUser) {
          const savedUser = await new User({
            full_name,
            password: hashedPassword,
            email,
            rank,
            date_joined,
            role,
          }).save();
          res
            .status(200)
            .send({
              message: "User saved! Lets say welcome to the new member",
            });
        }
        res.status(403).send({ message: "User already exists" });
      } catch (error) {
        res.status(500).send({ error });
        console.log("error", error);
      }
    }
  );
};
