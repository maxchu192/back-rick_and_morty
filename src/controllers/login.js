require('dotenv').config();
const { Users } = require('../database/DB_connection.js')

const STATUS_OK = 200
const STATUS_ERROR = 400

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        
        const aux = { email, password }

        if (!email || !password) {
            return res.status(500).json({ message: 'there isn´t a email or password' })
        }

        const [user, created] = await Users.findOrCreate({ where: aux })
        const id = user.id;

        res.status(STATUS_OK).json({ access: true, id: id})

    } catch (error) {
        res.status(STATUS_ERROR).json({ access: false })
    }
}

module.exports = {
    login
}