var connection = require("../config/connection");

function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
};

function objToSql(ob) {
    var arr = [];
  
    for (var key in ob) {
      var value = ob[key];
      if (Object.hasOwnProperty.call(ob, key)) {
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        arr.push(key + "=" + value);
      }
    }
  
    return arr.toString();
  };

var orm = {
    all: function (tableInput, cb) {
        let queryString = "SELECT * FROM " + tableInput + ";";
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
    create: function (table, cols, vals, cb) {
        console.log("orm vals: " + vals)
        let queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES ( ? )";
        // queryString += printQuestionMarks(vals.length);
        // queryString += ") ";
        // console.log(queryString);
        connection.query(queryString, vals, function (err, res) {
            if (err) throw err;
            cb(res);
        });
    },
    update: function (table, objColVals, condition, cb) {
        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
};

module.exports = orm;