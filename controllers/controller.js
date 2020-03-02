var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    burger.all(function (data) {
        //   console.log(data);
        var burgerObj = {
            burgers: data
        };
        // console.log(burgerObj);
        res.render("index", burgerObj);
    });
});

router.post("/api/burgers", function (req, res) {
    console.log(req.body.name); //Henry
    burger.create(
        "name", 
        req.body.name, 
        function (result) {
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.update({
        eaten: req.body.eaten
    }, condition, function (result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;