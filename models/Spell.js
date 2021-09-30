const mongoose = require("mongoose");

const spellSchema = new mongoose.Schema({
  docId: String,
  name: String,
  description: String,
  source: String,
  impression: String,
  link: String,

  school: String,
  classes: String,
  level: String,
});

mongoose.model("spells", spellSchema);
