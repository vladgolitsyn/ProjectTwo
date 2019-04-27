var db = require("../models");

module.exports = function(app) {
  var session = require("express-session");

  var loggedInUser;

  app.use(
    session({
      secret: "secret",
      resave: true,
      saveUninitialized: true,
      cookie: { secure: true }
    })
  );

  app.post("/register", function(req, res) {
    console.log(req.body);
    db.User.findOne({ where: { email: req.body.email } }).then(found => {
      console.log(found);
      if (found == null) {
        db.User.create(req.body).then(function(newUser) {
          //console.log(newUser);
          console.log("User created");
          loggedInUser = newUser;
          req.session.loggedin = true;
          req.session.name = req.body.name;
          res.jsonp({ success: true });
        });
      } else {
        console.log("User already Exists");
        req.session.loggedin = false;
        res.jsonp({ success: false });
      }
    });
  });

  app.post("/login", function(req, res) {
    console.log(req.body);
    db.User.findOne({
      where: { email: req.body.email, password: req.body.password }
    }).then(found => {
      if (found != null) {
        console.log("User Logged In");
        loggedInUser = found;
        req.session.loggedin = true;
        res.jsonp({ success: true });
      } else {
        console.log("Incorrect Credentials");
        req.session.loggedin = false;
        res.jsonp({ success: false });
      }
    });
  });

  app.get("/userProfile", function(req, res) {
    console.log(req.session);
    console.log(loggedInUser.dataValues);
    console.log(req.session);
    res.render("userProfile", loggedInUser.dataValues);
  });

  app.post("/", function(req, res) {
    loggedInUser = null;
    req.session.destroy();
    console.log("User signed out");
    res.jsonp({ success: true });
  });
};
