import mongoose from 'mongoose';

const conexao = await mongoose.connect('mongodb://localhost:3000/test')

export default conexao
