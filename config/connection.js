//Dependencies
var mysql = require("mysql");

//Create connection to database
var connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "burger_logger"
});

//Establish connection, confirmation
connection.connect(function(error){
	if(error){
		console.log(error);
	} else {
		console.log("Connection made to: " + connection.threadId);
	};
});

module.exports = connection;