var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

router.get('/zj4R1c51Fk4f/download', function(req, res) {

  if (req.session.alreadyDownloaded) {
    return res.redirect('/zj4R1c51Fk4f/downloaded');  
  }

  req.session.alreadyDownloaded = true;
  res.render('zj4R1c51Fk4f/download');

});

router.get('/zj4R1c51Fk4f', function(req, res) {

  if (req.session.alreadyDownloaded) {
    return res.redirect('/zj4R1c51Fk4f/expired');  
  }

  res.render('zj4R1c51Fk4f/index');

});

router.get('/n9EEARjAtN3i', function(req, res) {

  if (req.session.alreadyDownloaded) {
    return res.redirect('/zj4R1c51Fk4f/expired');  
  }

  res.render('n9EEARjAtN3i/index');

});

router.get('/zj4R1c51Fk4f/downloaded', function(req, res) {

  res.render('zj4R1c51Fk4f/downloaded');

});

// add your routes here

module.exports = router