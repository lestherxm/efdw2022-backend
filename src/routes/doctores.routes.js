//TODO > Cambia el @Controlador con los metodos HTTP correspondientes.
const doctores = require("../controllers/doctores.controllers");

//Objeto para definir los endpoints
const router = require("express").Router();

//TODO >  cambia el inicio del @enpoint y la @llave_primara bajo la cual se haran algunas operaciones
const ep = `/doctores`;
const pk = `id_doctor`;

//Create
router.post(`${ep}`, doctores.create);

//Read All Where
router.get(`${ep}`, doctores.readAll);

//Read One
router.get(`${ep}/:${pk}`, doctores.readOne);

//Update One
router.put(`${ep}/:${pk}`, doctores.updateOne);

//Delete One
router.delete(`${ep}/:${pk}`, doctores.deleteOne);

// Exporta los enpoints
module.exports = router;