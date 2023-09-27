const {User} = require("../db");

const createUserDB = async (name, email, phone) =>{

    const newUser = await User.create({name, email, phone}) //Podemos utilizar create porque usamos el usuario

    return newUser;
};

module.exports={
    createUserDB
}