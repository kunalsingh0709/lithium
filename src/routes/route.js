const { Router } = require("express")
const express = require("express")
const router = express.Router();
const newAuthor = require("../controller/authorController")
const newBlogs = require("../controller/blogsController")

router.get("/testme", function(req, res){
    console.log(" its working")
})

router.post("/creatAuthor",newAuthor.createauthor)
router.post("/createBlogs",newBlogs.createNewBlogs)

module.exports=router