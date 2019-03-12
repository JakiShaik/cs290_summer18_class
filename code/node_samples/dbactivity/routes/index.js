var express = require('express');
var router = express.Router();
var courseModel = require('../models/course');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/courseList', function(req, res, next) {
  courseModel.retrieveCoursesData((err, results) => {
    if (err) throw err;
    console.log(results);
    res.render('course-list', { courses: results});
})
});
router.get('/addCourse',function(req,res) {
  res.render('add-course');
});

router.post('/insertCourse',function(req,res) {
  console.log(req.body);
  var data = req.body;
  courseModel.insert(data,(err, results) => {
    if (err) throw err;
    console.log(results);
    res.redirect('/courseList');
});
})
module.exports = router;
