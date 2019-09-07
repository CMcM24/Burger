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
    update: (colval, condition, cb) => {
        orm.updateOne("burgers", colval, condition, function(res){
            cb(res);
        })
    },
    delete: (condition, cb) => {
        orm.deleteOne("burgers", condition, function(res){
            cb(res);
        });
    }
};


module.exports = burger;