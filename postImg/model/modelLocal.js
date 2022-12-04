const Sequelize = require('sequelize');
const connection = require('../dataBase/database');

const categoria = connection.define(
    'categoria',{

        cod_categoria:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },

        nomeCategoria:{
            type: Sequelize.STRING,
            allowNull: true
        },
        img:{
            type: Sequelize.DataTypes.BLOB('long'),
            allowNull:true
        }   
           }
 );
//  categoria.sync({force:true});

  module.exports = categoria;