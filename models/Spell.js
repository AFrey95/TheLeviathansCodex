const mongoose = require("mongoose");

const spellSchema = new mongoose.Schema({
  docId: String,
  name: String,
  description: String,
  source: String,
  impression: String,
  link: String,

  level: String,
  school: String,
  classes: String,
  castingTime: String,
  range: String,
  components: String,
  duration: String,
});

mongoose.model("spells", spellSchema);
