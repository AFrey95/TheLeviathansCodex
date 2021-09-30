const mongoose = require("mongoose");
const crud = require("./crud");
const { MECHANICS, MECHANICS_ID } = require("./definitions");

const Mechanic = mongoose.model("mechanics");

module.exports = (app) => crud(app, Mechanic, MECHANICS, MECHANICS_ID);
