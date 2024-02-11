VAMOS A CREAR UN BACK DESDE 0 YAY!

1. Creamos una carpeta y la nombramos api
2. Abrimos nuestra nueva carpeta en consola y la corremos con el commando "npm init -y". Esto nos instala el package.json que vamos a necesitas
3. Instalamos las siguientes dependencias: express, axios, nodemon, morgan, sequelize, pg, pg-hstore, dotenv con el comando "npm i". Las vamos a necesitar para este caso por ejemplo. Nos creará las carpetas y los node modules necesarios. 
4. Vamos al package JSON y en la sección de scripts creamos "start": "nodemon index.js" para que el archivo se ejecutr correctamente con start en la consola. 
5. Sobre la carpeta api creamos el index.js

**!!!YA TENEMOS MONTADO EL SERVIDOR AHORA A TRABAJAR EN EL!!!**

6. Dentro de api creamos una carpeta src. Esta es la carpeta fuente y de ahí vamos a sacar todo lo que necesita el servidor. 
7. Creamos un archivo app dentro de la carpeta src
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

**DIA 3 DE CLASE**
1. Instalar cors porque sinó no sirve
2. Vamos a userHandlers y hacemos un try-catch
3. Vamos a tener que crear el controller getUserById(). Tambien esta función es asincrónica asi que hay que declarar eso para que funcione.
4. En el bloque try, si logra realizar la conexión que devuelva la respuesta y sinó que devuelva un mensaje de error con código 400
5. Ahora tenemos que saber de donde estamos recibiendo Id, eso lo hacemos validando a ver si Id es un string on un número con un isNaN, si isNaN da true significa que viene de la BD, sinó, viene de la API
6. Volvemos a userControllers y crearemos el controlador getUserById. Este recibe como parámetro el id y el source
7. Acá en userHandlers instalamos axios
8. Usamos axios para hacer una petición a la API si source es igual a api. Si no es igual a API a User le aplicamos el método findByPk() con el valor de id. Esta es una función asyncronica y ambos métodos hay que darles await. Al final hay que retorar al usuario
9. Volvemos a getUsersHandler y vamos a modificarlo. Creamos try-catch
10. Si hay un nombre ejectutamos el controlador getUserByName() que pronto lo crearemos enviamos la respuesta. Si no hay ejecutamos getAllUsers() Recordar que es una funcion async y hasta ahora todo esto es solo el try, el catch viene después.
11. Volvemos al usersControllers y vamos a crear ambso controladores getUserByName y getAllUsers
12. getAllUsers = Tenemos que recibir todos los usuarios de la API y de la BD. Los de la API vienen con información que no nos interesa asi que debemos crear una función para limpiarla. Creamos una función infoCleaner. La forma adecuada de hacer esto es creando una carpeta utils pero para este caso vamos a dejarlo asi.
13. Le damos la propiedad "created: false" al user para poder diferenciar los usuarios creados por la BD a los que vienen de la API.
14. Ahora vamos a crear el controlador getUserByName dentro de userControllers. Para esto tenemos que hacer una petición a la API, nos traemos todos los usuarios y limpiarlo con la función que creamos.
15. Ahora hay que crear un filtro para que nos salga el nombre del usuario que queremos. Usamos el método findAll de sequelize. Finalmente retornamos el filtro que usamos en caso que los users sean de la BD y el filtro en caso tal que sean de la API.

**Vamos a crear los handlers de post**
16. CreatePostHandler = Extraemos del body los parametros title y body
17. Recordar que es una función async, luego hacemos un try catch donde intentamos crear un post nuevo y para ello usamos el controller createPostDb que recibe ambos parámetros. Este controlador no lo hemos creado pero pronto. Luego enviamos la respuesta.
18. Creamos un archivo postController.js en el cual tenemos que importar Post desde la bd
19. Vamos a crear la funcion createPostDb que es asyncrona
20. Esta función debe crear un post con body y title (usándo el método create de sequelize). Luego debe retornarlo y nosotros debemos exportar la función
21. Era necesario que cada post tenga un userId ya que tienen una relacion de uno a muchos. Hay que crear esta relación para poder continuar. Para esto usamos el método set y usamos el parámetro userId. Este es un método de sequelize

**AHORA FRONTEND**

1. En el main: npm create vite@latest y creamos el proyecto
2. Luego nos posicionamos sobre la carpeta y le damos: npm install

**Ya creamos el frontend**
**Vamos a hacer Redux funcionar**

3. Instalar dependencias, instalamos axios, redux, react-redux y redux-thunk
4. Limpiamos el componente App
5. Creamos una carpeta que se llame redux
6. Dentro de esta carpeta creamos actions.js, reducer.js, store.js, y action-types.js
7. Vamos al archivo store, importamos createStore de redux y creamos la store con createStore
8. vamos al reducer, creamos el estado inicial y el reducer, luego volvemos al store
9. en createStore metemos reducer
10. Importamos applyMiddleware y compose de redux e importamos thunkMiddleware de redux-thunk
11. creamos un composeEnhancer  que sea window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
12. A la store le pasamos un segundo parámetro, composeEnhancer(applyMiddleware(thunkMiddleware))
13. Exportamos la store por default
**Middleware**: Básicamente un traductor entre lenguajes de programación.
14. Vamos al main e importamos la store, tambien importamos el provider de react-redux
15. En el HTML el provider tiene que abrazar todo. Ejemplo:

    **Hasta ahora no hemos instalado el browserRouter, deberíamos hacerlo**

    <Provider>
        <BrowserRouter>
            <App/>
        </BrowserRouter>   
    </Provider>

16. 

