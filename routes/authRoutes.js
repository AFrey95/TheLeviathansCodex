const passport = require("passport");
const routeDefinitions = require("./routeDefinitions");

module.exports = (app) => {
  app.get(
    routeDefinitions.GOOGLE_OATH,
    passport.authenticate("google", {
      scope: ["profile", "email"],
    })
  );

  app.get(
    routeDefinitions.GOOGLE_OATH_CALLBACK,
    passport.authenticate("google")
  );

  app.get("/api/logout", (req, res) => {
    req.logout();
    res.send(req.user);
  });

  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
};
