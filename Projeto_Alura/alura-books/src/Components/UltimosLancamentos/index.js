import {livros} from "./DadosUltimosLancamentos"
import styled from "styled-components"
import {Titulo} from "../Titulo"
import CardRecomenda from "../CardRecomenda"
import imagemLivro from "../../imagens/livro2.png"

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NovoLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;

`

function UltimosLancamentos() {
    return (
        <UltimosLancamentosContainer>
            <Titulo 
                cor={"#EB9B00"}
                tamanhoFonte={"36px"}>
                    Últimos Lançamentos
            </Titulo>
            <NovoLivrosContainer>
                {livros.map(livro => (
                    <img src={livro.src} alt="Imagens Livros"></img>
                ))}
            </NovoLivrosContainer>
            <CardRecomenda
                titulo="Talvez você se interesse por ..."
                subtitulo="Angular 11"
                descricao="Construindo uma aplicação com a plataforma Google"
                img={imagemLivro}
            />
        </UltimosLancamentosContainer>
    )
}

export default UltimosLancamentos;