var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {

  var empty = !Boolean(req.session.number);
  var notNumber = isNaN(Number(req.session.number));
  res.render('index', {
    title: (notNumber)?'Ingresar':'Resultado',
    empty: empty,
    notNumber: notNumber,
    number: req.session.number
  });
});

router.post('/ingresar', function(req, res) {
  if(req.body.number) {
    req.session.number = req.body.number;
  }
  res.redirect('/');
});

router.get('/cambiar', function(req, res) {
  req.session.destroy();
  res.redirect('/');
});

module.exports = router;
