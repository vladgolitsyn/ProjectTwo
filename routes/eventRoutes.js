var db = require("../models");

module.exports = function(app) {
  app.get("/api/events", function(req, res) {
    console.log(req.session);
    db.Event.findAll().then(function(query) {
      res.jsonp(query);
    });
  });

  app.post("/api/events", function(req, res) {
    console.log(req.body);

    db.Event.create(req.body).then(function(newEvent) {
      console.log(newEvent);
      res.json(newEvent);
    });
  });
};
