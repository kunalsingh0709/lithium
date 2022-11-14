const author = require("../model/authorModel")

const createNewAuthor = async function(req, res){
    try{
    const Data = req.body;
    const SaveData = await author.create(Data);
    res.status(200).send({msg:SaveData})
    }

    catch(err)
    {
      res.status(500).send({msg:err})    
    }

}

module.exports.createNewAuthor=createNewAuthor