const mongoose = require("mongoose");
const crud = require("./crud");
const { FEATS, FEATS_ID } = require("./definitions");

const Feat = mongoose.model("feats");

module.exports = (app) => crud(app, Feat, FEATS, FEATS_ID);
