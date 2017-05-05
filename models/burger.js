//Dependencies
var orm = require("./config/orm.js");

//Calls to database specific to burger_logger
var burger = {
	//Call for grabbing all devoured burgers
	selectDevoured: function(){
		orm.selectAll("burgers", "devoured", false, function(data){
			console.log(data);
		});
	},
	selectNotDevoured: function(){
		orm.selectAll("burgers", "devoured", true, function(data){
			console.log(data);
		});
	},
	//Call to create new burger
	addBurger: function(name){
		orm.insertOne("burgers", "burger_name", name, function(data){
			console.log(data);
		});
	},
	//Call to update burger as devoured in database
	devourBurger: function(value){
		orm.updateOne("burgers", "devoured", true, "id", value, function(data){
			console.log(data);
		};
	};
};

module.exports = burger;