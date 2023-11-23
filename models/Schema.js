const mongoose = require('mongoose');

const bookMovieSchema = mongoose.Schema({

     movie:{
        type:String,
        required:[true, "Please enter a movie name"]
     },
     slot:{
        type:String,
        required:true,
        default:0
     },
     seats:{
        type: String,
        required: true,
        default:0
},
})

const Tickets = mongoose.model('Tickets',bookMovieSchema)
module.exports = Tickets;