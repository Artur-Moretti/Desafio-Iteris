import jogadores from "../models/Jogadores.js";

class JogadoresController {

    static listarJogadores = (req, res ) =>{
            jogadores.find((err, jogadores)=>{
            res.status(200).json(jogadores)
        })
       }

        
}

export default JogadoresController;