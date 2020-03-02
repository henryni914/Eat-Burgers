var orm = require("../config/orm.js");

var burger = {
    all: function (cb) {
        orm.all("burgers", function (res) {
            // console.log("Model res: " + res);
            cb(res);
        });
    },
    create: function (cols, vals, cb) {
        //console.log("from burger.create: " + cols + " , " + vals); //from burger.create: name Henry
        orm.create("burgers", cols, vals, function (res) {
            cb(res);
        })
    },
    update: function (objColVals, condition, cb) {
        orm.update("burgers", objColVals, condition, function (res) {
            cb(res);
        });
    }
};

module.exports = burger;