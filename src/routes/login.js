const express = require('express');
const router = express.Router();
const {login} = require('../controllers/login.js')

router.put('/', login)

module.exports = router;