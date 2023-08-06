const express = require("express");

const app = express();
const PORT = 3000;

// Configurando middlewares
const apiRoutes = require("./api/api"); // Importando las rutas de api.js
app.use(express.json())
app.use("/api", apiRoutes) // <- Usando las rutas importadas.

// Inicializamos el servidor
app.listen(PORT, () => {
    console.log(`Server listening on port -> ${PORT}`)
});