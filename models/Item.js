const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  docId: String,
  name: String,
  description: String,
  source: String,
  impression: String,
  link: String,

  type: String,
  isMagical: Boolean,
  isRequiresAttunement: Boolean,
  rarity: String,
});

mongoose.model("items", itemSchema);
