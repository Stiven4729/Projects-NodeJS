<h1>🚀 ¿Cómo se hizo?</h1>

<h2>🛠 Creación del entorno Angular</h2>
<pre>
ng new ruta/front-end
ng g c ruta/create-product
ng g c ruta/list-product
ng g s ruta/product
</pre>

<h2>🏗 Creación del entorno Node.js</h2>
<pre>
npm init  # Inicializa un proyecto Node.js
npm install -D nodemon  # Servidor de desarrollo
npm install express mongoose dotenv cors morgan  # Dependencias principales
</pre>

<p>Luego, en <code>package.json</code>, agregar:</p>
<pre>
"scripts": {
  "start": "node index.js",
  "dev": "nodemon index.js"
}
</pre>

<h2>💾 Conexión con la Base de Datos (MongoDB)</h2>
<p>En <code>index.js</code>, agregar lo siguiente:</p>

<pre>
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('✅ Conectado a MongoDB'))
    .catch(err => console.error('❌ Error al conectar a MongoDB:', err));

// Ruta de prueba
app.get('/', (req, res) => {
    res.send('¡Servidor funcionando!');
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
</pre>
