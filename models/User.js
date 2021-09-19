const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  googleId: String,
  name: String,
  pfp: String,
});

mongoose.model("users", userSchema);
