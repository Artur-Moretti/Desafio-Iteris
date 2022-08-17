import express from "express";
import jogadores from "./jogadoresRoutes.js"
import cartas from "./cartasRoutes.js";
import partidas from "./partidaRoutes.js";

const routes = (app) => {
    app.route('/').get((req, res) =>{
        res.status(200).send({titulo: "Servidor Escutando"})
    })

    app.use(
        express.json(),
        cartas,
        partidas,
        jogadores
    )
}

export default routes;