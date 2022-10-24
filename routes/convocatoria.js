var express = require('express');
var router = express.Router();
var nodemailer= require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('convocatoria');
});
router.post('/'async (req, res, next) {
var nombre= req.body.nombre;
var apellido=req.body.apellido;
var edad=req.body.edad;
var direccion=req.body.direccion;
var puesto=req.body.nombpuesto;

var obj= {
  to:'michumanzoni@gmail.com'
  subjet:'contacto de la Web'
  html: nombre + "" + apellido "", de edad +"" + le interesa el empleo en el area de + "". Su correo: ""+ email + "".  
module.exports = router;
}

var transporter= nodemailer.createTransport({
 host: process.env.SMTP_HOST;
 port: process.env.SMTP_PORT;
 auth:{
 user: process.env.SMTP_USER;
 pass: process.env.SMTP_PASS
 }
})
var info= await transporter.sendMail(obj);
res.render('convocatoria',{
  message: 'Mensaje enviado correctamente,'
});

});