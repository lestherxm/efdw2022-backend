const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

// TODO > @requerir rutas aqui
const pacientes = require('./routes/pacientes.routes');

//* Complementan funcionalidad de express
app.use(cors()); // comunicar ambos servers de manera simple (front y back)
app.use(morgan('dev')); // Ver por consola las peticiones http
app.use(express.json()); // express server no entiende JSON nativamente, es necesario importar un metodo para que si lo haga.

// TODO > @usar rutas aqui
app.use(pacientes);


//? DUMMY API
app.get("/", (req, res) => {
    res.json({ 
        carnet: "2490-19-778", 
        nombre: "Lesther Xitumul Manuel" 
    });
});

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

