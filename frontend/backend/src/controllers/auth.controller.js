const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const generateToken = (user) => {
  //(user, token)
  return jwt.sign({ user }, process.env.SECRET_KEY);
};

//============================REGISTER==========================================
const register = async (req, res) => {
  try {
    //we will try to find user with email provides
    //if the user is found then it is an err
    //if not then we create user
    //then create token
    // by using token backend know the user
    let user = await User.findOne({ email: req.body.email });
    //checking email
    if (user) {
      return res
        .status(400)
        .send({ message: "Email already exists", status: false });
    }
    //if user not register create new user and post data
    else {
      user = await User.create(req.body);
      const token = generateToken(user);
      // console.log(token)
      return res.status(200).send({ user: user, token: token, status: true });
    }
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};


//========================================LOGIN=================================

const login = async (req, res) => {
  try {
    // checking email present or not.
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).send({ message: "Wrong Email or Password", status: false });
    }
    //if email present check pass
    const match = user.checkPassword(req.body.password);
    // if it doesn't match then err
    if (!match) {
      return res.status(400).send({ message: "Wrong Email or Password", status: false });
    }
    // if it matches then send res
    const token = generateToken(user);
    // console.log(user, token)
    return res.status(200).send({ user: user, token: token, status: true });
  }
  catch (err) {
    return res.status(400).send({ message: err.message });
  }
};


module.exports = { register, login };
