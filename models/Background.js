const mongoose = require("mongoose");

const backgroundSchema = new mongoose.Schema({
  docId: String,
  name: String,
  description: String,
  source: String,
  impression: String,
  link: String,

  isAdvancedBg: Boolean,
  skillProficiencies: String,
  languages: String,
  equipment: String,
  professions: String,
});

mongoose.model("backgrounds", backgroundSchema);
