var express = require('express');
var router = express.Router();
var usuariosModel = require('./../../models/usuariosModel')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('admin/login', { title: 'Express' });
    layout:'admin/layout'
});

router.post('/', async function(req,res,next){
    try{
        console.log(req.body);
        var usuario = req.body.usuario;
        var password = req.body.password;
        var data = await usuariosModel.getUserAndPassword(usuario,password);

        console.log(data);

        if(data != undefined){
            res.redirect('/admin/novedades')
        } else {
            res.render('admin/login',{
                layout:'admin/layout',
                error:true
            })
        }

    }catch(error){
        console.log(error)
    }
})

module.exports = router;