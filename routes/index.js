module.exports = (app) => {
  require("./authRoutes")(app);
  require("./ancestryRoutes")(app);
  require("./backgroundRoutes")(app);
  require("./classRoutes")(app);
  require("./featRoutes")(app);
  require("./itemRoutes")(app);
  require("./mechanicRoutes")(app);
  require("./professionRoutes")(app);
  require("./spellRoutes")(app);
  require("./subclassRoutes")(app);
  // require("./userRoutes")(app);
};
