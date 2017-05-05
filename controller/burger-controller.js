//Dependencies
var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();

// API Routes

router.get("/", function(request, response){
	burger.selectDevoured();
});

router.get("/", function(request, response){
	burger.selectNotDevoured();
});

router.post("/", function(request, response){
	var name = req.body.text;
	burger.addBurger(name);
});

router.put("/:id", function(request, response){
	var id = req.params.id;
	burger.devourBurger(id);
});