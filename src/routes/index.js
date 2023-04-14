const express = require('express');
const router = express.Router();

const characters = require('./characters.js')
const favorites = require('./favorites.js')
const login = require('./login.js')

router.use('/character', characters)
router.use('/favorites', favorites)
router.use('/login', login)

module.exports = router;

