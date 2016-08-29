var express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    app = express(),
    mongoose = require('mongoose')

    index = require('./routes/index'),
    todos = require('./routes/todos')


    //Middleware

    app.set('views',path.join(__dirname,'views'))
    app.set('view engine','ejs')
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended: false}))

    app.use('/',index)
    app.use('/api/v1',todos)



   var port = process.env.PORT || 3000


   app.listen(port,function(){
       console.log("Now listening to server" + port)
   })