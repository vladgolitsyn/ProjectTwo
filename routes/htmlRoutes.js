module.exports = function(app) {
  app.get("/", function(req, res) {
    res.render("index");
  });

<<<<<<< HEAD
  app.get("/events", function(req, res) {
    res.render("events");
=======
  app.get("/register", function(req, res) {
    res.render("register");
  });

  app.get("/login", function(req, res) {
    res.render("login");
>>>>>>> 753b83bf514478ef70483ca327fda0efc5741dbc
  });
};
