const jwt = require("jsonwebtoken")

const authentication = async function(req,res,next){
    try{
         let headers = req.headers
         if(headers['x-api-key'])
         next()
         else{
            res.status(400).send({status:false,msg:"request header is missing"})
         }
    }
    catch(err){
       return  res.status(500).send({status:false,msg:err.message})
    }
}

const authorization = async function(req,res,next){
    try{
        let token =req.headers['x-api-key']
        if(!token)
        token=req.headers['x-api-key']
        let decodedToken = jwt.verify(token,'project1')
        if(!decodedToken){
            return res.status(403).send({status:false,msg:"Not authorized"})
        }
        else{
            next()
        }
    }
    catch(err){
        return  res.status(500).send({status:false,msg:err.message})
    }
}
module.exports={authentication,authorization}
