const newBlogs = require("../model/BlogsModel")
const author =  require("../model/authorModel")
const { createauthor } = require("./authorController")

const createNewBlogs = async function(req,res)
{
    try{
    let data = req.body
    let authorId = data.authorId
    let checkAuthorId = await author.findById(authorId)
    if(!authorId){
        return res.status(401).send({status:false,msg:"Please put author Id"})
    }
    else if(!checkAuthorId){
        return res.status(403).send({status:false,msg:"Please enter a valid authorId"})
    }
    else{
        let blogger = await newBlogs.create(data)
        return res.status(200).send({status:true,msg:blogger})
    }
    
}
catch(err){
    res.status(500).send({msg:err})
}
}


module.exports.createNewBlogs=createNewBlogs