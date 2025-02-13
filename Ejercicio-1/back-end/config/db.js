const mongoose = require('mongoose');
require('dotenv').config({ path: 'variables.env' });

const conectarBD = () => {
    mongoose.connect(process.env.DB_MONGO)
    .then(() => {
        console.log('Conexión a MongoDB establecida');
    })
    .catch((error) => {
        console.error('Error al conectar la base de datos:', error);
        process.exit(1); // Salir del proceso en caso de error
    });
};

module.exports = conectarBD;
