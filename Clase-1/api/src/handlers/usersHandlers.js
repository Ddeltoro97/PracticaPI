//Query: no es obligatorio, puede que se reciba o que no
//Params: es obligatorio, va en el link de la pg
const getUsersHandler = (req, res) =>{ //Esto es un handler
    const {name, race} = req.query; //Asi se extrae el query

    if (name) res.status(200).send(`Acá está el usuario ${name}`);
    res.status(200).send("Todos los usuarios");   
}

//:id => params
//query => ?name=name&raza=raza
//body => info
const getDetailHandler = (req, res) =>{
    const {id} = req.params; //asi se extrae el id

    res.status(200).send("Detalle del usuario")
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