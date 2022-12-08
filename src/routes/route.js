const express = require('express');
const router = express.Router();
const controller = require('../controllers/blockcontroller')

router.get('/assets-api',controller.getcoin)



module.exports = router;