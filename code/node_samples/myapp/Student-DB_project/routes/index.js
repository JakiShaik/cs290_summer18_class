var express = require('express');
var axios = require('axios');
var router = express.Router();
const fs = require("fs");
const model = require('../models/index');
var studentModel = require('../models/students');
const FILE = "mytextfile.txt";

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/studentList', function(req, res, next) {
  studentModel.retrieveStudentsData((err, results) => {
    if (err) throw err;
    console.log(results);
    res.render('student-list', { students: results});
})
});

router.get('/addStudent',function(req,res) {
  res.render('add-student');
});

router.post('/insertStudent',function(req,res) {
    console.log(req.body);
    var data = req.body;
    studentModel.insert(data,(err, results) => {
      if (err) throw err;
      console.log(results);
      res.redirect('/studentList');
  });
});

router.get('/editStudent',function(req,res) {
  var studentId = req.query.studentId;
  console.log(studentId);
  studentModel.retrieveThisStudent(studentId,(err,results)=> {
    if (err) throw err;
      console.log(results);
      var student = results[0];
      res.render('edit-student',{student});
  } );
});

router.post('/editStudent',function(req,res){
  var data = req.body;
  console.log('The body received is ');
  console.log(data);
  studentModel.updateStudent(data,(err,results)=>{
    if (err) throw err;
    console.log('The update results are ');
    console.log(results);
    console.log('***************');
    res.redirect('/studentList');
  }) 
});

router.post('/deleteStudent',function(req,res){
  var id = req.body.id;
  studentModel.deleteStudent(id,(err,results) => {
    if(err) throw err;
    console.log(results);
    res.redirect('/studentList');
  })
});

router.get('/insert',function(req,res) {
  
  model.tableInsert();
  res.send("Inserted into the table");
});

router.get('/retrieveData',function(req,res){
  model.retrieveData();
  res.send('Got the results');
});

router.get('/updateTable',function(req,res){
  model.update();
  res.send('Updated');
});

router.get('/deleteRow',function(req,res){
  model.deleteRow();
  res.send('Deleted');
});

router.get('/demo', function (req, res, next) {
  users= ['a','b'];
  usersJson = {'name':'John','id':'1'}
  res.render('demo.pug', { myusers: users,myusersJson: usersJson, title: "Happy, happy!" });
  });

router.get('/details',function(req,res){
  usersJson = {'name':'Dave','course':'cs290','id':'1'}
  res.render('details.pug', {myusersJson: usersJson });
});

router.get('/formGet',function(req,res){
  console.log(req.query);
  //303d25497d2a6ae3416269815741dd01
  var weatherData = {}
  axios.get(url).then(function(data){
    console.log(data.data);
    console.log(data.data.main.temp);
    weatherData.temp = data.data.main.temp;
    res.render('weather',{data:weatherData});
  }).catch( function(err) {
    console.log(err);
  })

});

router.post('/formPost',function(req,res){
  //write(JSON.stringify(req.body));  
  console.log(req.body);
  var mixed = req.body.username;
  console.log('mixed is '+mixed);
  fs.writeFile("/Users/VirajithaKarnatapu/Documents/summer/code/node_samples/myapp/public/mytextfile.txt", mixed, {encoding:'utf8'}, (err)=> {if (err) throw err;res.render('postInfo',req.body);});
});

/*router.get('/formGet',function(req,res){
  //API calling
  console.log(req.query);
  res.render('getInfo');
});*/
module.exports = router;

