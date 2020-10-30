const mongoose = require('mongoose')
const validator= require('validator')
const { options } = require('../routes/routes')

const schemma  = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type:String,
        required:true,
        lowercase:true,
        trim:true,
        unique:true,

             
    },
    password:{
        type:String,
        required:true,
        trim:true,
        minlength:8,
        

    },
    phoneno:{
        type:String,
        required:true,
        maxlength:10,

    },
    adress:{
        type:String,
        required:true ,
    },
   
    
    

})



const user = mongoose.model('user',schemma)


module.exports= user
