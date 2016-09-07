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

    router.get('/todo/:id',function(req,res,next){
        db.todos.findOne({_id:mongojs.ObjectId(req.params.id)},
            function(err,todo){
                if(err){
                    res.send(err)
                } else{
                    res.json(todo)
                }
            })
    });

router.post('/todo',function(req,res,next){
    var todo = req.body;
    if(!todo.text || !(todo.isFinished + '')){
        res.status(400);
        res.json({
            "error":"Incorrect"
        });
    }else{
        db.todos.save(todo,function(err,result){
            if(err){
                res.send(err);
            }else{
                res.json(result)
                 }
            })
          }
     });

     router.put('/todo/:id',function(req,res,next){
    var todo = req.body;
    var updObj = {};

    if(todo.isFinished){
        updObj.isFinished = todo.isFinished
    }

    if(todo.text){
        updObj.text = todo.text;
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

     router.delete('/todo/:id',function(req,res,next){
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