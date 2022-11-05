//TODO > Cambia el @Controlador con los metodos HTTP correspondientes.
const control_citas = require("../controllers/control_citas.controllers");

//Objeto para definir los endpoints
const router = require("express").Router();

//TODO >  cambia el inicio del @enpoint y la @llave_primara bajo la cual se haran algunas operaciones
const ep = `/control_citas`;
const pk = `id_cita`;

//Create
router.post(`${ep}`, control_citas.create);

//Read All
router.get(`${ep}`, control_citas.readAll);

//Read All Citas True
router.get(`${ep}/true`, control_citas.readCitasTrue);

//Read All Citas False
router.get(`${ep}/false`, control_citas.readCitasFalse);

//Read One Cita
router.get(`${ep}/cita/:${pk}`, control_citas.readOneCita);

//Read Citas doctor
router.get(`${ep}/doctor/:id_doctor`, control_citas.readOneDoctor);

//Read Citas paciente
router.get(`${ep}/paciente/:id_paciente`, control_citas.readOnePaciente);

//Update One Cita
router.put(`${ep}/:${pk}`, control_citas.updateOne);

//Delete One
router.delete(`${ep}/:${pk}`, control_citas.deleteOne);

// Exporta los enpoints
module.exports = router;