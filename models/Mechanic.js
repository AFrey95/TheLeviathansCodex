const mongoose = require("mongoose");

const mechanicSchema = new mongoose.Schema({
  docId: String,
  name: String,
  description: String,
  source: String,
  impression: String,
  link: String,
});

mongoose.model("mechanics", mechanicSchema);
