const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
mongoose.connect("mongodb://localhost:27017/calendar");

mongoose.connection.on("connected", () => {
  console.log("MongoDB Connected");
});

const app = express();

app.listen(8080, function () {
  console.log("open 8080");
});

let corsOptions = {
  origin: "*", // 출처 허용 옵션
  credential: true, // 사용자 인증이 필요한 리소스(쿠키 ..등) 접근
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const dateRouter = require("./routes/dates");
app.use("/dates", dateRouter);
