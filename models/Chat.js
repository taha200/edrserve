const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
    createdAt:{
        type:String,
        default:Date.now()
    },
    text:{
        type:String
    },
    image:{
        type:String
    },
    senderAvatarLink:{
        type:String,
        default:'https://placeimg.com/140/140/any'
    },
    join:{
        type:String
    },
    senderID:{
        type:String,
        required:true
    },
    audio:{
        type:Object
    }
})

const ChatsSchema = new mongoose.Schema({
    messages:{
    type:[MessageSchema]
    },
    firebaseUID:{
    type:String
    },
    DocID:{
        type:String
    },
    DocProfilePic:{
        type:String,
        default:'https://placeimg.com/140/140/any'
    },
    Docname:{         
        type:String
    },
    PatientProfilePic:{
        type:String,
        default:'https://placeimg.com/140/140/any'
    },
    Patientname:{        
        type:String
    },
});

module.exports = mongoose.model('Chats', ChatsSchema);