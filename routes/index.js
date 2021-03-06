var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


//para el mail
router.post ('/', async function(req,res,next){
  console.log(req.body)
  var nombre = req.body.nombre;
  var apellido = req.body.apellido;
  var email = req.body.email;
  var localidad = req.body.localidad;
  var telefono = req.body.telefono;
  var mensaje = req.body.mensaje;


var obj = {
  to:'damianbarzolaweb@gmail.com',
  subject:'Contacto desde la web',
  html: `${nombre} ${apellido} se contactó a traves de la web. Su email es ${email} y vive en la localidad de ${localidad}. Su teléfono es: ${telefono} y su mensaje fue el siguiente: ${mensaje}`
}

var transport = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  auth: {
    user:process.env.SMTP_USER,
    pass:process.env.SMTP_PASS,
  }
})//finaliza transporter

var info = await transport.sendMail(obj);

res.render('index', {
  message: 'Mensaje enviado correctamente'
})


}) //finaliza router post



module.exports = router;
