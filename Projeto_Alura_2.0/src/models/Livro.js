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
      required: [true, "Editora é obrigatoria"]
    },
    numeroPaginas: { type: Number }
  }
);

const livros = mongoose.model("livros", livroSchema);

export default livros;
