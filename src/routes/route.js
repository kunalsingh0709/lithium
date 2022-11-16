const { Router } = require("express")
const express = require("express")
const router = express.Router();
const newAuthor = require("../controller/authorController")
const newBlogs = require("../controller/blogsController")
const middleware = require("../middleware/auth")

router.get("/testme", function(req, res){
    console.log(" its working")
})

router.post("/creatAuthor",newAuthor.createauthor)
router.post("/createBlogs",newBlogs.createNewBlogs)
router.get("/getBlogs",middleware.authentication,middleware.authorization,newBlogs.getblogs)
router.put("/updateBlog/:blogId",middleware.authentication,middleware.authorization,newBlogs.updatedblog)
router.delete("/deleteBlog/:blogId",middleware.authentication,middleware.authorization,newBlogs.deleteBlog)
router.delete("/deleteByQuery",middleware.authentication,middleware.authorization,newBlogs.deleteByQuery)
router.post("/login",newAuthor.login)
module.exports=router