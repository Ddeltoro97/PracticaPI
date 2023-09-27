VAMOS A CREAR UN BACK DESDE 0 YAY!

1. Creamos una carpeta y la nombramos api
2. Abrimos nuestra nueva carpeta en consola y la corremos con el commando "npm init -y". Esto nos instala el package.json que vamos a necesitas
3. Instalamos las siguientes dependencias: express, axios, nodemon, morgan, sequelize, pg, pg-hstore, dotenv con el comando "npm i". Las vamos a necesitar para este caso por ejemplo. Nos creará las carpetas y los node modules necesarios. 
4. Vamos al package JSON y en la sección de scripts creamos "start": "nodemon index.js" para que el archivo se ejecutr correctamente con start en la consola. 
5. Sobre la carpeta api creamos el index.js

**!!!YA TENEMOS MONTADO EL SERVIDOR AHORA A TRABAJAR EN EL!!!**

6. Dentro de api creamos una carpeta src. Esta es la carpeta fuente y de ahí vamos a sacar todo lo que necesita el servidor. 
7. Creamos una carpeta app dentro de la carpeta src
8. Sobre la app importamos express con "const express = require("express")
9. Invocamos express asi: "const app = express()" y exportamos app con module.exports = app
10. Volvemos a la carpeta raiz y abrimos el index.js. Requerimos la app en esta carpeta entonces la importamos asi: "const server = require("./src/app")". Decalaramos el puerto asi: "const PORT = 3001"
11. Le damos server.listen para correr el servidor en el puerto
    !!!Middleware: Una función mediadora que se ejecuta antes de la resolución de la request!!!

**DE VUELTA A app.js**

12. Instalamos los middlewares necesarios, morgan por ejemplo en este caso. Recuerda importarlo
    !!!Morgan: Nos envía los códigos de error que necesitamos ver!!!

13. Dentro de la carpeta src creamos una carpeta nueva que se llame routes, es importante hacerlo acá porque app.js no lo queremos saturar
14. Creamos una archivo mainRouter.js para modularizar nuestras rutas. Ahora trabajamos sobre el
15. Empezamos a crear nuestras rutas. TODOS LOS MIDDLEWARES TIENEN QUE ESTAR EN ORDEN
16. Importamos el router desde express con const {router} = require("express); y le ponemos un nombre en este caso mainRouter.
17. Para no saturar el mainRouter, creamos uno con el nombre (en estos casos) usersRouter.js y postRouter.js todo sobre la carpeta routes
18. !No olvides importar Router a los nuevos routers. 
19. Recuerda los nombres de las variables, no confundir

AHORA CONTROLLERS Y HANDLERS

20. Hay que crear los handlers para las rutas para esto creamos una carpeta nueva, le ponemos handlers y en este caso creamos un archivo usersHandler.js

Handler: Se encarga de recibir la request
         Se encarga de unificar datos
         Se encarga de devolver la respuesta
         Invoca al controller ---> Nunca interactúa con fuentes externas. (API o BD)

Controller: Es otra función

21. userHandlers tiene que crear los handlers y exportarlos. userRouter tiene que correr las rutas y debemos importar los handlers para poder usarlos en nuestras rutas.

***Express no sabe como leer los JSON***

22. Falta un middleware que nos ayude con esto. En el archivo app.js hay que poner esto: "app.use(express.json())"


**DIA 2 DE CLASE: CREAR BD**

1. Creamos un nuevo archivo sobre la carpeta src y en esta importamos sequelize.
2. Abrimos la consola de postgreSQL y hay que crear una bd. En la consola escribimos CREATE DATABASE "nombre_de_la_bd"; (Importante el ;)
3. Ahora para posicionarnos sobre la bd ejecutamos \c "nombre_de_la_bd"; En este caso es "\c repaso;"
4. Creamos la siguiente estructura: "const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname')" Asi comunicamos el server con la bd.
5. O mejor no! Si usamos esta estructura dejamos nuestra password expuesta. Para no hacer esto, sobre la carpeta api creamos un archivo que se va a llamar .env
6. En el archivo db.js importamos dotenv. Ahora todas las variables de entorno dentro del .env se pueden leer sin problema.
7. Exportamos sequelize.
8. Importamos sequelize en index.js
9. En el index.js ahora tenemos que conectar la bd con el servidor. Para esto dentro de la callback server.listen creamos un "conn.sync()"

    **Ahora hay que crear un modelo**

10. En el archivo db.js hay que importar DataTypes desde sequelize
11. Usamos el método sequelize.define para crear nuestra estructura.
12. Para comprobar que todo ha salido bien nos vamos a la consola de SQL y ejecutamos \dt
    **Felicidades, ya la bd está creada**

13. Ahora a modularizar nuestra bd. Creamos una carpeta "models" dentro de la carpeta src
14. En este caso creamos un archivo que se llame UsersModel.js para poder separar bien los módulos (dentro de models).
15. El modelo de Users lo copiamos en UsersModel.js Hacemos lo mismo con PostModel.js 
16. Vamos a crear las relaciones/asociaciones. Traemos a User y Post de sequelize.models **Revisar la documentación de sequelize**
17. El UserId que se crea es creado automáticamente por las relaciones
18. Vamos a crear los controllers. Creamos una carpeta sobre src que se llama controllers y ahora creamos usersControllers.js y postControllers.js
19. **TRABAJANDO EN USERSCONTROLLERS** Importamos User de db.js y creamos la funcion createUserDB. Puede usar el método .create
20. Exportamos la función, recuerda que es una función async
21. Vamos al userHandlers, importamos la funcion que acabamos de crear y sobre el handler adecuado en este caso createUserHandler la invocamos junto con un try catch para envíar una respuesta si o si. Esto tambien es una funcion async






