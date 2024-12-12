import Perfil from "../../imagens/perfil.svg"
import Sacola from '../../imagens/sacola.svg'
import styled from "styled-components"
    

const Icone = styled.li`
    margin-right: 40px; /* Adiciona uma margem à direita de 40 pixels ao elemento com a classe .icone, criando espaço entre os ícones adjacentes. */
    width: 25px; /* Define a largura do elemento .icone para 25 pixels. */
`
const Icones = styled.ul`
    display: flex; /* Define o elemento .icones como um contêiner flexível, permitindo o alinhamento dos ícones em uma linha. */
    align-items: center; /* Centraliza os ícones ao longo do eixo transversal (vertical) dentro do contêiner flexível. */
`

const icones = [Perfil,Sacola]

function IconesHeader(){
    return (
        <Icones>
        { icones.map( (icone) => (
            <Icone><img src={icone} alt="Icones"></img></Icone>
        ) ) }
    </Icones>
    )
}

export default IconesHeader;