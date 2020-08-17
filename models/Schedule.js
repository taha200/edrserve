var mongoose = require('mongoose')

const ScheduleRanges= new mongoose.Schema({
    day:{
        type:Number //0 to 6 Sun to Sat
    },
    ranges:[{
        from:{
            type:String
        },
        to:{
            type:String
        }
    }],
    createDate:{
        type:Date,
        default:Date.now()
    }
})

const DoctorScheduleSchema = new mongoose.Schema
({
    firebaseUID:{
        type:String
    },
    schedule:{
        type:[ScheduleRanges]
    },
    createDate:{
        type:Date,
        default:Date.now()
    }
})

module.exports=mongoose.model('doctorscheduleSchema',DoctorScheduleSchema)