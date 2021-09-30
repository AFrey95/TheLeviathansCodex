const mongoose = require("mongoose");

const professionSchema = new mongoose.Schema({
  name: String,
  docId: String,
  description: String,
  source: String,
  impression: String,
  link: String,

  skillProficiencies: String,
  equipment: String,
});

mongoose.model("professions", professionSchema);
