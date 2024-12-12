import logo from '../../imagens/logo.svg'
import styled from 'styled-components'

const LogoContainer = styled.div`
  display: flex; /* Define o elemento com a classe 'logo' como um contêiner flexível, permitindo o uso de layout flexbox para organizar seus filhos (itens contidos) de forma eficiente. */
  font-size: 30px; /* Define o tamanho da fonte para 30 pixels, aplicando-se ao texto contido no elemento com a classe 'logo'. */
`

const LogoImage = styled.img`
  margin-right: 10px; /* Adiciona uma margem à direita de 10 pixels ao elemento com a classe 'logo-img', criando espaço entre a imagem e o próximo elemento adjacente dentro do contêiner flexível. */
`

function Logo(){
    return (
        <LogoContainer>
          <LogoImage src={logo} alt="Logo do Alura-Books" className='logo-img'></LogoImage>
          <p><strong>Alura</strong>Books</p>
      </LogoContainer>
    )
};

export default Logo;