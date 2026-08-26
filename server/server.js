// Dentro de server/server.js
const express = require('express');
const path = require('path');
const app = express();

// ESTA LÍNEA DEBE SERVIR LA CARPETA 'public' 
app.use(express.static(path.join(__dirname, '../public')));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`));
