const express = require('express');
const path = require('path');
const app = express();

// Servir archivos estáticos subiendo un nivel hacia la raíz del proyecto
app.use(express.static(path.join(__dirname, '..')));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
