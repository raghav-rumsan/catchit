const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const attendanceSchema = new Schema({

    user: {
        type: Schema.Types.ObjectId,
        ref:"users"
    },
    in_time:

}, {
    timestamps:true
});

mongoose.model("attendance", attendanceSchema);
