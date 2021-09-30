const mongoose = require("mongoose");
const crud = require("./crud");
const { CLASSES, CLASSES_ID } = require("./definitions");

const Class = mongoose.model("classes");

module.exports = (app) => crud(app, Class, CLASSES, CLASSES_ID);
