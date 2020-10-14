const express = require("express");
const router = express.Router();
const User = require("../models/User");

//Add new user
router.post("/", async (req, res) => {
  const user = new User({
    fname: req.body.fname,
    lname: req.body.lname,
    email: req.body.email,
    password: req.body.password,
    imageUrl: req.body.imageUrl,
  });

  try {
    const newUser = await user.save();
    res.json(newUser);
  } catch (err) {
    res.json({ message: err });
  }
});


//GET ALL USERS
router.get("/all", async (req, res) => {
  try {
    const allusers = await User.find();
    res.json(allusers);
  } catch (err) {
    res.json({ message: err });
  }
});


module.exports = router;
