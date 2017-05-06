//Dependencies
var orm = require("../config/orm.js");

//Calls to database specific to burger_logger
var burger = {
	//Call for grabbing all devoured burgers
	selectAll: function(callBack){
		orm.selectAll("burgers", function(data){
			callBack(data);
		});
	},
	//Call to create new burger
	addBurger: function(name, callBack){
		orm.insertOne("burgers", "burger_name", name, function(data){
			callBack(data);
		});
	},
	//Call to update burger as devoured in database
	devourBurger: function(value, callBack){
		orm.updateOne("burgers", "devoured", true, "id", value, function(data){
			callBack(data);
		});
	}
};

module.exports = burger;