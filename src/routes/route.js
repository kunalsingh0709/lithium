const express = require('express');
const router = express.Router();///test-you
//importing a custom module
const welcome = require('../logger/logger')
const time = require('../util/helper')
const formater = require('../validator/formatter')
const l = require('lodash')
//importing external package
//const underscore = require('underscore')

router.get('/test-me', function (req, res) {
    //Calling the components of a different custom module
    welcome.myFunction()
    time.printDate()
    time.printMonth()
    time.getBatchInfo()
    formater.problem()
    //Trying to use an external package called underscore
    // let myArray = ['Akash', 'Pritesh', 'Sabiha']
    // let result = underscore.first(myArray)
    // console.log("The result of underscores examples api is : ", result)

    let newMonths = ["January","February","March","April","May","June","July","August","September","October","November","December"]
    console.log(l.chunk(newMonths,4))
    
    let odd = [1,3,5,7,9,11,13,15,17,19]
    console.log(l.tail(odd,9))

    let a=[1,2]
    let b=[2,3]
    let c=[3,4]
    let d=[4,5]
    let e=[5,6]
    console.log(l.union(a,b,c,d,e))

    let object =[["horror","The Shining"],["darama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]
    console.log(l.fromPairs(object))

    res.send('My first ever api!')

    //To be tried what happens if we send multiple response
    //res.send('My second api!')
});

module.exports = router;

