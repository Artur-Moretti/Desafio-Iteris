import express from "express";
import CartaController from "../controllers/cartasControllers.js";

const router = express.Router();

router
   .get("/cartas", CartaController.listarCartas)
   .get("/cartas/:id", CartaController.listarCartaPorId)
   .post("/cartas", CartaController.cadastrarCarta)
   .delete("/cartas/:id", CartaController.deletarCarta)

   export default router; 