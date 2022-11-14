const author = require("../model/authorModel")

const createNewAuthor = async function(req, res){
    try{
    const Data = req.body;
    let { email,password} = Data;
     if(!email && password)
     {
      return res.status(400).send({msg:"its mandatory"})
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