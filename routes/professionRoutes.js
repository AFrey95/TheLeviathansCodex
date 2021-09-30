const mongoose = require("mongoose");
const crud = require("./crud");
const { PROFESSIONS, PROFESSIONS_ID } = require("./definitions");

const Profession = mongoose.model("professions");

module.exports = (app) => crud(app, Profession, PROFESSIONS, PROFESSIONS_ID);
