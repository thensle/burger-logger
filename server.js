//Dependencies
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

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

//Paths to Routes
require("./controller/burger-controller.js")(server);

//Listener
server.listen(port, function(error){
	if(error){
		console.log(error);
	} else {
		console.log("Listening on port " + port);
	};
});