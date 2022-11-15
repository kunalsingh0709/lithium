const mongoose = require("mongoose");
const authorSchema = new mongoose.Schema({

    firstName:
    {
        type:String,
        required:true,
        maxlength:50,
        trim:true
    },

    lastName:
    {
        type:String,
        required:true,
        maxlength:25,
        trim:true
    },

    title:
    {
        type:String,
        enum: ["Mr","Mrs","Miss"],
        required:true,
        trim:true
    },

    email:
    {
        type:String,
        required:true,
        unique:true,
        trim:true
    },

     password:
    {
        type:String,
        required:true
     
     }



},
  {timestamps:true}
)

module.exports = mongoose.model("author", authorSchema)