var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/cs290info',function(req,res) {
  res.send({
    "Course":"CS290",
    "Credits":4,
    "location":"KEC1003"
  });
})
router.get('/demo', function (req, res, next) {
  users= ['a','b'];
  res.render('demo.pug', { myusers: users, title: "Happy, happy!" });
  });
module.exports = router;
