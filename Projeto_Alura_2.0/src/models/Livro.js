import mongoose from "mongoose";

const livroSchema = new mongoose.Schema(
  {
    id: { type: String },
    titulo: {
      type: String,
      required: [true, "Titulo obrigatorio"]
    },
    autor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "autores",
      required: [true, "autor(a) é obrigatorio"]
    },
    editora: {
      type: String,
      required: [true, "Editora é obrigatoria"],
      
      // O campo "enum" define um conjunto fixo de valores permitidos para a propriedade correspondente. 
      // Isso garante que os dados sigam um padrão predefinido e evita valores inesperados ou inválidos. 
      // No exemplo abaixo, o array está vazio, o que significa que ainda não há restrições definidas.
      // Neste projeto, vou deixar vazio.
      // enum: {
      //   values:[],
      //   message: "A editora {VALUE} não é um valor permitido."
      // }
    },
    numeroPaginas: { 
      type: Number,
      min: [10, "O número de páginas deve esta de 10 a 5000. Valor fornecido: {VALUE}"],
      max: [5000, "O número de páginas deve esta de 10 a 5000. Valor fornecido: {VALUE}"]
    }
  }
);

const livros = mongoose.model("livros", livroSchema);

export default livros;
