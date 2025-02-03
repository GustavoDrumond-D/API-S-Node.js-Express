import NaoEncontrado from "../erros/naoEncontrado.js";
import autores from "../models/Autor.js";

class AutorController {

  static listarAutores = async (req, res) => {
    try {
      const autoresResultado = await autores.find();

      res.status(200).json(autoresResultado);

    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - Erro interno no servidor` });
    }
  };

  static listarAutorPorId = async (req, res, next) => {

    try {
      const id = req.params.id;

      const autorResultado = await autores.findById(id);

      if (autorResultado !== null) {
        res.status(200).send(autorResultado);
      } else {
        next(new NaoEncontrado("Id do Autor não localizado." ));
      }
    } catch (erro) {
      next(erro);
    }
  };

  static cadastrarAutor = async (req, res, next) => {
    try {
      let autor = new autores(req.body);

      const autorResultado = await autor.save();

      res.status(201).send(autorResultado.toJSON());
    } catch (erro) {
      next(erro);
    }
  };

  static atualizarAutor = async (req, res, next) => {
    try {
      const id = req.params.id;

      const autoresResultado = await autores.findByIdAndUpdate(id, { $set: req.body });

      if (autoresResultado !== null){
        res.status(200).send({message: "Autor atualizado com sucesso"});
      } else {
        next (new NaoEncontrado("ID do autor(a) não localizado"));
      }
    } catch (erro) {
      next(erro);
    }
  };

  static excluirAutor = async (req, res, next) => {
    try {
      const id = req.params.id;

      const autoresResultado = await autores.findByIdAndDelete(id);
      
      if (autoresResultado !== null){
        res.status(200).send({ message: "Autor removido com sucesso" });
      } else {
        next(new NaoEncontrado("ID do autor(a) não localizado"));
      }
    } catch (erro) {
      next(erro);
    }
  };

}

export default AutorController;
