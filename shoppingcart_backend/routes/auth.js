const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const router = express.Router();
 
const User = require("../models/signupmodel");
const SECRET_KEY = "nibm@123";
 
router.post("/", async (req, res) => {
 let user = await User.findOne({ email: req.body.email });
 if (!user) return res.status(400).send("Email or Password is Not Valid..");
 
 let pwValid = await bcrypt.compare(req.body.password, user.password);
 if (!pwValid) return res.status(400).send("Email or Password is Not Valid..")
 
 let token = jwt.sign({ id: user.id, email: user.email }, SECRET_KEY) 
 // let token = jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, {
 // expiresIn: "10000"
 // })
 return res.status(200).send({ token: token });
 
});
 
module.exports = router;