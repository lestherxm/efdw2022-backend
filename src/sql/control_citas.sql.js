/** 
*? SENTENCIAS SQL
*/

// TODO > Nombre de la tabla
const table = 'control_citas'; 

// TODO > Llave primaria
const pk = 'id_cita';  

// CREATE
const insertInto = 
`INSERT INTO ${table}(id_paciente, id_doctor, fecha_cita) 
VALUES ($1, $2, $3) RETURNING *`; // RETURNING * Devuelve los datos @registrados.

// READ ALL
const selectAll = 
`SELECT * FROM ${table}`;

// READ ONE
const selectWhereCita = 
`SELECT * FROM ${table} WHERE ${pk} = $1`;

// READ WHERE DOCTOR
const selectWhereDoctor = 
`SELECT * FROM ${table} WHERE id_doctor = $1`;

// READ WHERE PACIENTE
const selectWherePaciente = 
`SELECT * FROM ${table} WHERE id_paciente = $1`;

// READ WHERE CITAS STATUS TRUE
const selectCitasTrue = 
`SELECT * FROM ${table} WHERE estatus_cita = true`;

// READ WHERE CITAS STATUS FALSE
const selectCitasFalse = 
`SELECT * FROM ${table} WHERE estatus_cita = false`;

// UPDATE ONE
const uptadeWhere = 
`UPDATE ${table}
SET id_paciente = $1, id_doctor = $2, fecha_cita = $3, estatus_cita = $4
WHERE ${pk} = $5 RETURNING *`; // RETURNING * Devuelve los datos @actualizados.

// DELETE ONE
const deleteWhere = 
`DELETE FROM ${table} WHERE ${pk} = $1 RETURNING *`; // RETURNING * Devuelve los datos @eliminados.

/** 
*? MENSAJES
*/

// Al intentar obtener, actualizar o eliminar un registro por su @pk y éste no se encuentra en la DB
const msgNotFound = (operacion, propiedad, valor)=>{
    return `No fue posible ${operacion} los datos, ${propiedad} = ${valor} no existe en la DB`;
}

// TODO > Exportar consultas y metodos de devolucion de mensajes
module.exports = {
    insertInto,
    selectAll,
    selectWhereCita,
    selectWhereDoctor,
    selectWherePaciente,
    selectCitasTrue,
    selectCitasFalse,
    uptadeWhere,
    deleteWhere,
    msgNotFound
};