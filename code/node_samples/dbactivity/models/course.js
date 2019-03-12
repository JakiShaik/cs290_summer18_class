var db = require('mysql2');

const config = require('../config/dbcredentials.json');

var conPool = db.createPool(config);

function retrieveData(callback) {
    //var stage = db.stage(config);
    conPool.query("select * from courses ",(err,results)=>{
        callback(err,results);
    });

}

function retrieveStudent(cid,callback) {
    //var stage = db.stage(config);
    conPool.query("select ID,NUMBER,NAME,Credits from courses where ID=?",[cid],(err,results)=>{
        callback(err,results);
    });

};

function insert(data,callback) {
    conPool.query("insert into courses(NUMBER,NAME,Credits) values (?,?,?)",[data.NUMBER,data.NAME,data.CREDITS],(err,results) => {
        callback(err,results);
    })
};

function updateStudent(data,callback) {
    conPool.query("update courses set NUMBER=?,NAME=?,Credits=? where ID=?",[data.NUMBER,data.NAME,data.CREDITS,data.courseID],(err,results) =>{
        callback(err,results);
    });
};

function deleteStudent(id,callback) {
    conPool.execute("DELETE from courses where ID=?",[id],(err,results) => {
        callback(err,results);
    });
};

module.exports = {
    retrieveCoursesData:retrieveData,
    insert:insert,
    retrieveThisCourse:retrieveStudent,
    updateCourse: updateStudent,
    deleteCourse:deleteStudent,
}