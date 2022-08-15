
import partidas from "../models/Partidas.js";
import resultado from "./torneio.js";

class PartidaController {

   static listarPartidas = (req, res ) =>{
    partidas.find((err, partidas)=>{
        res.status(200).json(partidas)
    })
   }

  

   static cadastrarPartidas = (req, res) =>{
       let carta = new partidas(req.body);
       console.log(carta)
       carta.save((err) =>{

        if(err){
            res.status(500).send({mensagem: `${err.mensagem} - ${carta} falha ao cadastrar a carta`})
        } else{
            res.status(201).send(carta.toJSON())
        }
       })
   }

   

}

export default PartidaController;