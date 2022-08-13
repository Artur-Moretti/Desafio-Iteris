import mongoose from "mongoose"

mongoose.connect("mongodb+srv://Moretti:123@cluster0.bzgdver.mongodb.net/Desafio-iteris");

let db = mongoose.connection;

export default db;

