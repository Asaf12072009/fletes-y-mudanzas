const express = require('express');
const path = require('path');
const app = express();

// Servir archivos estáticos directamente usando el directorio de ejecución actual (la raíz del repositorio)
app.use(express.static(path.resolve('./')));

// Ruta inicial que envía el archivo index.html desde la raíz real del proyecto
app.get('/', (req, res) => {
    res.sendFile(path.resolve('./index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
