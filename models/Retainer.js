const mongoose = require("mongoose");

const retainerSchema = new mongoose.Schema({
  docId: String,
  name: String,
  description: String,
  source: String,
  impression: String,
  link: String,

  armorClass: String,
  primaryAbility: String,
  saves: String,
  skills: String,
  signatureAttack: String,
  specialActions: String,
});

mongoose.model("retainer", retainerSchema);
