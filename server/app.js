const mongoose = require("mongoose");
require("dotenv/config");
const express = require("express");
const cors = require("cors");
mongoose.connect("mongodb://localhost:27017/calendar");

mongoose.connection.on("connected", () => {
  console.log("MongoDB Connected");
});
const PORT = process.env.PORT || 5000;
const app = express();
app.listen(PORT, function () {
  console.log("open ");
});

let corsOptions = {
  origin: "*", // 출처 허용 옵션
  credential: true, // 사용자 인증이 필요한 리소스(쿠키 ..등) 접근
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.use(express.static(path.join(__dirname, "../client/build")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});
const dateRouter = require("./routes/dates");
app.use("/dates", dateRouter);
