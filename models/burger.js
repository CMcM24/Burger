var orm = require("../config/orm.js");

var burger = {
    select: (cb) => {
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    },
    insert: (cols, vals, cb) => {
        orm.insertOne("burgers", cols, vals, function(res){
            cb(res);
        });
    },
    update: () => {},
};


module.exports = burger;