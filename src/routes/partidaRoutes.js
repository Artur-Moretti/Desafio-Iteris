import express from "express";
import PartidaController from "../controllers/partidasControllers.js";
import resultado from "../controllers/torneioController.js";

const router = express.Router();



router
   .get("/partidas", PartidaController.listarPartidas)
   .post("/partidas", resultado.mostrarVencedor)

   export default router; 