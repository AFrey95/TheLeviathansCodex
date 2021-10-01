const mongoose = require("mongoose");
const crud = require("./crud");
const { RETAINERS, RETAINERS_ID } = require("./definitions");

const Retainer = mongoose.model("retainers");

module.exports = (app) => crud(app, Retainer, RETAINERS, RETAINERS_ID);
