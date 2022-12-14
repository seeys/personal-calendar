const { Router } = require("express");
const { Date } = require("../models");

const router = Router();

router.get("/", async (req, res) => {
  try {
    const dates = await Date.find({});
    res.json(dates);
  } catch (err) {
    console.log(err.message);
  }
});

router.post("/add", async (req, res) => {
  const { title, start, end, color } = req.body;
  const event = await Date.create({ title, start, end, color });
  res.json(event);
});

module.exports = router;
