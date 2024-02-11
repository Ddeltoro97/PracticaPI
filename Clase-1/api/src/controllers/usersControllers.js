const axios = require ("axios");
const {User} = require("../db");

const createUserDB = async (name, email, phone) =>{

    const newUser = await User.create({name, email, phone}) //Podemos utilizar create porque usamos el usuario

    return newUser;
};

const getUserById = async(id, source) =>{
    //Petición a la API o buscar en la BD
    const user = source === 'api' ? (await axios.get(`http://jsonplaceholder.typicode.com/users/${id}`)).data : await User.findByPk(id);
    return user;
}

const infoCleaner = (array) => array.map(user =>{
    return{
        name: user.name,
        email: user.email,
        phone: user.phone,
        created: false
    }
})

const getAllUsers = async () =>{
    const usersDB = await User.findAll();
    const infoApi = await axios.get("http://jsonplaceholder.com.typicode.com/user").data;

    const usersApi = infoCleaner(infoApi);

    return[...usersDB, ...usersApi]; //Juntamos los arrays y los enviamos.
}

const getUserByName = async(name) =>{
    const infoApi = await axios.get("http://jsonplaceholder.com.typicode.com/user").data;
    const userApi = infoCleaner(infoApi);

    const userFiltered = userApi.filter(user=> user.name === name);
    const userDb = await User.findAll({where: {name: name}});

    return [...userFiltered, ...userDb];

}

module.exports={
    createUserDB,
    getUserById,
    getAllUsers,
    getUserByName
}