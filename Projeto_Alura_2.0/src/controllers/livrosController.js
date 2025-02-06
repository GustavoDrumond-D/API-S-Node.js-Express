import NaoEncontrado from "../erros/naoEncontrado.js";
import {autores, livros} from "../models/index.js";

class LivroController {

  static listarLivros = async (req, res, next) => {    
    try {
      const livrosResultado = await livros.find()
        .populate("autor")
        .exec();

      res.status(200).json(livrosResultado);
    } catch (erro) {
      next(erro);
    }
  };

  static listarLivroPorId = async (req, res, next) => {
    try {
      const id = req.params.id;

      const livroResultados = await livros.findById(id)
        .populate("autor", "nome")
        .exec();

      if(livroResultados !== null){
        res.status(200).send(livroResultados);
      } else {
        next(NaoEncontrado("ID do livro não encontrado"));
      }
    } catch (erro) {
      next(erro);
    }
  };

  static cadastrarLivro = async (req, res, next) => {
    try {
      let livro = new livros(req.body);

      const livroResultado = await livro.save();

      res.status(201).send(livroResultado.toJSON());
    } catch (erro) {
      next(erro);
    }
  };

  static atualizarLivro = async (req, res, next) => {
    try {
      const id = req.params.id;

      const livroResultado = await livros.findByIdAndUpdate(id, { $set: req.body });

      if (livroResultado !== null){
        res.status(200).send({ message: "Livro atualizado com sucesso" });
      } else {
        next(NaoEncontrado("ID do livro não encontrado"));
      }
    } catch (erro) {
      next(erro);
    }
  };

  static excluirLivro = async (req, res, next) => {
    try {
      const id = req.params.id;

      const livroResultado = await livros.findByIdAndDelete(id);

      if(livroResultado !== null){
        res.status(200).send({ message: "Livro removido com sucesso" });
      } else {
        next(NaoEncontrado("ID do livro não encontrado"));
      }
    } catch (erro) {
      next(erro);
    }
  };

  static listarLivroPorFiltro = async (req, res, next) => {
    try {
      const { editora, titulo, numeroPaginasMax, numeroPaginasMin, nomeAutor } = req.query;

      let busca = {};

      if (editora) busca.editora = editora;
      if (titulo) busca.titulo = { $regex: titulo, $options: "i"};
      if (numeroPaginasMin || numeroPaginasMax ) busca.numeroPaginas = {};
      if (numeroPaginasMin) busca.numeroPaginas.$gte = numeroPaginasMin;
      if (numeroPaginasMax) busca.numeroPaginas.$lte = numeroPaginasMax;
      if (nomeAutor) {
        const autor = await autores.findOne({
          nome: nomeAutor
        });
        if (autor !== null) {
          const autorId = autor._id;

          busca.autor = autorId;
        } else {
          busca = null;
        }
      }

      if (busca !== null) {
        const livrosResultado = await livros.find(busca).populate("autor");
        res.status(200).send(livrosResultado);
      } else {
        res.status(200).send([]);
      }

    } catch (erro) {
      next(erro);
    }
  };
}

export default LivroController;
