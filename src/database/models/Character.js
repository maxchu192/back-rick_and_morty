const {DataTypes} = require('sequelize');
//const Users = require('./models/User.js')

module.exports = (dbRickAndMorty) => {
    dbRickAndMorty.define('Characters', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        status: {
            type: DataTypes.ENUM('Alive', 'Dead', 'unknown'),
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        species: {
            type: DataTypes.STRING,
            allowNull: false
        },
        origin: {
            type: DataTypes.STRING,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false
        }, 
        gender: {
            type: DataTypes.ENUM('Female', 'Male', 'Genderless', 'unknown'),
            allowNull: false
        }      
    },{timestamps: false});

    //Characters.belongsToMany(Users, { through: 'UserCharacter' })
}