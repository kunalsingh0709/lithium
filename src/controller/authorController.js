const author = require("../model/authorModel")

const validation = function(a)
{
  if(!a||a==undefined|| a==null)
  return false

  if(typeof a!=="string"||a.trim().length==0 )
  return false 
  return true

}

const createNewAuthor = async function(req, res){
    try{
    const Data = req.body;
    let { email,password} = Data;
     if(!validation(email))
     {
      return res.status(400).send({status:false,msg:"its mandetory"})
     }
     let Email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.w{2,3})+$/.test(email.trim())
      if(!Email)
      return  res.status(400).send({status:false,msg:"not valid"})
     if(!validation(password))
     {
      return res.status(400).send({status:false, msg:"its mandatory"})
     }
    
    const SaveData = await author.create(Data);
    res.status(201).send({msg:SaveData})
    }

    catch(err)
    {
      res.status(500).send({msg:err})    
    }

}

module.exports.createNewAuthor=createNewAuthor