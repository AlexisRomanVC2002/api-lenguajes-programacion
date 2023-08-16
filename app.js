import express from "express";
import { languagesRouter } from "./routes/languages.js";
import { corsMiddleware } from "./middleware/cors.js";

const PORT = 3000;

const app = express();
app.disable('x-powered-by');

// Configurando middlewares
app.use(express.json())
app.use(corsMiddleware);
app.use("/languages", languagesRouter) // <- Usando las rutas importadas.

// Inicializamos el servidor
app.listen(PORT, () => {
    console.log(`Server listening on port -> ${PORT}`)
});
