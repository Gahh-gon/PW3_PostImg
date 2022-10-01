const Sequelize = require('sequelize');



const connection = new Sequelize(
    'postimagem',
    'root',
    '',
    {
        host:'localhost',
        dialect: 'mysql'        
    }
);



module.exports = connection ;