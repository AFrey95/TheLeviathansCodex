const mongoose = require("mongoose");
const crud = require("./crud");
const { BACKGROUNDS, BACKGROUNDS_ID, ANCESTRIES } = require("./definitions");

const Background = mongoose.model("backgrounds");

module.exports = (app) => crud(app, Background, BACKGROUNDS, ANCESTRIES);
