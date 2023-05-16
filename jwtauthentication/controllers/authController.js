const User = require("../models/usermodel");

module.exports = {
  // GET /signup
  signup_get: async (req, res) => {
    console.log("signup_get");
    res.send("user signup");
    // res.render("../views/signup.ejs");
  },
  // POST /signup
  signup_post: async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await User.create({ email, password });
      res.status(201).json({ user: user._id });
    } catch (err) {
      res.status(500).json({ err });
    }
  },
  // GET /login
  login_get: async (req, res) => {
    console.log("login_get");
    // res.render("../views/login.ejs");
  },
  // POST /login
  login_post: async (req, res) => {
    res.send("user login");
  },
  // GET /logout
  logout_get: async (req, res) => {
    res.send("user logout");
  },
};
