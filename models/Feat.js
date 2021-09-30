const mongoose = require("mongoose");

const featSchema = new mongoose.Schema({
  docId: String,
  name: String,
  description: String,
  source: String,
  impression: String,
  link: String,

  prerequisites: String,
});

mongoose.model("feats", featSchema);
