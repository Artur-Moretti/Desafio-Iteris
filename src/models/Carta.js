import mongoose from "mongoose";

const cartaSchema = new mongoose.Schema({
    id: {type: String},
    nome: {type: String},
    atributos:{
    hp: {type: Number},
    ataque: {type: Number},
    defesa:{type: Number},
    ataque_especial:{type: Number},
    defesa_especial:{type: Number},
    velocidade:{type: Number}

}
    
}
);


const cartas = mongoose.model('cartas', cartaSchema)


export default cartas;



