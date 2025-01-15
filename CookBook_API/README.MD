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
   git clone https://github.com/seu-usuario/cookbook-api.git
   cd cookbook-api
