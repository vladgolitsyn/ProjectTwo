module.exports = function(app) {
  app.get("/", function(req, res) {
    res.render("index");
  });

  app.get("/events", function(req, res) {
    res.render("events");
  });

  app.get("/register", function(req, res) {
    res.render("register");
  });

  app.get("/login", function(req, res) {
    res.render("login");
  });
<<<<<<< HEAD
=======

  app.get("/news", function(req, res) {
    res.render("news");
  });
>>>>>>> cd6b791307c559f35a1bf25ada6763c69850fd17
};
