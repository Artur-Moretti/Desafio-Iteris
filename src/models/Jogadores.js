import mongoose from "mongoose";

const jogadoresSchema = new mongoose.Schema({
    id:{type: String},
    jogador1: {type: Number},
    jogador2: {type: Number}

}
    

);


const jogadores = mongoose.model('jogadores', jogadoresSchema)


export default jogadores;