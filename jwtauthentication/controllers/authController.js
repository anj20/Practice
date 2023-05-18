const User = require("../models/usermodel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//handle errors
const handleErrors = (err) => {
  // console.log(err.message, err.code);
  let errors = { username: "", email: "", password: "" };

  //incorrect email
  if (err.message === "incorrect email") {
    errors.email = "That email is not registered";
  }
  //duplicate email error
  if (err.code === 11000) {
    errors.email = "That email is already registered";
    return errors;
  }

  //validation errors
  if (err.message.includes("user validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }

  return errors;
};

//create token
const createToken = (id) => {
  return jwt.sign({ id }, "TheCampionAnurag", {
    //secret is the secret key  //id is the payload (user id)
    expiresIn: 3 * 24 * 60 * 60, //3 days in seconds
  });
};

module.exports = {
  // GET /signup
  signup_get: async (req, res) => {
    res.render("../views/signup.ejs");
  },

  // POST /signup
  signup_post: async (req, res) => {
    // if (
    //   req.body.password === undefined ||
    //   req.body.username === undefined ||
    //   req.body.email === undefined
    // ) {
    //   res.status(400).json({ error: "Please enter all fields" });
    // }
    const { username, email, password } = req.body;
    try {
      const user = await User.create({ username, email, password });
      const token = createToken(user._id);
      res.cookie("jwt", token, { httpOnly: true, maxAge: 3 * 24 * 60 * 60 });
      res.status(201).json({ user: user._id });
    } catch (err) {
      console.log("user not created");
      console.log(err);
      const error = handleErrors(err);
      res.status(400).json({ error });
    }
  },
  // GET /login
  login_get: async (req, res) => {
    res.render("../views/login.ejs");
  },
  // // POST /login
  login_post: async (req, res) => {
    const { username, password } = req.body;
    s;
    const user = await User.findOne({ username });
    console.log(user);
    // if (user) {
    //   const auth = await bcrypt.compare(password, user.password);
    //   if (auth) {
    //     console.log("user logged in");
    //     return user;
    //   }
    //   throw Error("incorrect password");
    // }
    // throw Error("incorrect username");
  },

  // GET /logout
  logout_get: async (req, res) => {
    res.send("user logout");
  },
};
