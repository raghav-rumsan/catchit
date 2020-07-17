const mongoose = require("mongoose");
const { Schema } = mongoose;

const quotesSchema = new Schema(
  {
    title: String,
  },
  { timestamps: true }
);

mongoose.model("quotes", quotesSchema);
