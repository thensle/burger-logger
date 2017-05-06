//Dependencies
var connection = require("./connection.js");

//Create ORM for MySQL queries
var orm = {
	selectAll: function(table_name, callBack){
		var query = "Select * from ??";
		connection.query(query, [table_name], function(error, result){
			if (error){
				console.log(error);
			} else {
				callBack(result);
			};
		});
	},
	insertOne: function(table_name, variable, name, callBack){
		var query = "Insert into ?? (??) values (?)";
		connection.query(query, [table_name, variable, name], function(error, result){
			if (error){
				console.log(error);
			} else {
				callBack(result);
			};
		});
	},
	updateOne: function(table_name, column_name, column_value, id, id_value, callBack){
		var query = "Update ?? set ??=? where ??=?";
		connection.query(query, [table_name, column_name, column_value, id, id_value], function(error, result){
			if (error){
				console.log(error);
			} else {
				callBack(result);
			};
		});
	}
};

module.exports = orm;