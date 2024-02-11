const {DataTypes} = require("sequelize");

module.exports = (sequelize) =>{
    sequelize.define("Post", { //Aqui es donde vamos a definir la estructura de la aplicación
        id:{
            type: DataTypes.UUID,
            autoIncrement: true,  
            primaryKey: true,
        },
        title:{
           type: DataTypes.STRING,
           allowNull: false, 
        },
        body:{
            type: DataTypes.STRING,
            allowNull: false,
        },
    
    }) 
    };
