const authenticateToken = require("../../middlewares/authenticateToken");
const mongoose = require("mongoose");

const Quotes = mongoose.model("quotes");

module.exports = (app) => {
  app.get("/api/v1/get-daily-quotes", authenticateToken, async (req, res) => {
    const quote = await Quotes.findOne({}, null, { sort: { createdAt: -1 } });
    res.status(200).send(quote);
  });
};
