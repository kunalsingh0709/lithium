const mongoose = require("mongoose")
const ObjectId = mongoose.Schema.Types.ObjectId
const BlogsSchema = new mongoose.Schema({

     title:
     {
        type:String,
        required: true,
        trim:true
     },
   
     body:
     {
        type:String,
        required: true,
        trim:true
     },

     authorId:
     {
        type: ObjectId,
        ref:"author",
        required:true
     },

      tags:
     {
        type:[String],
        required: true
     },

      category:
      {
       type:String,
       required:true,
       trim:true
      },

        subCategory:
        {
          type: [String],
          required:true           
            
        },

      isDeleted:
      {
        type:Boolean,
        default: false
      },

      isPublished:
      {
        type:Boolean,
        default: false
      },
      deletedAt:{
        type:Date
      },

      publishAt:{
        type:Date
      }

   
     },

  {timestamps: true}
)

module.exports = mongoose.model("Blogs",BlogsSchema )