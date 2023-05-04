const {Users, Characters} = require('../database/DB_connection.js')

const STATUS_OK = 200
const STATUS_ERROR = 404


async function postFav (req, res) {
    const {idC} = req.params
    const {id} = req.body;

    try {
        const aux = await Users.findByPk(id)
        const charFav = await Characters.findByPk(Number(idC))
        aux.addCharacters(charFav)

        res.status(STATUS_OK).json({id, idC})
    } catch (error) {
        res.status(STATUS_ERROR).json({message: error.message})        
    }

}

async function deleteFav (req, res) {
    const {id, idC} = req.body;

    try {        
        const aux = await Users.findByPk(id)
        const charDel = await Characters.findByPk(idC)
        aux.removeCharacters(charDel)
        
        res.status(STATUS_OK).json({idC})
    } catch (error) {
        res.status(STATUS_ERROR).json({message: error.message})
    }
         
}

async function getFav (req, res) {
    const {id} = req.params;

    try {
        const aux = await Users.findByPk(Number(id))
        const aux1 = await aux.getCharacters()
        res.status(STATUS_OK).json(aux1)

    } catch (error) {
        res.status(STATUS_ERROR).json({message: error.message})
        
    }
}


module.exports = {
    postFav,
    deleteFav,
    getFav
}