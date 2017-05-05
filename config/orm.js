//Dependencies
var connection = require("./connection.js");

//Create ORM for MySQL queries
var orm = {
	selectAll: function(devoured_value){
		var query = "Select * from burgers where devoured=?";
		connection.query(query, [devoured_value], function(error, result){
			if (error){
				console.log(error);
			} else {
				console.log(result);
			};
		});
	};
	insertOne: function(name){
		var query = "Insert into burgers (burger_name) values (?)";
		connection.query(query, [name], function(error, result){
			if (error){
				console.log(error);
			} else {
				console.log(result);
			};
		});
	};
	updateOne: function(devoured_value, burger_id){
		var query = "Update burgers set devoured=? where id=?";
		connection.query(query, [devoured_value, burger_id], function(error, result){
			if (error){
				console.log(error);
			} else {
				console.log(result);
			};
		});
	};
};

module.exports = orm;