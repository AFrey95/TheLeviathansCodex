const passport = require("passport");
const { GOOGLE_OAUTH, GOOGLE_OAUTH_CALLBACK } = require("./definitions");

module.exports = (app) => {
  app.get(
    GOOGLE_OAUTH,
    passport.authenticate("google", {
      scope: ["profile", "email"],
    })
  );

  app.get(
    GOOGLE_OAUTH_CALLBACK,
    passport.authenticate("google"),
    (req, res) => {
      res.redirect("/");
    }
  );

  app.get("/api/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
};
