const express = require('express');
const conectarBD = require('./config/db');
const cors = require('cors');



//se crea el servidor
const app = express();

//conectar la bd

conectarBD();

// usamos expres json para capturar formato json
app.use(express.json()); 

app.use(cors())

app.use('/api/products', require('./routs/product'));

//definicion ruta principal 
app.get('/', (req, res) =>{
    res.send('PRODUCTO');
    app.use(express.json());
})

app.listen(4000, ()=>{
    console.log("El servidor esta escuchando")
})
