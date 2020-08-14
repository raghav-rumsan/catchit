const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    full_name: {
      required: true,
      type: String,
    },
    password: {
      required: true,
      type: String,
    },
    email: String,
    rank: String,
    date_joined: Date,
    role: String,

    bounties: {
      type: Schema.Types.ObjectId,
      ref: "bounties",
    },
  },
  {
    timestamps: true,
  }
);

userSchema.plugin(mongoosePaginate);

mongoose.model("users", userSchema);
