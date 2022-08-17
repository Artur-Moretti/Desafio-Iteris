import express from "express";
import JogadoresController from "../controllers/jogadoresControlles.js";


const router = express.Router();



router
   .get("/jogadores", JogadoresController.listarJogadores)
   //.put("/jogadores", JogadoresController.atualizarjogadores)

   export default router; 