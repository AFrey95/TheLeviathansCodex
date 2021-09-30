const mongoose = require("mongoose");

const ancestrySchema = new mongoose.Schema({
  docId: String,
  name: String,
  description: String,
  source: String,
  impression: String,
  link: String,

  abilityScoreIncrease: String,
  ageRange: String,
  alignment: String,
  languages: String,
  size: String,
  speed: String,
  traits: String,
});

mongoose.model("ancestries", ancestrySchema);
