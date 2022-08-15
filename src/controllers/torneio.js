import cartas from "../models/Carta.js"
import partidas from "../models/Partidas.js";
import competicao from "../utils/competiçao.js";

class resultado {
    static mostrarVencedor = async (req, res) => {

        let ptsJogador1 = 0;
        let ptsJogador2 = 0;

        const {jogador1, jogador2} = req.body;

        console.log("jogador", jogador1)

        const carta1 = await cartas.findById(jogador1);
        console.log('carta1', carta1)
        const carta2 = await cartas.findById(jogador2);
        console.log("jogador", jogador2)
        console.log("carta2", carta1)

        

        const hp = competicao.hp(carta1, carta2)
       
        if(hp === 1) {
            ptsJogador1++
        }else if (hp === 2){
            ptsJogador2++
        }


        const ataque = competicao.ataque(carta1, carta2)
        
        if(ataque === 1) {
            ptsJogador1++
        }else if (ataque === 2){
            ptsJogador2++
        }

        const defesa = competicao.defesa(carta1, carta2)
        
        if(defesa=== 1) {
            ptsJogador1++
        }else if (defesa=== 2){
            ptsJogador2++
        }

        const ataque_especial = competicao.ataque_especial(carta1, carta2)
       
        if(ataque_especial === 1) {
            ptsJogador1++
        }else if (ataque_especial === 2){
            ptsJogador2++
        }

        const defesa_especial = competicao.defesa_especial(carta1, carta2)
        
        if(defesa_especial === 1) {
            ptsJogador1++
        }else if (defesa_especial === 2){
            ptsJogador2++
        }

        const velocidade = competicao.velocidade(carta1, carta2)
        
        if(velocidade === 1) {
            ptsJogador1++
        }else if (velocidade === 2){
            ptsJogador2++
        }

        const vencedor = competicao.vencedor(ptsJogador1, ptsJogador2)
        
        const perdedor = competicao.perdedor(ptsJogador1, ptsJogador2)

        if (vencedor === perdedor){
            res.status(401).send({mensagem: "EMPATE"})
        }

        const resultadoFinal = { 
         vencedor:vencedor ,
         perdedor: perdedor ,
         detalhes:{
         hp: hp,
         ataque: ataque,
         defesa:defesa,
         ataque_especial:ataque_especial,
         defesa_especial:defesa_especial,
         velocidade:velocidade
        }
    }

      

        let carta = new partidas(resultadoFinal)
        console.log("CARTA", carta)
        carta.save((err) =>{
    
            if(err){
                res.status(500).send({mensagem: `${err.mensagem} - ${carta} falha ao cadastrar a carta`})
            } else{
                res.status(201).send(carta.toJSON({}))
            }
           })
    
    }

  }
       
    
   
    //console.log(carta)
 

 export default resultado