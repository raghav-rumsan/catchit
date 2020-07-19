const mongoose = require("mongoose");
const { Schema } = mongoose;

const bountiesSchema = new Schema(
  {
    current: {
      type: Number,
      default: 0,
    },
    spent: {
      date: {
        type: Date,
      },
      reason: String,
    },
    achieved: {
      date: {
        type: Date,
      },
      reason: String,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
  },
  {
    timestamps: true,
  }
);

mongoose.model("bounties", bountiesSchema);
