const mongoose = require("mongoose");
const crud = require("./crud");
const { SUBCLASSES, SUBCLASSES_ID } = require("./definitions");

const Subclass = mongoose.model("subclasses");

module.exports = (app) => crud(app, Subclass, SUBCLASSES, SUBCLASSES_ID);
