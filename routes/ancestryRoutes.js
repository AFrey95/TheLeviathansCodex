const mongoose = require("mongoose");
const crud = require("./crud");
const { ANCESTRIES, ANCESTRIES_ID } = require("./definitions");

const Ancestry = mongoose.model("ancestries");

module.exports = (app) => crud(app, Ancestry, ANCESTRIES, ANCESTRIES_ID);
