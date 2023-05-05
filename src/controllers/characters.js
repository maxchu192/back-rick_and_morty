const axios = require('axios');
const {Characters} = require('../database/DB_connection.js')

require('dotenv').config()

const URL = process.env.API_URL
const STATUS_OK = 200
const STATUS_ERROR = 404

const getCharById = async (req, res) => {    
    const { id } = req.params;
  try {
    const char = await Characters.findOne({where: {id: id}})
    res.status(STATUS_OK).json(char.dataValues)
  } catch (error) {
    res.status(STATUS_ERROR).json({ message: error.message });
  }
}



module.exports = {
    getCharById
}