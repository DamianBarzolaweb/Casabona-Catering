var express = require('express');
var router = express.Router();
var tareasModel = require('../../models/tareasModel')


router.get('/', async function(req,res,next){
    var tareas = await tareasModel.getTareas();

    res.render('admin/tareas',{
        layout:'admin/layout',
        persona:req.session.nombre,
        tareas 
        
    });   
});

// router.get('/', function(req, res, next) {
//   res.render('admin/tareas', { title: 'Express' });
//     layout:'admin/layout'
// });

// router.get('/', async function(req,res,next){
//     try{
       
//     }catch(error){
//         console.log(error)
//     }
// })
 
// module.exports = router;