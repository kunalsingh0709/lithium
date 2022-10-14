const today = new Date()

let date = function(){
    const date = today.getDate()
    console.log("Day-"+date)
}

let month = function(){
    const month = today.getMonth()
    console.log("Month-"+month)
}

let batchInfo = function(){
    console.log("Batch - Lithium,the topic for today is Nodesjs modules system")
}

module.exports.printDate = date
module.exports.printMonth = month
module.exports.getBatchInfo = batchInfo