const { Router } = require("express")
const express = require("express")
const router = express.Router();
const newAuthor = require("../controller/authorController")

router.get("/testme", function(req, res){
    console.log(" its working")
})

router.post("/creatAuthor",newAuthor.createNewAuthor)

module.exports=router