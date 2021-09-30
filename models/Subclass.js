const mongoose = require("mongoose");

const subclassSchema = new mongoose.Schema({
  docId: String,
  name: String,
  description: String,
  source: String,
  impression: String,
  link: String,

  class: String,
  features: String,
});

mongoose.model("subclasses", subclassSchema);
