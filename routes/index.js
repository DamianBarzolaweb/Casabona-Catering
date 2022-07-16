var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post ('/', async function(req,res,next){
  var nombre = req.body.nombre;
  var email = req.body.email;
  var localidad = req.body.localidad;
  var mensaje = req.body.mensaje;
})

var obj = {
  to:'barzoladamian85@gmail.com',
  subject:'Contacto desde la web',
  html: 'prueba' 
}

module.exports = router;
