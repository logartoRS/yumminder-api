// index.js

require('./config/conection');

const express = require('express');
const cors = require('cors');
const port = (process.env.port || 3000); // Recupera el puerto del versidor o utiliza el puerto 3000

// Express
const app = express();

// Admitir
app.use(express.json());

// Enable All CORS Requests
app.use(cors());

// Config: Configuracion del puerto
app.set('port', port);

// Rutas
app.use(require('./routes/test.routes'));

// Iniciar Express
app.listen(app.get('port'), (err) => {
    if(err) {
        console.log('Error al iniciar el servidor');
    } else {
        console.log('Servidor iniciado en el puerto ' + port);
    }
});