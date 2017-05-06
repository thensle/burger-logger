//Dependencies
var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();

//Routes

router.post("/", function(request, response){
	var name = req.body.text;
	burger.addBurger(name);
});

router.put("/:id", function(request, response){
	var id = req.params.id;
	burger.devourBurger(id);
});

router.get("/", function(request, response){
	burger.selectAll(function(data){
		var burgers = {
			devoured: data
		};

		response.render("index", burgers);
	});
});

module.exports = router;