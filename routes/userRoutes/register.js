const bcrypt = require("bcrypt");
const mongoose = require("mongoose");

const User = mongoose.model("users");

module.exports = (app) => {
  app.post("/api/register", async (req, res) => {
    const { full_name, password, email, role, rank, date_joined } = req.body;
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
          .send({ message: "Lets say welcome to the new member", savedUser });
      }
      res.status(403).send({ message: "User already exists" });
    } catch (error) {
      res.status(500).send({ error });
    }
  });
};
