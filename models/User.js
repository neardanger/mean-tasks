var express = require('express'),
    mongoose = require('mongoose')
    
    var userSchema=new mongoose.Schema({
        name: String,
        email:String,
        password:String
    })

    var User = mongoose.model('User',userSchema)