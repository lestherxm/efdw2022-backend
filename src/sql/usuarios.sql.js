/** 
*? SENTENCIAS SQL
*/

// TODO > Nombre de la tabla
const table = 'usuarios'; 

// TODO > Llave primaria
const pk = 'id_usuario';  

// TODO > campo tomado como criterio de busqueda
const prop = 'usuario';   

// CREATE
const insertInto = 
`INSERT INTO ${table} (usuario, biografia, edad, genero)
VALUES ($1, $2, $3, $4) RETURNING *`; // RETURNING * Devuelve los datos @registrados.

// READ ALL WHERE
const selectAllWhere = 
`SELECT * FROM ${table} WHERE ${prop} LIKE CONCAT('%', CAST ($1 AS VARCHAR(250)) ,'%')`;

// READ ONE
const selectWhere = 
`SELECT * FROM ${table} WHERE ${pk} = $1`;

// UPDATE ONE
const uptadeWhere = 
`UPDATE ${table}
SET usuario = $1, biografia = $2, edad = $3, genero = $4
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
    selectAllWhere,
    selectWhere,
    uptadeWhere,
    deleteWhere,
    msgNotFound
};