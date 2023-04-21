const { DataTypes } = require('sequelize');
//const Characters = require('./models/Character.js')

module.exports = (dbRickAndMorty) => {
   dbRickAndMorty.define('Users', {
      id: {
         type: DataTypes.INTEGER,
         autoIncrement: true,
         primaryKey: true
      },
      email: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      password: {
         type: DataTypes.STRING,
         allowNull: false,
      }
   }, { timestamps: false });

   //Users.belongsToMany(Characters, { through: 'UserCharacter' })
};
