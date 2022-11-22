const mongoose = require("mongoose");
const DateSchema = require("./schemas/date");

exports.Post = mongoose.model("Post", DateSchema);
