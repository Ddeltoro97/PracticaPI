const {Router} = require("express");
const usersRouter = require("./usersRouter");
const postsRouter = require("./postsRouter");


const mainRouter = Router();

//Asi se usan los Routers modularizados
mainRouter.use("/users", usersRouter);
mainRouter.use("/post", postsRouter);


 module.exports = mainRouter