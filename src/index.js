 const express = require("express");
 const bodyParser = require("body-Parser")
 const mongoose = require("mongoose");
 const route = require("./routes/route");
 const app = express()

 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({extended: true}));

 mongoose.connect("mongodb+srv://Siddharth609:q8PCZ8BpcFz4-nc@cluster0.thktdho.mongodb.net/project",{
     useNewUrlParser:true
 })

 .then(()=> console.log("MongoDB is connected"))
 .catch(err => console.log(err))


 app.use("/",route)

 app.listen(process.env.PORT || 3000, function(){
     console.log("express app runing on port "+(process.env.PORT || 3000) )
 })
 

