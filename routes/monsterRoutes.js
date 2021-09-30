const mongoose = require("mongoose");
const crud = require("./crud");
const { MONSTERS, MONSTERS_ID } = require("./definitions");

const Monster = mongoose.model("monsters");

module.exports = (app) => crud(app, Monster, MONSTERS, MONSTERS_ID);
