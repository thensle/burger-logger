//Dependencies
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var exphbs = require("express-handlebars");

//Server and Port Config
var server = express();
var port = 8080;

//Body Parse Config
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.text());
server.use(bodyParser.json({ type: "application/vnd.api+json" }));

//Static Directory
server.use(express.static("./public"));

//HandleBars
server.engine("handlebars", exphbs({ defaultLayout: "main" }));
server.set("view engine", "handlebars");

//Method-Override
server.use(methodOverride("_method"));

//Paths to API Routes
var route = require("./controller/burger-controller.js");
server.use("/", route);

//Listener
server.listen(port, function(error){
	if(error){
		console.log(error);
	} else {
		console.log("Listening on port " + port);
	};
});