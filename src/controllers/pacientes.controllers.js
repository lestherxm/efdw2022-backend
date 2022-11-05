const db = require("../../database/pool"); //credenciales bajo las cuales se realizan las operaciones crud
//sentencias sql en forma de strings para no hacer tediosa la lectura del codigo (mensajes tambien se incluyen)
const {
    insertInto,
    selectAll,
    selectWhere,
    uptadeWhere,
    deleteWhere,
    msgNotFound
} = require("../sql/pacientes.sql");

const create = async (req, res, next) => {
    try {
        const {
            nombre_completo,
            edad,
            fecha_nacimiento,
            genero,
            estado_civil,
            correo,
            telefono
        } = req.body;
        const result = await db.query(insertInto, [
            nombre_completo,
            edad,
            fecha_nacimiento,
            genero,
            estado_civil,
            correo,
            telefono
        ]);
        res.json(result.rows[0]);
    } catch (error) {
        next(error);
    }
};

const readAll = async (req, res, next) => {
    try {
        const result = await db.query(selectAll);
        res.json(result.rows);
    } catch (error) {
        next(error);
    }
};

const readOne = async (req, res, next) => {
    try {
        const { id_paciente } = req.params; 
        const result = await db.query(selectWhere, [id_paciente]);
        if (result.rows.length === 0) {
            return res.status(404).json({
                message: msgNotFound("obtener", "id_paciente", id_paciente),
            });
        } //else
        res.json(result.rows[0]);
    } catch (error) {
        next(error);
    }
};

const updateOne = async (req, res, next) => {
    try {
        const { id_paciente } = req.params; 
        const {
            nombre_completo,
            edad,
            fecha_nacimiento,
            genero,
            estado_civil,
            correo,
            telefono
        } = req.body;
        const result = await db.query(uptadeWhere, [
            nombre_completo,
            edad,
            fecha_nacimiento,
            genero,
            estado_civil,
            correo,
            telefono,
            id_paciente
        ]);
        if (result.rows.length === 0) {
            return res.status(404).json({
                message: msgNotFound("actualizar", "id_usuario", id_usuario),
            });
        } // else
        return res.json(result.rows[0]);
    } catch (error) {
        next(error);
    }
};

const deleteOne = async (req, res, next) => {
    try {
        const { id_paciente } = req.params;
        const result = await db.query(deleteWhere, [id_paciente]);
        if (result.rowCount === 0) {
            return res.status(404).json({
                message: msgNotFound("eliminar", "id_paciente", id_paciente),
            });
        } // else
        return res.sendStatus(204);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    create,
    readAll,
    readOne,
    updateOne,
    deleteOne
};
