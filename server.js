var express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
  
    

    index = require('./routes/index'),
    todos = require('./routes/todos'),

    app = express()


    //Middleware

    app.set('views',path.join(__dirname,'views'))
    app.set('view engine','ejs')
    app.engine('html',require('ejs').renderFile)

    app.use(express.static(path.join(__dirname,'client')))

    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended: false}))

    app.use('/',index)
    app.use('/api/v1',todos)



   var port = process.env.PORT || 3000
   
   app.listen(port,function(){
       console.log("Now listening to server" + port)
   })