// rutas.js

const router =  require('express').Router();
const conexion = require('../config/conection');

// ---------- Rutas de peticiones del cliente ------------
// GET Ingredient Type
router.get('/', (req, res) => {
    let sql = `
        SELECT *
          FROM yum_ingredient_type
    `;

    conexion.query(sql, (err, rows, fields) => {
        if(err) {
            throw err;
        } else {
            res.json(rows);
        }
    });
});
// -------------------------------------------------------

module.exports = router;