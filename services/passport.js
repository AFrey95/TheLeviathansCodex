const passport = require("passport");
const { Strategy: GoogleStrategy } = require("passport-google-oauth20");
const keys = require("../config/keys");
const RouteDefinitions = require("../routes/RouteDefinitions");

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: RouteDefinitions.GOOGLE_OATH_CALLBACK,
    },
    (accessToken, refreshToken, profile, done) => {
      console.log("accessToken", accessToken);
      console.log("refresh token", refreshToken);
      console.log("profile", profile);
    }
  )
);
