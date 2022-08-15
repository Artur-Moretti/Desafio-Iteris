

class competicao {



static hp = (carta1, carta2) => {
    

    if(carta1.atributos.hp > carta2.atributos.hp){
        return 1 
    }else if(carta1.atributos.hp < carta2.atributos.hp ){
        return 2
    }else {
        return 0
    }
}
  

    static ataque = (carta1, carta2) => {

        if(carta1.atributos.ataque > carta2.atributos.ataque){
            return 1
        }else if(carta1.atributos.ataque < carta2.atributos.ataque ){
            return 2
        }else {
            return 0
        }
    }
 

    static defesa = (carta1, carta2) => {

        if(carta1.atributos.defesa > carta2.atributos.defesa){
            return 1
        }else if(carta1.atributos.defesa < carta2.atributos.defesa ){
            return 2
        }else {
            return 0
        }
    }
   

    static ataque_especial = (carta1, carta2) => {

        if(carta1.atributos.ataque_especial > carta2.atributos.ataque_especial){
            return 1
        }else if(carta1.atributos.ataque_especial < carta2.atributos.ataque_especial ){
            return 2
        }else {
            return 0
        }
    }


    static defesa_especial = (carta1, carta2) => {

        if(carta1.atributos.defesa_especial > carta2.atributos.defesa_especial){
            return 1
        }else if(carta1.atributos.defesa_especial < carta2.atributos.defesa_especial ){
            return 2
        }else {
            return 0
        }
    }


    static velocidade = (carta1, carta2) => {

        if(carta1.atributos.velocidade > carta2.atributos.velocidade){
            return 1
        }else if(carta1.atributos.velocidade < carta2.atributos.velocidade ){
            return 2
        }else {
            return 0
        }
    
    }
  
    


static vencedor = (ptsJogador1, ptsJogador2) => {
    if(ptsJogador1 > ptsJogador2){
        return 1;
    }else if (ptsJogador1 < ptsJogador2){
        return 2;
    }else {
        return  0;
    }
}

static perdedor = (ptsJogador1, ptsJogador2) => {
    if(ptsJogador1 < ptsJogador2){
        return 1;
    }else if (ptsJogador1 > ptsJogador2){
        return 2;
    }else {
        return 0;
    }
}


}

export default competicao