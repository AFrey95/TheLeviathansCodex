const mongoose = require("mongoose");
const crud = require("./crud");
const { ITEMS, ITEMS_ID } = require("./definitions");

const Item = mongoose.model("items");

module.exports = (app) => crud(app, Item, ITEMS, ITEMS_ID);
