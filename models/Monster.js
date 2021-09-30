const mongoose = require("mongoose");

const monsterSchema = new mongoose.Schema({
  docId: String,
  name: String,
  description: String,
  source: String,
  impression: String,
  link: String,

  terrain: String,
  armorClass: String,
  hitPoints: String,
  speed: String,
  skills: String,
  senses: String,
  languages: String,
  challengeRating: String,
  traits: String,
  actions: String,
  reactions: String,
  lairActions: String,
  legendaryActions: String,
});
