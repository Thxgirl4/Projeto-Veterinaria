import mongoose from "mongoose";
const conexao = await mongoose.connect('mongodb://localhost:27017/')

export default conexao