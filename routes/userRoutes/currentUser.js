const mongoose = require("mongoose");
const authenticateToken = require("../../middlewares/authenticateToken");

const User = mongoose.model("users");

module.exports = (app) => {
  app.get("/api/current_user", authenticateToken, async (req, res) => {
    const user = await User.findOne({ email: req.userData.email });
    if (!user) {
      res.status(401).send({ message: "No user Found" });
    }
    const { full_name, email, rank, date_joined, role } = user;
    const userData = {
      full_name,
      email,
      rank,
      date_joined,
      role,
    };
    res.status(200).send({ userData });
  });
};
