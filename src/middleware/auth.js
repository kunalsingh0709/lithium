const jwt = require("jsonwebtoken")

const authentication = function (req, res, next) {
    try {
        let token = req.headers["x-api-key"];

        if (!token) return res.status(400).send({ status: false, msg: "token must be present" });

        let decodedToken = jwt.verify(token, "project1");

        req.decodedToken = decodedToken
        if (!decodedToken) return res.status(400).send({ status: false, msg: "token is invalid" });
        else {

            next()
        }
    }
    catch (err) {
        res.status(500).send({ msg: err.message })
    }
}

const authorization = function (req, res, next) {
    try {

        if (req.decodedToken.authorId !== req.params.authorId) return res.status(400).send({ status: false, msg: "you do not have authorization to this " });
        else {
            next()
        }
    }
    catch (err) {
        res.status(500).send({ status:false,msg: err.message })
    }
}
module.exports = { authentication, authorization }
