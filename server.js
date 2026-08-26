const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Servir archivos estáticos desde la carpeta public (ahora en la misma ruta raíz)
app.use(express.static(path.join(__dirname, 'public')));

// Ruta comodín para SPA o carga de la landing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(PORT, () => {
  console.log(`FletHumberto server corriendo en el puerto ${PORT}`);
});