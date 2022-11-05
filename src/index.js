const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

// TODO > @requerir rutas aqui
// const nombre_tabla = require('./routes/nombre_tabla.routes');
const usuarios = require('./routes/usuarios.routes');

//* Complementan funcionalidad de express
app.use(cors()); // comunicar ambos servers de manera simple (front y back)
app.use(morgan('dev')); // Ver por consola las peticiones http
app.use(express.json()); // express server no entiende JSON nativamente, es necesario importar un metodo para que si lo haga.

// TODO > @usar rutas aqui
// app.use(nombre_tabla);
app.use(usuarios);


//* Esta es la funcion Next() usada para manejar errores en los controladores de las diferentes tablas
app.use((err, req, res, next) =>{
    return res.json({
        error: err.message,
        deatils: err
    });
});

// Estableciendo puerto de escucha por defecto.
app.listen(port)
console.log(`-- Server running on port: ${port} --`);

