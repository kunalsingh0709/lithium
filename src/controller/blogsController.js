const newBlogs = require("../model/BlogsModel")

const createNewBlogs = async function(req,res)
{
    try{
    let Data = req.body;
    let authorId = req.body.authorId;
    if(!authorId)
    {
        return res.status(400).send({msg:"authorId is mandetory"})
    }

    let authorData = await newBlogs.create(Data)
    res.status(201).send({msg:authorData})
}
catch(err){
    res.status(500).send({msg:err})
}
}

const getNewBlogs = async

module.exports.createNewBlogs=createNewBlogs