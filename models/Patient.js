var mongoose = require('mongoose')

const patientUserSchema = {
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
    city:{
   type:String,
   required:true
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

module.exports=mongoose.model('patientUserSchema',patientUserSchema)