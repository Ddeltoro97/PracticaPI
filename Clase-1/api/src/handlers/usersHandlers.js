const {createUserDB, getUserById, getAllUsers, getUserByName} = require("../controllers/usersControllers");


//Query: no es obligatorio, puede que se reciba o que no
//Params: es obligatorio, va en el link de la pg
const getUsersHandler = async (req, res) =>{ //Esto es un handler
    const {name} = req.query; //Asi se extrae el query
    try {
        if (name){
            const userByName = await getUserByName(name);
            res.status(200).json(userByName);
        }
        else{
            const response = await getAllUsers();
            res.status(200).json(response);
        }
    } catch (error) {
        res.status(400).json({error: error.message});
    }

}

//:id => params
//query => ?name=name&raza=raza
//body => info
const getDetailHandler = async (req, res) =>{
    const {id} = req.params; //asi se extrae el id

    const source = isNaN(id) ? "bdd" : "api"; //Validando de donde viene la info

    try {
        const response = await getUserById(id, source)
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error: error.message});
    }

    // res.status(200).send("Detalle del usuario") // Esto hay que borrarlo
}

const createUserHandler = async (req, res) =>{
    const {name, email, username} = req.body;

try {
    const response = await createUserDB(name,email,phone);
    res.status(200).json(response);
} catch (error) {
    res.status(400).json({error: error.message})
}
    
    res.status(200).send(`Usuario ${name} creado con el email ${email}`);
}

module.exports = {
    getDetailHandler,
    getUsersHandler,
    createUserHandler
}