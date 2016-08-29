var express = require('express'),
    router = express.Router();

    router.get('/todos',function(req,res,next){
        res.send('This is your todo list')
    });

    module.exports = router;