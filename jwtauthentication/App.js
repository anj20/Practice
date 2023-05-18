const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();

const PORT = 4000;

// Middleware
app.use(cors());
app.use(express.static("public"));
app.use(express.json());
app.use(cookieParser());

//View Engine
app.set("view engine", "ejs");

//MongoDB Connection
mongoose.connect(
  "mongodb+srv://anj20:test1234@usernames.2z9clko.mongodb.net/allsecrets"
);
const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

app.get("/", (req, res) => {
  // res.send("Hello World");
  res.render("../views/welcome.ejs");
});
app.get("/classes", (req, res) => {
  res.render("../views/class.ejs");
});
app.get("/contact", (req, res) => {
  res.render("../views/contact.ejs");
});

app.use(require("./routes/authRoutes"));

app.listen(PORT, () => {
  console.log("Server is running on Port: " + PORT);
});
