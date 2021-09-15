const passport = require("passport");
const { Strategy: GoogleStrategy } = require("passport-google-oauth20");
const mongoose = require("mongoose");
const keys = require("../config/keys");
const routeDefinitions = require("../routes/routeDefinitions");

const User = mongoose.model("users");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: routeDefinitions.GOOGLE_OATH_CALLBACK,
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id });
      if (!!existingUser) {
        done(null, existingUser);
      } else {
        const user = await new User({ googleId: profile.id }).save();
        done(null, user);
      }
    }
  )
);