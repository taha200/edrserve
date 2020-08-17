var mongoose = require('mongoose')



const AppointmentSchema = new mongoose.Schema
({
   firebaseUID:{
        type:String
    },
    DocID:{
    type:String
    },
    SlotTime:{
        type:String
    },
    AppointmentDate:{
        type:String
        },
 BookingStatus:{
  type:Boolean,    //true status booking booked
  default:true      // false cancelled 
    },
    createDate:{
        type:Date,
        default:Date.now()
    }
})

module.exports=mongoose.model('appointmentSchema',AppointmentSchema)