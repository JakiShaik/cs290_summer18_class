var db = require('mysql2');

const config = require('../config/dbcredentials.json');

var conPool = db.createPool(config);

function retrieveData(callback) {
    //var stage = db.stage(config);
    conPool.query("select * from students ",(err,results)=>{
        callback(err,results);
    });

}

function retrieveStudent(sid,callback) {
    //var stage = db.stage(config);
    conPool.query("select SNO,ONID,NAME,team from students where SNO=?",[sid],(err,results)=>{
        callback(err,results);
    });

};

function insert(data,callback) {
    conPool.query("insert into students(ONID,NAME,team) values (?,?,?)",[data.ONID,data.Name,data.Team],(err,results) => {
        callback(err,results);
    })
};

function updateStudent(data,callback) {
    console.log('************')
    conPool.query("update students set ONID=?,NAME=?,team=? where SNO=?",[data.ONID,data.Name,data.Team,data.studentID],(err,results) =>{
        callback(err,results);
    });
};

function deleteStudent(id,callback) {
    conPool.execute("DELETE from students where SNO=?",[id],(err,results) => {
        callback(err,results);
    });
};

module.exports = {
    retrieveStudentsData:retrieveData,
    insert:insert,
    retrieveThisStudent:retrieveStudent,
    updateStudent: updateStudent,
    deleteStudent:deleteStudent,
}