import Logo from "../Logo";
import OpcoesHeader from "../opcoesHeader";
import IconesHeader from "../IconesHeader";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderContainer = styled.header`
    background-color: #FFF; /* Define a cor de fundo do cabeçalho como branca. */
    display: flex; /* Define o elemento .App-header como um contêiner flexível, permitindo o alinhamento e a distribuição eficiente dos itens dentro dele. */
    justify-content: center; /* Centraliza os itens ao longo do eixo principal (horizontal) dentro do cabeçalho. */
`

function Header() {
    return (
        <HeaderContainer>
            <Link to="/"><Logo /></Link>
            <OpcoesHeader />
            <IconesHeader />
        </HeaderContainer>
    )
}

export default Header;