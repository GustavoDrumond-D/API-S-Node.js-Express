# CookBook API

A **CookBook API** é uma aplicação desenvolvida em Node.js com Express que permite gerenciar receitas culinárias. O objetivo do projeto é fornecer uma API REST para criar, visualizar, atualizar e excluir receitas, além de oferecer funcionalidades como categorias e favoritos.

## **Funcionalidades**

- **Gerenciamento de receitas**: 
  - Adicionar, listar, atualizar e excluir receitas.
  - Filtros para buscar receitas por ingredientes, categorias ou tempo de preparo.
- **Categorias de receitas**: 
  - Associar receitas a categorias específicas (ex.: Vegetariana, Sobremesas, etc.).
- **Favoritos**:
  - Permitir que receitas sejam marcadas como favoritas.
- **Autenticação (opcional)**: 
  - Implementar login e cadastro de usuários.
- **Upload de imagens (opcional)**:
  - Adicionar fotos às receitas.

## **Tecnologias utilizadas**

- **Node.js**: Ambiente de execução JavaScript no servidor.
- **Express**: Framework web para criar rotas e middlewares de forma eficiente.
- **Nodemon**: Utilizado para reiniciar automaticamente o servidor durante o desenvolvimento.

## **Instalação**

1. Clone este repositório:
   ```bash
   git clone https://github.com/GustavoDrumond-D/API-S-Node.js-Express/tree/03f6af9709d7fcbab93d260768693b0a476d780d/CookBook_API
   cd CookBook_API
   ```

2. Instale as dependências:
   - **Node.js**: Inicialize o projeto com o comando:
     ```bash
     npm init -y
     ```
   - **Nodemon**: Instale o Nodemon com o comando:
     ```bash
     npm install nodemon
     ```
   - Adicione ao arquivo `package.json`, na seção de scripts, o seguinte código para facilitar o desenvolvimento:
     ```json
     "dev": "nodemon server.js"
     ```
   - **MongoDB**: Instale o mongodb com o comando:
     ```bash
     npm install mongodb
     ```
   - **Mongoose**: Instale o mongoose com o comando:
     ```bash
     npm install mongoose
     ```
   - **dotenv**: Instale o dotenv com o comando:
     ```bash
     npm install dotenv
     ```

3. Executando o projeto:
  Execute o projeto com o seguinte comando
  ```bash
  npm run dev
  ```
