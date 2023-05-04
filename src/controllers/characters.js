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

const getAllChar = async (req, res) => {
  let aux = []
    try {
      for (let i = 1; i < 43; i++) {
        const {data} = await axios(`${URL}?page=${i}`)
        
        if (data) {
          const characters = data.results.map((ch) => {
            const character = {
              id: ch.id,
              status: ch.status,
              name: ch.name,
              species: ch.species,
              origin: ch.origin?.name,
              image: ch.image,
              gender: ch.gender,
            };
            return character;
          });
          aux = [...aux, ...characters]
        } else {
          res.status(STATUS_ERROR).json({ message: "character not found" });
        }
      }
      const char = await Characters.bulkCreate(aux)
      .then(() => console.log("chars data have been saved"))
      res.status(STATUS_OK).json(aux);
    } catch (error) {
      res.status(STATUS_ERROR).json({ message: error });
    }
  }
 


module.exports = {
    getCharById,
    getAllChar
}