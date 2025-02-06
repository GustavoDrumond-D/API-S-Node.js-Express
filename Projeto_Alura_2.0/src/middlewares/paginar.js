import requisicaoIncorreta from "../erros/requisicaoIncorreta.js";

async function Paginar(req, res, next) {
  try {
    let { limite = 5, pagina = 1, ordenacao = "_id:-1"} = req.query;

    let [campoOrdenacao, ordem] = ordenacao.split(":");
    limite = parseInt(limite);
    pagina = parseInt(pagina);
    ordem = parseInt(ordem);

    const resultado = req.resultado;
  
    if (limite > 0 && pagina > 0){
      const resultadoPaginado = await resultado.find()
      //sort vai ordenar os registros
        .sort({[campoOrdenacao]: ordem})
      //skip vai pular os primeiros 5 registros
        .skip((pagina - 1) * limite)
      //limit vai limitar a quantidade de registros
        .limit(limite)
      //exec vai executar a consulta
        .exec();
      res.status(200).json(resultadoPaginado);
    } else {
      next(new requisicaoIncorreta());
    }
  } catch (erro) {
    next(erro);
  }
}

export default Paginar;