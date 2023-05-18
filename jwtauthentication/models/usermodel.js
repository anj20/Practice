const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const isEmail = require("validator").isEmail;
const bcrypt = require("bcrypt");

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, "Please enter a username"],
    unique: true,
    lowercase: true,
  },
  email: {
    type: String,
    required: [true, "Please enter an email"],
    unique: true,
    validator: [isEmail, "Please enter a valid email"],
  },
  password: {
    type: String,
    required: [true, "Please enter a password"],
    minlength: [6, "Minimum password length is 6 characters"],
  },
});

//fire before user is saved to db
userSchema.pre("save", async function(next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

//after doc is saved to db
userSchema.post("save", function(doc, next) {
  console.log("new user was created and saved", doc);
  next();
});

// static method to login user
userSchema.statics.login = async function(username, password) {
  const user = await this.findOne({ username });
  // console.log(username);
  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      console.log("user logged in");
      return user;
    }
    throw Error("incorrect password");
  }
  throw Error("incorrect username");
};

const User = mongoose.model("user", userSchema);

module.exports = User;
