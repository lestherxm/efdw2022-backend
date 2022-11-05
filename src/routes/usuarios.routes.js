//TODO > Cambia el @Controlador con los metodos HTTP correspondientes.
const usuarios = require("../controllers/usuarios.controllers");

//Objeto para definir los endpoints
const router = require("express").Router();

//TODO >  cambia el inicio del @enpoint y la @llave_primara bajo la cual se haran algunas operaciones
const ep = `/usuarios`;
const pk = `id_usuario`;

//Create
router.post(`${ep}`, usuarios.create);

//Read All Where
router.get(`${ep}`, usuarios.readAll);

//Read One
router.get(`${ep}/:${pk}`, usuarios.readOne);

//Update One
router.put(`${ep}/:${pk}`, usuarios.updateOne);

//Delete One
router.delete(`${ep}/:${pk}`, usuarios.deleteOne);

// Exporta los enpoints
module.exports = router;