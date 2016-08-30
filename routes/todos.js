var express = require('express'),
    router = express.Router(),
   mongojs = require('mongojs'),
   db = mongojs('mongodb://Neardanger:magadan312@ds019856.mlab.com:19856/mean-todos',['todos']);



    router.get('/todos',function(req,res,next){
        db.todos.find(function(err,todos){
            if(err){
                res.send(err);
            }else {
                res.json(todos)

            }
        })
    });

    router.get('/todos/:id',function(req,res,next){
        db.todos.findOne({_id:mongojs.ObjectId(req.params.id)},
            function(err,todos){
                if(err){
                    res.send(err)
                } else{
                    res.json(todos)
                }
            })
    });

router.post('/todos',function(req,res,next){
    var todos = req.body;
    if(!todos.text || !(todos.isCompleted + '')){
        res.status(400);
        res.json({
            "error":"Invalid"
        });
    }else{
        db.todos.save(todos,function(err,result){
            if(err){
                res.send(err);
            }else{
                res.json(result)
                 }
            })
          }
     });

     router.put('/todos/:id',function(req,res,next){
    var todos = req.body;
    var updObj = {};

    if(todos.isCompleted){
        updObj.isCompleted = todos.isCompleted
    }

    if(todos.text){
        updObj.text = todos.text;
    }

    if(!updObj){
        res.status(400);
        res.json({
            "error":"Invalid"
        });

    }else{
        db.todos.update({
            _id: mongojs.ObjectId(req.params.id) },
            
             updObj,{},function(err,result){
                 if (err){
                     res.send(err)
                 }else{
                     res.json(result)
                 }
            })
        }
     })

     router.delete('/todos/:id',function(req,res,next){
         db.todos.remove({
             _id:mongojs.ObjectId(req.params.id)},
             '',function(err,result){
                 if(err){
                     res.send(err);
                 }else{
                     res.json(result)
                 }
             })
          })





    module.exports = router;