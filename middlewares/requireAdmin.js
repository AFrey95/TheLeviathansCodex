const UserRoles = require("../models/UserRoles");

module.exports = (req, res, next) => {
  if (req.user.role !== UserRoles.ADMIN) {
    res.status(403).send({ error: "Permission denied." });
  }

  next();
};
