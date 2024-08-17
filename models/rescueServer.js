const mongoose = require("mongoose");
const rescueServer = new mongoose.Schema({
    name : {
        type : String 
    },
    email : {
        type : String
    },
    phoneNumber : {
        type : Number
    },
    image : {
        url : String ,
        filename : String,
    },
    radius : {
        type : String
    },
    latitude : {
        type : String
    },
    longitude : {
        type : String,
    }
})

module.exports = mongoose.model('rescueuser' , rescueServer);