const shortid = require("shortid");
const _ = require("lodash");
const requireAdmin = require("../middlewares/requireAdmin");
const requireLogin = require("../middlewares/requireLogin");

module.exports = (app, Model, route, routeWithId) => {
  app.get(route, requireLogin, async (req, res) => {
    let model = null;

    try {
      model = await Model.find({});
    } catch (err) {
      res.status(500).send(err);
    }

    res.status(200).send(model);
  });

  app.get(routeWithId, requireLogin, async (req, res) => {
    let model = null;

    try {
      model = await Model.findOne({ docId: req.params.id });
    } catch (err) {
      res.status(500).send(err);
    }

    res.status(200).send(model);
  });

  app.post(route, requireLogin, requireAdmin, async (req, res) => {
    const params = {};
    Object.keys(Model.schema.obj).forEach((param) => {
      params[param] = req.body[param];
    });
    params.docId = `${_.kebabCase(params.name)}-${shortid.generate()}`;
    const model = new Model(params);

    try {
      console.log("TRYING TO SAVE DOCUMENT");
      await model.save();
      console.log("DOCUMENT SAVED");
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }

    return res.status(201).send(model);
  });
};
