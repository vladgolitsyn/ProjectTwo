var express = require("express");
var exphbs = require("express-handlebars");
var session = require("express-session");
var bodyParser = require("body-parser");
const db = require("./models");

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static("public"));

var PORT = process.env.PORT || 8080;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
    cookie: { secure: true }
  })
);

require("./routes/htmlRoutes.js")(app);
require("./routes/userRoutes.js")(app);
require("./routes/eventRoutes.js")(app);

db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log(
      "Climatize Web App Server listening on: http://localhost:" + PORT
    );
  });
});
