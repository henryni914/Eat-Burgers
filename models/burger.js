var orm = require("../config/orm.js");

var burger = {
    all: function (cb) {
        orm.all("burgers", function (res) {
            // console.log("Model res: " + res);
            cb(res);
        });
    },
};

module.exports = burger;