
import cartas from "../models/Carta.js";

class CartaController {

   static listarCartas = (req, res ) =>{
    cartas.find((err, cartas)=>{
        res.status(200).json(cartas)
    })
   }

   static listarCartaPorId = (req, res) =>{
       const id = req.params.id;

       cartas.findById(id, (err, cartas)=>{
           if(err){
               res.status(400).send({mensagem: `${err.mensagem} id da carta não localizado`})
           }else{
               res.status(200).send(cartas);
           }
       })
   }


   static cadastrarCarta = (req, res) =>{
       let carta = new cartas(req.body);
    
       carta.save((err) =>{

        if(err){
            res.status(500).send({mensagem: `${err.mensagem} - falha ao cadastrar a carta`})
        } else{
            res.status(201).send(carta.toJSON())
        }
       })
   }

   static deletarCarta = (req, res) =>{
       const id = req.params.id;

       cartas.findByIdAndDelete(id, (err) =>{
           if(!err){
               res.status(200).send({mensagem: "Carta removida com sucesso"})
           }else {
               res.status(500).send({mensagem: err.mensagem})
           }
       })
   }
   

}

export default CartaController;