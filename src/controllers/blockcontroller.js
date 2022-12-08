let axios = require("axios")
let model = require("../models/blockchain")

const getcoin = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: 'https://api.coincap.io/v2/assets',
            headers: {
                Authorization: "Bearer a120b6f1-fd82-4b5b-80bd-621e16b53740",
              }
        
        }
        let result = await axios(options);
        let coinData = result.data
        let sortedData = coinData.data
        console.log(sortedData[0])
        let len = (sortedData).length
        console.log(len)

            const deletedbData = await model.deleteMany()
            const createData = await model.create(coinData.data)

        let a = (sortedData).sort((a,b)=>a.changePercent24Hr - b.changePercent24Hr)
        console.log(a.length)
        res.status(200).send({ status: true,data: coinData })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


module.exports.getcoin = getcoin
