const author = require("../model/authorModel")
const validator = require('validator') 
const createauthor = async function(req,res){
  let data = req.body
  let email = data.email
  if(!validator.isEmail(email)){
    return res.status(400).send({status:false,msg:"Invalid Email Id"})
  }
  let validEmail = await author.findOne({email:email})
  if(validEmail){
    return res.send("This email ID is already register")
  }
  let saveData = await author.create(data)
  res.status(200).send({msg:saveData})
}

module.exports.createauthor=createauthor