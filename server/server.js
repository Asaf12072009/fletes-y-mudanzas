const express = require('express');
const path = require('path');
const app = express();

// 1. Servir archivos estáticos subiendo un nivel hacia la raíz del proyecto
app.use(express.static(path.join(__dirname, '..')));

// 2. SOLUCIÓN AL CANNOT GET: Ruta explícita para enviar el index.html al entrar a la raíz
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
