// NPM pkg
var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');

// create express server
var app = express();

// PORT will work on local host 8080
var PORT = process.env.PORT || 8080;
// standard bodyParser


app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());
// Check if server is running when press node.js
app.use(bodyParser.text({ type: "text/html"}));
app.use(bodyParser.json({type: "application/vnd.custom-type"}));

require("./app/routing/apiRoutes")(app);
// require(__dirname, "./app/routing/htmlRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});