const passport = require("passport");
const { GOOGLE_OAUTH, GOOGLE_OAUTH_CALLBACK } = require("./routes");

module.exports = (app) => {
  app.get(
    GOOGLE_OAUTH,
    passport.authenticate("google", {
      scope: ["profile", "email"],
    })
  );

  app.get(GOOGLE_OAUTH_CALLBACK, passport.authenticate("google"));

  app.get("/api/logout", (req, res) => {
    req.logout();
    res.send(req.user);
  });

  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
};
