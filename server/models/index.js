const mongoose = require("mongoose");
const DateSchema = require("./schemas/date");

exports.Date = mongoose.model("Date", DateSchema);
