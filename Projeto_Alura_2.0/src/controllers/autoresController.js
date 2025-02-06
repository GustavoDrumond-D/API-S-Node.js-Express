import NaoEncontrado from "../erros/naoEncontrado.js";
import {autores} from "../models/index.js";

class AutorController {

  // Listar todos os autores
  static listarAutores = async (req, res, next) => {
    try {
      // autores.find() retorna uma promise
      const autoresResultado = autores.find();

      req.resultado = autoresResultado;

      next();
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - Erro interno no servidor` });
    }
  };

  // Listar autor por id
  static listarAutorPorId = async (req, res, next) => {

    try {
      // vai pegar o id do autor a ser buscado
      const id = req.params.id;
      // vai buscar o autor pelo id
      const autorResultado = await autores.findById(id);

      // se o autor for encontrado ele vai ser retornado, caso contrario vai ser retornado um erro
      if (autorResultado !== null) {
        res.status(200).send(autorResultado);
      } else {
        next(new NaoEncontrado("Id do Autor não localizado." ));
      }
    } catch (erro) {
      next(erro);
    }
  };

  // Cadastrar autor
  static cadastrarAutor = async (req, res, next) => {
    try {
      // vai criar um novo autor
      let autor = new autores(req.body);

      // vai salvar o autor
      const autorResultado = await autor.save();

      res.status(201).send(autorResultado.toJSON());
    } catch (erro) {
      next(erro);
    }
  };

  // Atualizar autor
  static atualizarAutor = async (req, res, next) => {
    try {
      const id = req.params.id;

      // vai atualizar o autor pelo id
      const autoresResultado = await autores.findByIdAndUpdate(id, { $set: req.body });

      // se o autor for encontrado ele vai ser retornado, caso contrario vai ser retornado um erro
      if (autoresResultado !== null){
        res.status(200).send({message: "Autor atualizado com sucesso"});
      } else {
        next (new NaoEncontrado("ID do autor(a) não localizado"));
      }
    } catch (erro) {
      next(erro);
    }
  };

  // Excluir autor
  static excluirAutor = async (req, res, next) => {
    try {
      const id = req.params.id;

      // vai excluir o autor pelo id
      const autoresResultado = await autores.findByIdAndDelete(id);
      
      // se o autor for encontrado ele vai ser retornado, caso contrario vai ser retornado um erro
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
