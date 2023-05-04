const express = require('express');
const router = express.Router();

const {postFav, deleteFav, getFav} = require('../controllers/favorites.js')

router.get('/:id', getFav)
router.post('/:idC', postFav)
router.delete('/', deleteFav)

module.exports = router