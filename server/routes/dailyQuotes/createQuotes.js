const mongoose = require("mongoose");
const authenticateToken = require("../../middlewares/authenticateToken");
const isSuperAdmin = require("../../middlewares/isSuperAdmin");
const allowCors = require("../../middlewares/allowCors");

const Quote = mongoose.model("quotes");

module.exports = (app) => {
  app.post(
    `/api/v1/quotes-create`,
    allowCors,
    authenticateToken,
    isSuperAdmin,
    async (req, res) => {
      const { quote } = req.body;
      try {
        const savedQuote = await new Quote({ title: quote }).save();
        res.status(200).send({ message: "Quote Added", savedQuote });
      } catch (error) {
        res.send(error, { message: "An error occured" });
      }
    }
  );
};
