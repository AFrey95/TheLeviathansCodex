const passport = require("passport");
const RouteDefinitions = require("./RouteDefinitions");

module.exports = (app) => {
  app.get(
    RouteDefinitions.GOOGLE_OATH,
    passport.authenticate("google", {
      scope: ["profile", "email"],
    })
  );

  app.get(
    RouteDefinitions.GOOGLE_OATH_CALLBACK,
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
