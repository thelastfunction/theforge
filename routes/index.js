var express = require('express');
var dataJSON = require('../data.json');


// home


	




// var router = express.Router();

const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var fileData=dataJSON.movies;
  	res.render('index', {page:'This is home', menuId:2,frm_data:fileData});
});




router.get('/aboutus', function(req, res, next) {
	var fileData=dataJSON.movies;
  res.render('single_page', {page:"About Us",menuId:1,frm_data:fileData});
});

// router.get('/contactus', function(req, res, next) {
//   res.render('single_page', {page:'Contact Us', menuId:'contact'});
// });

// router.get('/blog', function(req, res, next) {
//   res.render('blog', {page:'This is my blog', menuId:'blog'});
// });

// router.get('/research', function(req, res, next) {
//   res.render('research', {page:'This is for commercial use', menuId:'research'});
// });

module.exports = router;
