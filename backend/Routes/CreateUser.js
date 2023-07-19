const express = require("express");
const router = express.Router();
const user = require("../models/User");
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt=require('jsonwebtoken');
const jwtSecret="2Xh5wFvZND69sqYvjUOxuBf0ctzpMl4J"
router.post(
  "/createuser",
  [
    body("email").isEmail(),
   body("name").isLength({min:5}),
    // password must be at least 5 chars long
    body("password", "Incorrect Password").isLength({ min: 5 }) ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

  const salt= await bcrypt.genSalt(10);   //is always asynchronus so use await returns a promise
  let secPassword=await bcrypt.hash(req.body.password,salt)

    try {
      await user
        .create({
          name: req.body.name,
          email: req.body.email,
          password: secPassword,
          location: req.body.location,
        })
        .then(res.json({ success: true }));
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);

router.post("/loginuser",  [
  body("email").isEmail(),

  // password must be at least 5 chars long
  body("password", "Incorrect Password").isLength({ min: 5 }),
],async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { email, password } = req.body;
  try {
    let userdata =await user.findOne({email});
    if (!userdata) {
      return res
        .status(400)
        .json({ errors: "Try logging in with correct credentials !!" });
    }
    const pwdCompare=await bcrypt.compare(req.body.password,userdata.password)
   
    if (!pwdCompare) {
      return res
        .status(400)
        .json({ errors: "Try logging in with correct credentials !!" });
    }
    const data={
      user:{
        id:userdata._id
      }
    }
    const authToken=jwt.sign(data,jwtSecret)
    return res.json({ success: true,authToken });
  } catch (error) {
    console.log(error);
    res.json({ success: false });
  }
});

module.exports = router;
