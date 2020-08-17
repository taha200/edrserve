var mongoose = require('mongoose')

const doctorUserSchema = {
    firebaseUID:{
        type:String
    },
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    gender:{
   type:Boolean,
   required:true    //true for male and false for female
    },
    city:{
   type:String,
   required:true
    },
    specialist:{
    type:Array
    },
    degrees:{
    type:Array
    },
    experience:{
     type:Number
    },
    level:{
   type:String
    },
    password:{
        type:String,
        required:true
    },
    createDate:{
        type:Date,
        default:Date.now()
    }
}

module.exports=mongoose.model('doctorUserSchema',doctorUserSchema)