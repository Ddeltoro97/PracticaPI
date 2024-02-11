
const {Sequelize, DataTypes} = require("sequelize");
require("dotenv").config();

const UsersModel = require("./models/UsersModel");
const PostsModel = require("./models/PostsModel");

const{DB_USER, DB_PASSWORD, DB_HOST, DB_NAME} = process.env //Esto es posible gracias a dotenv

// const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname') //Con esto iniciamos la comunicación. Acá ponemos nuestra info de nuestra base de datos.

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
{logging: false});

//DEFINICION DE MODELOS A USAR
UsersModel(sequelize); //Ejecutamos los modelos con el modelo de sequelize
PostsModel(sequelize);

//Crear las relaciones
const {User, Post} = sequelize.models;
User.hasMany(Post); //Un usuario puede tener muchos post
Post.belongsTo(User); //Un post pertenece a un solo usuario

//Exportamos sequelize así
module.exports = {
    ...sequelize.models,
   conn: sequelize,
}