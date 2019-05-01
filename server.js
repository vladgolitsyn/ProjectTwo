var express = require("express");
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");
const db = require("./models");

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static("public"));

var PORT = process.env.PORT || 8080;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require("./routes/htmlRoutes.js")(app);
require("./routes/userRoutes.js")(app);


db.sequelize.sync({}).then(function() {
  app.listen(PORT, function() {
    console.log(
      "Climatize Web App Server listening on: http://localhost:" + PORT
    );
  });
});
