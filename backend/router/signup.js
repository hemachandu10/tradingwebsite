const express=require('express')
const router = express.Router();


const User = require("../Models/users");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcryptjs");

router.post("/",async (req, res, next) => {
  //console.log(req.body)
  
  try {
    const { email, password, username, createdAt } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists",isSignup:false });
    }
    const user = await User.create({ email, password, username, createdAt });
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
    res
      .status(201)
      .json({ message: "User signed in successfully", success: true,isSignup:true, user });
    next();
  } catch (error) {
    console.error(error);
  }
})

module.exports = router;