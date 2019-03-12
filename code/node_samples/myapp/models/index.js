//var db = require('mysql2-db');
var db = require('mysql2');
//You should also create json file in the config directory (This config diretory should be created in root directory of your project)
//Inside that JSON file, you should create JSON object with your credentials. 
//Eg: {"user":"cs290_<onid>", "password":"<your-password>", "host":"classmysql.engr.oregonstate.edu", "database":"cs290_<Your-ONID>"}

const config = require('../config/dbcredentials.json');

var conPool = db.createPool(config);

function tableInsert_copy() {

    conPool.query("insert into test(col1, col2) values (?,?)", [111, 'Hellloooooooo, World1!'],(err,results)=>{
        if(err) throw err;
        console.log(results);
    })
}


function tableInsert() {
    var stage = db.stage(config);
stage.execute("create table if not exists test(col1 mediumint, col2 varchar(50));")
stage.execute("insert into test(col1, col2) values (?,?)", [10, 'Hello, World1!']);
stage.execute("insert into test(col1, col2) values (:id, :txt)", { id: 11, txt: "This works fine" });


stage.finale(function (err, results) {
    if(err) {
    throw err;
}
console.log('inserted '+results);
}
);
}
function retrieveData_copy() {
    //var stage = db.stage(config);
    conPool.query("select * from test ",(err,results)=>{
        if(err) {
            throw err;
        }
        console.log(results);
    });

}

function retrieveData() {
    var stage = db.stage(config);
    stage.query("select * from test ").finale(((err,results)=>{
        if(err) {
            throw err;
        }
        console.log(results);
    }));

}

function update_copy() {
    conPool.query("update test set col1=200 where col1=20",(err,results)=>{
        if(err) {
            throw err;
        }
        console.log(results);
    });
}

function update() {
    var stage = db.stage(config);
    stage.execute("update test set col1=200 where col1=20").finale(((err,results)=>{
        if(err) {
            throw err;
        }
        console.log(results);
    }))
}

function deleteRow_Copy() {
    conPool.execute("DELETE from test where col1=11",(err,results)=>{
        if(err) {
            throw err;
        }
        console.log(results);
    });
};

function deleteRow() {
    var stage = db.stage(config);
    stage.execute("DELETE from test where col1=20").finale(((err,results)=>{
        if(err) {
            throw err;
        }
        console.log(results);
    }));
};


//In order to make these methods available to extrnal files, you should export these methods
module.exports = {
    tableInsert:tableInsert_copy,
    retrieveData:retrieveData_copy,
    update: update_copy,
    deleteRow:deleteRow_Copy,
}