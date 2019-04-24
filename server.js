var express = require("express");
var exphbs = require("express-handlebars");

var app = express();

app.use(express.static("public"));

var PORT = process.env.PORT || 8080;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require("./routes/htmlRoutes.js")(app);

app.listen(PORT, function() {
  console.log(
    "Climatize Web App Server listening on: http://localhost:" + PORT
  );
});
