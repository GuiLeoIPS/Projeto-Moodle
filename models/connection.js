const util = require('util');
const mysql = require('mysql');

const pool = mysql.createPool({
    host: "remotemysql.com",
    user:  "t41dez0bjX",
    password: "7IxDUyBMyS",
    database: "t41dez0bjX",
    connectionLimit: 5
});

pool.getConnection((err, connection) => {
    if(err) {
        console.error(err.code);
    }
    if(connection) {
        connection.release();
    }

    return 
});

pool.query = util.promisify(pool.query);

module.exports = pool;