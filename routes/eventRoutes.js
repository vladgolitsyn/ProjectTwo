// // Import packages
// const express = require("express");
// const path = require("path");

// // Create an instance of Router
// const router = express.Router();

// // Talk to the model
// // const VAR1 = require(path.join(__dirname, "..", "models", "---.js"));

// /****************************************************************************
//     Set up the routes
// *****************************************************************************/

// //Get all events from DB:
// app.get("/events", function(req, res) {
//   db.Post.findAll({}).then(function(dbPost) {
//     res.json(dbPost);
//   });
// });

// //Get route for returning posts of a specific category  **Nice to have?**
// app.get("/events/:category", function(req, res) {
//   db.Post.findAll({
//     where: {
//       category: req.params.category
//     }
//   }).then(function(dbPost) {
//     res.json(dbPost);
//   });
// });

// // Get route for retrieving a single post (by category)  **Really nice to have???**
// // app.get("/events/:id", function (req, res) {
// //     db.Post.findOne({
// //         where: {
// //             id: req.params.id
// //         }
// //     })
// //         .then(function (dbPost) {
// //             res.json(dbPost);
// //         });
// // });

// // POST route for saving a new event
// app.post("/events", function(req, res) {
//   console.log(req.body);
//   db.Post.create({
//     name: req.body.name,
//     date: req.body.date,
//     location: req.body.location,
//     description: req.body.description,
//     category: req.body.category, //FYI this is not in events.js file
//     participants: req.body.participants
//   }).then(function(dbPost) {
//     res.json(dbPost);
//   });
// });

// // DELETE route for deleting events
// app.delete("/events/:id", function(req, res) {
//   db.Post.destroy({
//     where: {
//       id: req.params.id
//     }
//   }).then(function(dbPost) {
//     res.json(dbPost);
//   });
// });

// // PUT route for updating events
// app.put("/events", function(req, res) {
//   db.Post.update(req.body, {
//     where: {
//       id: req.body.id
//     }
//   }).then(function(dbPost) {
//     res.json(dbPost);
//   });
// });

// module.exports = router;

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
