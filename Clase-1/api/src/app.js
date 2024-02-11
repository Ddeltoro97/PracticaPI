const express = require("express");
const morgan = require("morgan");
const mainRouter = require("./routes/mainRouter");
const cors = require('cors');

const app = express();

app.use(morgan("dev")); //asi traemos el middleware morgan
app.use(express.json());
app.use(cors());

app.use(mainRouter) //Asi le decimos a la aplicación que use los routers modularizados.


module.exports = app;
