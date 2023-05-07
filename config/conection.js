// config/conexion.js

const mysql = require('mysql');

const conexion = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'brayan123',
    database: 'db_yumminder'
});

conexion.connect((err) => {
    if(err) {
        console.log('Ha ocurrido un error: ' + err);
    } else {
        console.log('La base de datos se conecto!!');
    }
});

module.exports = conexion;