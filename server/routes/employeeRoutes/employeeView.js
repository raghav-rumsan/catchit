const mongoose = require("mongoose");
const allowCors = require("../../middlewares/allowCors");
const isSuperAdmin = require("../../middlewares/isSuperAdmin");
const authenticateToken = require("../../middlewares/authenticateToken");

const User = mongoose.model("users");

module.exports = (app) => {
  app.get(
    "/api/v1/employee/:id",
    allowCors,
    authenticateToken,
    isSuperAdmin,
    async (req, res) => {
      const { id } = req.params;
      try {
        const foundUser = await User.findById({ _id: id });
        res.status(200).send({ employeeDetails: foundUser });
      } catch (error) {
        res.status(500).send(error);
      }
    }
  );
};
