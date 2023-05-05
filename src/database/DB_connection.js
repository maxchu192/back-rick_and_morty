require('dotenv').config();
const { Sequelize } = require('sequelize');
const characters = require('./models/Character.js')
const users = require('./models/User.js')
//require('./asociations.js')
const { PGHOST, PGPASSWORD, PGPORT, PGUSER } = process.env;

//const deploy = DATABASE_URL.toString()

const dbRickAndMorty = new Sequelize(
   'postgresql://postgres:J7oCFAFWdp4KBP9uAJaf@containers-us-west-57.railway.app:6374/railway',
   { logging: false, native: false }
);

characters(dbRickAndMorty)
users(dbRickAndMorty)


const {Users, Characters} = dbRickAndMorty.models

Characters.belongsToMany(Users, { through: 'UserCharacter', timestamps: false })
Users.belongsToMany(Characters,{ through: 'UserCharacter', timestamps: false })




module.exports = {
   //conn: dbRickAndMorty
   dbRickAndMorty,
   ...dbRickAndMorty.models
};





// EJERCICIO 05
// Debajo de este comentario puedes ejecutar la función de los modelos.

//

//

// Ejercicio 06
// ¡Relaciona tus modelos aquí abajo!
// const { User, Favorite } = sequelize.models;
