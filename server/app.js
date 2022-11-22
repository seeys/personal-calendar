const mongoose = require("mongoose");
const express = require("express");

mongoose.connect("mongodb://localhost:27017/calendar");

mongoose.connection.on("connected", () => {
  console.log("MongoDB Connected");
});

const app = express();
app.listen(8080, function () {
  console.log("open 8080");
});

const dateRouter = require("./routes/dates");
app.use("/dates", dateRouter);
