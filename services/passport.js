const passport = require("passport");
const { Strategy: GoogleStrategy } = require("passport-google-oauth20");
const mongoose = require("mongoose");
const keys = require("../config/keys");
const { GOOGLE_OAUTH_CALLBACK } = require("../routes/definitions");

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
      callbackURL: GOOGLE_OAUTH_CALLBACK,
      proxy: true,
    },
    async (accessToken, refreshToken, profile, done) => {
      // TODO: Add try/catch blocks to the async calls
      console.log(profile);
      const existingUser = await User.findOne({ googleId: profile.id });
      if (!!existingUser) {
        done(null, existingUser);
      } else {
        try {
          const user = await new User({
            googleId: profile.id,
            name: profile.name.givenName,
            pfp: profile.photos?.[0]?.value || null, //TODO: add default photo link
          }).save();
          done(null, user);
        } catch (err) {
          console.error("ERROR: Could not create new user.", error);
        }
      }
    }
  )
);
