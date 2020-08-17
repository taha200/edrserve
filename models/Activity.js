const mongoose = require('mongoose');
const Schema = mongoose.Schema
const ActivitySchema = new mongoose.Schema({

Conversations:[{type:Schema.Types.ObjectId,ref:"Chats"}],
firebaseUID:{
    type:String,
    required:true
},

});

module.exports = mongoose.model('Activity', ActivitySchema);