const newBlogs = require("../model/BlogsModel")
const author = require("../model/authorModel")
const { createauthor } = require("./authorController")
const { now } = require("mongoose")
const { JsonWebTokenError } = require("jsonwebtoken")

const createNewBlogs = async function (req, res) {
    try {
        let data = req.body
        let authorId = data.authorId
        let checkAuthorId = await author.findById(authorId)
        if (!authorId) {
            return res.status(401).send({ status: false, msg: "Please put author Id" })
        }
        else if (!checkAuthorId) {
            return res.status(403).send({ status: false, msg: "Please enter a valid authorId" })
        }
        else {
            let blogger = await newBlogs.create(data)
            return res.status(200).send({ status: true, msg: blogger })
        }

    }
    catch (err) {
        res.status(500).send({ msg: err })
    }
}

const getblogs = async function (req, res) {
    try {
        let Data = await newBlogs.find({ isDeleted: false, isPublished: true })
        if (!Data) {
            res.status(404).send({ status: false, msg: "data not found" })
        }

        const query = req.query
        let data = await newBlogs.find(query).populate("authorId")
        if (!data) {
            res.staus(404).send({ status: false, msg: "not found" })
        }

        res.status(200).send({ status: true, msg: data })
    }

    catch (err) {
        res.staus(500).send({ status: false, msg: err })
    }

}

const updatedblog = async function (req, res) {
    try {
        let getId = req.params.blogId
        let data = req.body

        if (Object.keys(data).length === 0)
            return res.status(404).send({ status: false, msg: "Please use data to update blog" })

        let { tags, subCategory, title, body } = data
        //validation of tags
        if (!tags || tags == "")
            return res.status(400).send({ status: false, msg: "Please use valid tags" })
        //validation subcategory
        if (!subCategory || subCategory == "")
            return res.status(400).send({ status: false, msg: "Please use valid subCategory" })
        //validation of title
        if (!title || title == "")
            return res.status(400).send({ status: false, msg: "Please use valid title" })
        //validation of body
        if (!body || body == "")
            return res.status(400).send({ status: false, msg: "Please use valid body" })



        let updateId = await newBlogs.findOne({ _id: getId })
        if (updateId) {
            if (updateId.isDeleted) {
                return res.send("Can't Updated,It's is Deleted")

            }
            else {

                let updatedBlog = await newBlogs.findByIdAndUpdate(
                    { _id: getId },
                    {
                        $push: { tags: data.tags, subCategory: data.subCategory },
                        category: data.category,
                        title: data.title,
                        body: data.body,
                        isPublished: data.isPublished,
                    },
                    { new: true }
                )

                return res.status(200).send({ status: true, msg: updatedBlog })
            }
        }

        else {
            return res.status(403).send({ status: false, msg: "Please enter valid blog Id" })
        }

    }
    catch (err) {
        res.status(500).send({ status: false, msg: err.message })
    }
}

const deleteBlog = async function (req, res) {
    try {
        let id = req.params.blogId

        if (!id) {
            return res.status(404).send({ status: false, msg: "ID not found" })
        }

        let blogId = await newBlogs.findById({ _id: id })
        if (!blogId) {
            return res.status(403).send({ status: false, msg: "Not a valid blog id" })
        }
        if (blogId.isDeleted) {
            return res.status(404).send({ status: false, msg: "Blog already deleted" })
        }
        else {
            let deletes = await newBlogs.findOneAndUpdate({ _id: id },
                { $set: { isDeleted: true }, deletedAt: Date.now() },
                { new: true })
            return res.status(200).send({ status: true, msg: deletes })
        }
    }
    catch (err) {
        return res.status(500).send({ status: false, msg: err })
    }

}

const deleteByQuery = async function (req, res) {
    try {
        let data = {}
        data = req.query
        let authorId = data.authorId
        data = { authorId: authorId }

        let find = await newBlogs.findOne(data)

        if (!find)
            return res.status(404).send({ status: false, msg: "Author ID is not valid" })

        if (find.isDeleted)
            return res.status(400).send({ status: false, msg: "This Document is deleted" })

        let savedData = await newBlogs.findOneAndUpdate(data,
            { $set: { deletedAt: Date.now(), isDeleted: true } },
            { new: true })
        return res.status(200).send({ status: true, msg: savedData })
    }
    catch (err) {
        return res.status(500).send({ status: false, msg: err })
    }


}


module.exports.createNewBlogs = createNewBlogs
module.exports.getblogs = getblogs
module.exports.updatedblog = updatedblog
module.exports.deleteBlog = deleteBlog
module.exports.deleteByQuery = deleteByQuery
