const db = require("../../database/pool"); //credenciales bajo las cuales se realizan las operaciones crud
//sentencias sql en forma de strings para no hacer tediosa la lectura del codigo (mensajes tambien se incluyen)
const {
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
} = require("../sql/control_citas.sql");

const create = async (req, res, next) => {
    try {
        const {
            id_paciente,
            id_doctor,
            fecha_cita
        } = req.body;
        const result = await db.query(insertInto, [
            id_paciente,
            id_doctor,
            fecha_cita
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

const readCitasTrue = async (req, res, next) => {
    try {
        const result = await db.query(selectCitasTrue);
        res.json(result.rows);
    } catch (error) {
        next(error);
    }
};

const readCitasFalse = async (req, res, next) => {
    try {
        const result = await db.query(selectCitasFalse);
        res.json(result.rows);
    } catch (error) {
        next(error);
    }
};

const readOneCita = async (req, res, next) => {
    try {
        const { id_cita } = req.params; 
        const result = await db.query(selectWhereCita, [id_cita]);
        if (result.rows.length === 0) {
            return res.status(404).json({
                message: msgNotFound("obtener", "id_cita", id_cita),
            });
        } //else
        res.json(result.rows[0]);
    } catch (error) {
        next(error);
    }
};

const readOneDoctor = async (req, res, next) => {
    try {
        const { id_doctor } = req.params; 
        const result = await db.query(selectWhereDoctor, [id_doctor]);
        if (result.rows.length === 0) {
            return res.status(404).json({
                message: msgNotFound("obtener", "id_doctor", id_doctor),
            });
        } //else
        res.json(result.rows);
    } catch (error) {
        next(error);
    }
};

const readOnePaciente = async (req, res, next) => {
    try {
        const { id_paciente } = req.params; 
        const result = await db.query(selectWherePaciente, [id_paciente]);
        if (result.rows.length === 0) {
            return res.status(404).json({
                message: msgNotFound("obtener", "id_paciente", id_paciente),
            });
        } //else
        res.json(result.rows);
    } catch (error) {
        next(error);
    }
};

const updateOne = async (req, res, next) => {
    try {
        const { id_cita } = req.params; 
        const {
            id_paciente,
            id_doctor,
            fecha_cita,
            estatus_cita
        } = req.body;
        const result = await db.query(uptadeWhere, [
            id_paciente,
            id_doctor,
            fecha_cita,
            estatus_cita,
            id_cita
        ]);
        if (result.rows.length === 0) {
            return res.status(404).json({
                message: msgNotFound("actualizar", "id_cita", id_cita),
            });
        } // else
        return res.json(result.rows[0]);
    } catch (error) {
        next(error);
    }
};

const deleteOne = async (req, res, next) => {
    try {
        const { id_cita } = req.params;
        const result = await db.query(deleteWhere, [id_cita]);
        if (result.rowCount === 0) {
            return res.status(404).json({
                message: msgNotFound("eliminar", "id_cita", id_cita),
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
    readCitasTrue,
    readCitasFalse,
    readOneCita,
    readOneDoctor,
    readOnePaciente,
    updateOne,
    deleteOne
};
