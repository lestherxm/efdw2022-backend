//TODO > Cambia el @Controlador con los metodos HTTP correspondientes.
const pacientes = require("../controllers/pacientes.controllers");

//Objeto para definir los endpoints
const router = require("express").Router();

//TODO >  cambia el inicio del @enpoint y la @llave_primara bajo la cual se haran algunas operaciones
const ep = `/pacientes`;
const pk = `id_paciente`;

//Create
router.post(`${ep}`, pacientes.create);

//Read All Where
router.get(`${ep}`, pacientes.readAll);

//Read One
router.get(`${ep}/:${pk}`, pacientes.readOne);

//Update One
router.put(`${ep}/:${pk}`, pacientes.updateOne);

//Delete One
router.delete(`${ep}/:${pk}`, pacientes.deleteOne);

// Exporta los enpoints
module.exports = router;