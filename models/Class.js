const mongoose = require("mongoose");

const classSchema = new mongoose.Schema({
  docId: String,
  name: String,
  description: String,
  source: String,
  impression: String,
  link: String,

  hitDice: String,
  proficiencies: String,
  equipment: String,
  features: String,
});

mongoose.model("classes", classSchema);
