const {Router} = require("express");
const{getDetailHandler, getUsersHandler, createUserHandler} = require ("../handlers/usersHandlers");

const usersRouter = Router();



usersRouter.get("/", getUsersHandler); //Esto es una ruta
usersRouter.get("/:id", getDetailHandler);
usersRouter.post("/", createUserHandler);
 
// usersRouter.post("/users", (req, res) =>{
//      res.status(200).send("Crear usuario");
// });

module.exports = usersRouter;