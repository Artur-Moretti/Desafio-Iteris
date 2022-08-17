
import partidas from "../models/Partidas.js";


class PartidaController {

   static listarPartidas = (req, res ) =>{
    partidas.find((err, partidas)=>{
        res.status(200).json(partidas)
    })
   }

  

   static cadastrarPartidas = (req, res) =>{
       let carta = new partidas(req.body);
     
       carta.save((err) =>{

        if(err){
            res.status(500).send({mensagem: `${err.mensagem} - falha ao cadastrar a Partida`})
        } else{
            res.status(201).send(carta.toJSON())
        }
       })
   }

   

}

export default PartidaController;