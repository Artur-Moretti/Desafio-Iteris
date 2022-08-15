import mongoose from "mongoose";

const partidaSchema = new mongoose.Schema({
    id:{type: String},
    vencedo: {type: String},
    perdedor: {type: String},
    detalhes:{
    hp: {type: Number},
    ataque: {type: Number},
    defesa:{type: Number},
    ataque_especial:{type: Number},
    defesa_especial:{type: Number},
    velocidade:{type: Number}

}
    
}
);


const partidas = mongoose.model('partidas', partidaSchema)


export default partidas;
