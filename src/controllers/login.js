require('dotenv').config();

const EMAIL = process.env.EMAIL;
const PASSWORD = process.env.PASSWORD;
const STATUS_OK = 200
const STATUS_ERROR = 404

function login(req, res) {
    try {
        const {email, password}= req.query;
    if (!email || !password) {
        return res.status(500).json({message: 'there isn´t a email or password'})
    }
    if (email === EMAIL && password === PASSWORD) {
        res.status(STATUS_OK).json({access: true})
    } else {
        res.status(STATUS_OK).json({access: false})
    }
    } catch (error) {
        res.status(STATUS_ERROR).json(error)
    }
    

}

module.exports = {
    login
}