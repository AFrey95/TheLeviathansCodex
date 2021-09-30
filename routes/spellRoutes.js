const mongoose = require("mongoose");
const crud = require("./crud");
const { SPELLS, SPELLS_ID } = require("./definitions");

const Spell = mongoose.model("spells");

module.exports = (app) => crud(app, Spell, SPELLS, SPELLS_ID);
