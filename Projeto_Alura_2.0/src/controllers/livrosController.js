import NaoEncontrado from "../erros/naoEncontrado.js";
import {autores, livros} from "../models/index.js";
import requisicaoIncorreta from "../erros/requisicaoIncorreta.js";

class LivroController {

  // listarLivros vai retornar todos os livros
  static listarLivros = async (req, res, next) => {    
    try {
      let { limite = 5, pagina = 1, ordenacao = "_id:-1"} = req.query;

      let [campoOrdenacao, ordem] = ordenacao.split(":");
      limite = parseInt(limite);
      pagina = parseInt(pagina);
      ordem = parseInt(ordem);

      if (limite > 0 && pagina > 0){
        const livrosResultado = await livros.find()
        //sort vai ordenar os registros
          .sort({[campoOrdenacao]: ordem})
        //skip vai pular os primeiros 5 registros
          .skip((pagina - 1) * limite)
        //limit vai limitar a quantidade de registros
          .limit(limite)
        //populate vai trazer os dados do autor
          .populate("autor")
        //exec vai executar a consulta
          .exec();
        res.status(200).json(livrosResultado);
      } else {
        next(new requisicaoIncorreta());
      }
    } catch (erro) {
      next(erro);
    }
  };

  // listarLivroPorId vai retornar um livro especifico
  static listarLivroPorId = async (req, res, next) => {
    try {
      //params vai pegar os paramentros da rota
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

  // cadastrarLivro vai cadastrar um livro
  static cadastrarLivro = async (req, res, next) => {
    try {
      //body vai pegar o corpo da requisicao
      let livro = new livros(req.body);

      //save vai salvar o livro no banco
      const livroResultado = await livro.save();

      res.status(201).send(livroResultado.toJSON());
    } catch (erro) {
      next(erro);
    }
  };

  // atualizarLivro vai atualizar um livro
  static atualizarLivro = async (req, res, next) => {
    try {
      const id = req.params.id;

      //findByIdAndUpdate vai atualizar o livro
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

  // excluirLivro vai excluir um livro
  static excluirLivro = async (req, res, next) => {
    try {
      const id = req.params.id;

      //findByIdAndDelete vai excluir o livro
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

  // listarLivroPorFiltro vai listar livros por filtro
  static listarLivroPorFiltro = async (req, res, next) => {
    try {
      //query vai pegar os paramentros da rota
      const { editora, titulo, numeroPaginasMax, numeroPaginasMin, nomeAutor } = req.query;

      let busca = {};

      //se o valor da propriedade editora existir, vai ser adicionado ao objeto busca
      if (editora) busca.editora = editora;
      //se o valor da propriedade titulo existir, vai ser adicionado ao objeto busca
      if (titulo) busca.titulo = { $regex: titulo, $options: "i"};
      //se o valor da propriedade numeroPaginasMax existir, vai ser adicionado ao objeto busca
      if (numeroPaginasMin || numeroPaginasMax ) busca.numeroPaginas = {};
      //se o valor da propriedade numeroPaginasMin existir, vai ser adicionado ao objeto busca
      if (numeroPaginasMin) busca.numeroPaginas.$gte = numeroPaginasMin;
      //se o valor da propriedade numeroPaginasMax existir, vai ser adicionado ao objeto busca
      if (numeroPaginasMax) busca.numeroPaginas.$lte = numeroPaginasMax;
      //se o valor da propriedade nomeAutor existir, vai ser adicionado ao objeto busca
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

      //find vai buscar os livros
      //Caso a busca seja nula, vai ser retornado um array vazio
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
