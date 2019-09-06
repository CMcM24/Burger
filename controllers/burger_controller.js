var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");



router.get("/", function(req, res){
    burger.select(function(data){
        var burgerObj = {
            burgers: data
        };
        console.log(burgerObj);
        res.render("index", burgerObj);
    });
});

router.post("/api/burgers", function(req, res){
    burger.insert([
        "burger_name"
    ], [
        req.body.burger_name
    ],
    function(result){
        res.json({id: result.insertId})
    })
})

module.exports = router;














module.exports = router;

