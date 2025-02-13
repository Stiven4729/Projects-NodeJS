require('dotenv').config();
//importamos las dependencias
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

// importaciones propias
const connectdb = require('./config/db');

//definimos app como expres y el puerto a usar
const app = express()
const PORT = process.env.PORT || 5000

//llamamos db.js con connectdb como funcion para conectar la base de datos
connectdb()

//usamos las dependecias
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

app.use('/api/employee', require('./routes/employeeRoutes'));

//especificamos ruta raiz
app.get('/', (req, res) =>{
    res.send("the connection service is correct")
    app.use(express.json())
})

//ponemos en escucha el servidos
app.listen(PORT, () =>{
    console.log(`🌍 Servidor corriendo en http://localhost:${PORT}`)
})