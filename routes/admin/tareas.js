var express = require('express');
var router = express.Router();
var usuariosModel = require('./../../models/usuariosModel')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('admin/tareas', { title: 'Express' });
    layout:'admin/layout'
});

router.get('/', async function(req,res,next){
    try{
       
    }catch(error){
        console.log(error)
    }
})

module.exports = router;