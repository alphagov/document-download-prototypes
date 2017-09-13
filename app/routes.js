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

router.get('/m7UcKjB70WLa/download', function(req, res) {

  if (req.session.downloadedOneTime) {
    return res.redirect('/m7UcKjB70WLa/downloaded-1st-time');  
  }

  req.session.downloadedOneTime = true;
  res.render('m7UcKjB70WLa/download');

});

router.get('/m7UcKjB70WLa', function(req, res) {

  if (req.session.downloadedOneTime) {
    return res.redirect('/m7UcKjB70WLa/nino-2nd-time');  
  }

  res.render('m7UcKjB70WLa/index');

});

router.get('/m7UcKjB70WLa/download-2nd-time', function(req, res) {

  if (req.session.downloadExpired) {
    return res.redirect('/m7UcKjB70WLa/expired');  
  }

  req.session.downloadExpired = true;
  res.render('m7UcKjB70WLa/download-2nd-time');

});

router.get('/m7UcKjB70WLa/nino-2nd-time', function(req, res) {

  if (req.session.downloadExpired) {
    return res.redirect('/m7UcKjB70WLa/expired');  
  }

  res.render('m7UcKjB70WLa/nino-2nd-time');

});

router.get('/BmitNh37tCBbtH8v2XOriNFTng0VRTA1lZKWY7Oxr/download', function(req, res) {

  if (req.session.alreadyDownloaded) {
    return res.redirect('/zj4R1c51Fk4f/downloaded');  
  }

  req.session.alreadyDownloaded = true;
  res.render('BmitNh37tCBbtH8v2XOriNFTng0VRTA1lZKWY7Oxr/download');

});

router.get('/BmitNh37tCBbtH8v2XOriNFTng0VRTA1lZKWY7Oxr', function(req, res) {

  if (req.session.alreadyDownloaded) {
    return res.redirect('/BmitNh37tCBbtH8v2XOriNFTng0VRTA1lZKWY7Oxr/expired');  
  }

  res.render('BmitNh37tCBbtH8v2XOriNFTng0VRTA1lZKWY7Oxr/index');

});




// add your routes here

module.exports = router