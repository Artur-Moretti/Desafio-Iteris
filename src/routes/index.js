import express from "express";
import cartas from "./cartasRoutes.js";

const routes = (app) => {
    app.route('/').get((req, res) =>{
        res.status(200).send({titulo: "Servidor Escutando"})
    })

    app.use(
        express.json(),
        cartas
    )
}

export default routes;