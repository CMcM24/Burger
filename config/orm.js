var connection = require("./connection.js");




function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
    var arr = [];

    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
        var value = ob[key];
        // check to skip hidden properties
        if (Object.hasOwnProperty.call(ob, key)) {
            // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
            // e.g. {sleepy: true} => ["sleepy=true"]
            arr.push(key + "=" + value);
        }
    }
    return arr.toString();
}




var orm = {

    selectAll: (burgerTable, cb) => {
        var queryString = "SELECT * FROM " + burgerTable + ";";

        connection.query(queryString, function (err, result) {
            if (err) throw err;
            cb(result);
        })
    },
    insertOne: (burgerTable, colName, values, cb) => {
        var queryString = "INSERT INTO " + burgerTable + " (" + colName.toString() + ") VALUES (" + printQuestionMarks(values.length) + ") ";
        console.log(queryString);

        connection.query(queryString, values, function (err, result) {
            if (err) throw err;
            cb(result);
        })
    },
    updateOne: (burgerTable, colval, condition, cb) => {
        var queryString = "UPDATE " + burgerTable + " SET " + objToSql(colval) + " WHERE " + condition;
        console.log(queryString);

        connection.query(queryString, function (err, result) {
            if (err) throw err;
            cb(result);
        })
    },
    deleteOne: (burgerTable, condition, cb) => {
        var queryString = "DELETE FROM " + burgerTable + " WHERE " + condition;

        console.log(queryString);
        connection.query(queryString, function(err, result){
            if (err) throw err;
            cb(result);
        })
    }

};

module.exports = orm;