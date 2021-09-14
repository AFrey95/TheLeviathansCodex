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
};
