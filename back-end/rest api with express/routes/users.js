const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


//Add new user
router.post("/register", async (req, res) => {
  
  const checkExist = await User.findOne({email: req.body.email});
  if(checkExist) return res.status(400).send("Email already in teh data base");
  
  //encrypt the password
  const salt = await bcrypt.genSalt(10);
  const encrptedPassword = await bcrypt.hash(req.body.password, salt);
  
  const user = new User({
    fname: req.body.fname,
    lname: req.body.lname,
    email: req.body.email,
    password: encrptedPassword,
    imageUrl: req.body.imageUrl,
  });

  try {
    const newUser = await user.save();
    res.json(newUser);
  } catch (err) {
    res.json({ message: err });
  }
});

//LOGIN
router.post("/login", async (req, res) => {
  try {
    const speficUser = await User.findOne({email: req.body.email});
    if(!speficUser) return res.status(400).send("Email incorrect");
    
    const passwordValid = await bcrypt.compare(req.body.password, speficUser.password);
    
    if(!passwordValid) return res.status(400).send("Password incorrect");
    
    //CREATE JSON WEB TOKEN
    const token = jwt.sign({_id: speficUser._id}, process.env.TOKEN_SECRET , { expiresIn: "10h"});
    
    res.header('auth-token', token).send(token);

    
  } catch (err) {
    res.json({ message: err });
  }
});

//GET SPECIFIC USER
router.get("/spefic/:userId", async (req, res) => {
  try {
    const speficUser = await User.findById(req.params.userId);
    res.json(speficUser);
  } catch (err) {
    res.json({ message: err });
  }
});

//GET SPECIFIC USER By EMAIL
router.get("/speficbyemail/:userEmail", async (req, res) => {
  try {
    const speficUser = await User.find({email: req.params.userEmail});
    res.json(speficUser);
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
