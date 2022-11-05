const db = require("../../database/pool"); //credenciales bajo las cuales se realizan las operaciones crud
//sentencias sql en forma de strings para no hacer tediosa la lectura del codigo (mensajes tambien se incluyen)
const {
    insertInto,
    selectAll,
    selectWhere,
    uptadeWhere,
    deleteWhere,
    msgNotFound,
} = require("../sql/usuarios.sql");

const create = async (req, res, next) => {
    try {
        const {
            usuario,
            biografia,
            edad,
            genero
        } = req.body;
        const result = await db.query(insertInto, [
            usuario,
            biografia,
            edad,
            genero
        ]);
        res.json(result.rows[0]);
    } catch (error) {
        next(error);
    }
};

const readAll = async (req, res, next) => {
    try {
        const result = await db.query(selectAll);
        if (result.rows.length === 0) {
            return res.status(404).json({
                message: msgNotFound("obtener", "prop", prop),
            });
        } //else
        res.json(result.rows);
    } catch (error) {
        next(error);
    }
};

const readOne = async (req, res, next) => {
    try {
        const { id_usuario } = req.params; 
        const result = await db.query(selectWhere, [id_usuario]);
        if (result.rows.length === 0) {
            return res.status(404).json({
                message: msgNotFound("obtener", "id_usuario", id_usuario),
            });
        } //else
        res.json(result.rows[0]);
    } catch (error) {
        next(error);
    }
};

const updateOne = async (req, res, next) => {
    try {
        const { id_usuario } = req.params; 
        const {
            usuario,
            biografia,
            edad,
            genero
        } = req.body;
        const result = await db.query(uptadeWhere, [
            usuario,
            biografia,
            edad,
            genero,
            id_usuario
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
        const { id_usuario } = req.params;
        const result = await db.query(deleteWhere, [id_usuario]);
        if (result.rowCount === 0) {
            return res.status(404).json({
                message: msgNotFound("eliminar", "id_usuario", id_usuario),
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
