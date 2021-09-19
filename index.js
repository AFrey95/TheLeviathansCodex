const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const path = require("path");

const authRoutes = require("./routes/authRoutes");
const keys = require("./config/keys");
require("./models/User");
require("./services/passport");

const PORT = process.env.PORT || 5000;

mongoose
  .connect(keys.mongoURI)
  .then(() => {
    console.log("Connected to mongodb");
  })
  .catch((err) => {
    console.log("COULD NOT CONNECT TO MONGODB", err);
  });

const app = express();

app.use(
  cookieSession({
    maxAge: 2592000000, // 3 days
    keys: [keys.cookieKey],
  })
);
app.use(passport.initialize());
app.use(passport.session());

authRoutes(app);

if (process.env.NODE_ENV === "production") {
  // serve up js, css, etc
  app.use(express.static("client/build"));

  // serve up statics like html when it doesn't recognize the route above
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT);
