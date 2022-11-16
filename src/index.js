 const express = require("express");
 const bodyParser = require("body-Parser")
 const mongoose = require("mongoose");
 const route = require("./routes/route");
 const app = express() //creating instance or initialising express into const app

 app.use(bodyParser.json());   //to convert data in json formate

 mongoose.connect("mongodb+srv://kunal0709:Singhkunal7@cluster0.u5yk4f2.mongodb.net/project1",{
     useNewUrlParser:true  
 }) //promise return

 .then(()=> console.log("MongoDB is connected"))  //promise wait if fulfilled
 .catch(err => console.log(err))//promise wait if not fulfilled


 app.use("/",route)  //aap.use is used to create middleware

 app.listen(process.env.PORT || 3000, function(){
     console.log("express app runing on port "+(process.env.PORT || 3000) )
 })
 

//app.listen is used to making port having two argument first is call back(function(){
   //  console.log("express app runing on port "+(process.env.PORT || 3000) )
   // })) 
//another port number