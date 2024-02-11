const server = require("./src/app.js");
const {conn} = require("./src/db.js"); //Esto es la importación de sequelize.

const PORT = 3001;


server.listen(PORT, ()=>{
    conn.sync({force: true}); //Mantener esta configuración así durante la creación del PI
    console.log(`Listening on port ${PORT}`)
}); //Esto es importante para correr el servidor en el puerto
