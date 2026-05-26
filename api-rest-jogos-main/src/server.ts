import express from "express";

import rotasGenero from "./routes/generoRoutes";
import rotasPlataforma from "./routes/plataformaRouter";
import rotasJogo from "./routes/jogoRoutes";
import rotasJogoPlataforma from "./routes/jogoPlataformaRoutes";

const app = express();

app.use(express.json());

app.use("/generos", rotasGenero);
app.use("/plataformas", rotasPlataforma);
app.use("/jogos", rotasJogo);
app.use("/jogos-plataformas", rotasJogoPlataforma);

const PORT = 8080;

app.listen(PORT, () => {
  console.log("🚀 API de games iniciada com sucesso!");
});