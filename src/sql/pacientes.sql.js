/** 
*? SENTENCIAS SQL
*/

// TODO > Nombre de la tabla
const table = 'pacientes'; 

// TODO > Llave primaria
const pk = 'id_paciente';  

// TODO > campo tomado como criterio de busqueda
const prop = 'nombre_completo';   

// CREATE
const insertInto = 
`INSERT INTO ${table}(nombre_completo, edad, fecha_nacimiento, genero, estado_civil, correo, telefono) 
VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`; // RETURNING * Devuelve los datos @registrados.

const search = 
`SELECT * FROM ${table} WHERE ${prop} LIKE CONCAT('%', CAST ($1 AS VARCHAR(250)) ,'%')`; // Busqueda por nombre_completo

// READ ALL
const selectAll = 
`SELECT * FROM ${table}`;

// READ ONE
const selectWhere = 
`SELECT * FROM ${table} WHERE ${pk} = $1`;

// UPDATE ONE
const uptadeWhere = 
`UPDATE ${table}
SET nombre_completo = $1, edad = $2, fecha_nacimiento = $3, genero = $4, estado_civil = $5, correo = $6, telefono = $7
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
    search,
    selectAll,
    selectWhere,
    uptadeWhere,
    deleteWhere,
    msgNotFound
};