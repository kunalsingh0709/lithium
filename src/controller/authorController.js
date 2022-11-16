const author = require("../model/authorModel")
const jwt =require('jsonwebtoken')
const authorModel = require("../model/authorModel")
const emailMatch = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/  //regedx for the checking the email id
const matchPass = /^(?=.*[0-9])(?=.*[!@#$%^&#])[a-zA-Z0-9!@#$%^&*]{8,18}$/     //regrex for checking the password


const createauthor = async function(req,res){
  try{
    let data = req.body
    let { firstName,lastName,title,email,password} = data
    if(Object.keys(data).length ===0)
    return res.status(400).send({status:false,msg:"Please use data to create author"})

    if(!firstName || firstName =="")
    return res.status(400).send({status:false,msg:"Please enter first name"})

    if(!lastName || lastName =="")
    return res.status(400).send({status:false,msg:"Please enter Last name"})

    if(!title || title =="")
    return res.status(400).send({status:false,msg:"Please use Title"})

    if(!email)
    return res.status(400).send({status:false,msg:"Please Enter Email"})
    let validEmail = await authorModel.findOne({email:email})
    if(validEmail)
    return res.status(400).send("This email Id is already registered")
    if(!email.match(emailMatch))
    return res.status(400).send({status:false,msg:"Please use valid Email-ID"})

    if(!password)
    return res.status(404).send({status:false,msg:"Please use password"})
    if(password.length<8)
    return res.status(400).send({status:false,msg:"please use more then eight characters"})
    if(!matchPass.test(password))
    return res.status(400).send({status:false,msg:"Please use special character to make strong password"})

   let saveData = await author.create(data)
  res.status(200).send({msg:saveData})
  }
  catch(err){
    return res.status(500).send({status: false,msg:err})
  }
 

}

//authentication
const login = async function (req, res) {
  try {
    let data = req.body
    if (Object.keys(data).length != 0) {
      let user = await authorModel.findOne({ email: data.email, password })
      if (user != null) {
        let token = await jwt.sign({ _id: user._id, email: user.email }, "project1");
        res.header("x-api-key", token)
        res.status.send({ status: true })
      }
      else {
        res.send({ status: false, msg: "Email id or password is invalid:" })
      }
    }
  }
  catch (error) {
    res.status(500).send({ status: false, msg: error.message })
  }
}


module.exports.createauthor=createauthor
module.exports.login=login