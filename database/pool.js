const { Pool } = require("pg");
const { db } = require('./config');

const pool = new Pool({
    user: db.user || 'cqqvfxwlckurku',
    password: db.password || '3f77cda980d775a154f76b10cefa19de2a430ac3c313a6a30f418549b23d4d4d',
    host: db.host || 'ec2-35-170-21-76.compute-1.amazonaws.com',
    port: db.port || 5432,
    database: db.database ||  'd4v06dr02eqtda',
    ssl: {
        rejectUnauthorized: false
    }
});
module.exports = pool;