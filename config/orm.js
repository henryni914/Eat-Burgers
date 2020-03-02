var connection = require("../config/connection");

var orm = {
    all: function (tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        // console.log(queryString); //SELECT * FROM burgers;
        connection.query(queryString, function (err, res) {
            if (err) throw err;
            // console.log(res)
            // [
            // RowDataPacket { id: 1, name: 'Cheeseburger', eaten: 0 },
            // RowDataPacket { id: 2, name: 'Double Cheeseburgers', eaten: 0 },
            // RowDataPacket { id: 3, name: 'Bacon Cheeseburgers', eaten: 0 },
            // RowDataPacket { id: 4, name: 'Veggie Burger', eaten: 1 },
            // RowDataPacket { id: 5, name: 'Heart Attack Burger', eaten: 1 },
            // RowDataPacket { id: 6, name: 'Turkey Burger', eaten: 1 }
            // ]
            cb(res);
        });
    },
};

module.exports = orm;