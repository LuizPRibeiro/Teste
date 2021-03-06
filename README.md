
# Um BOT para ler comentários utilizando o IBM Watson Text to Speech.

### Descrição do Projeto

Este projeto tem como objetivo receber um comentário do usuário e disponibilizar a direita tanto o comentário para leitura quanto um botão para ouvir a leitura do comentário escrito.

## Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

## Como rodar

- Na pasta principal do projeto: npm install para instalar as dependências e npm start para inicializar a aplicação React;

- Criar um banco de dados com o nome de "smarkio", a implementação das tabelas será responsiva.

- Apagar o diretório .ENV e em .ENVignore colocar os respectivos valores seguindo o exemplo colocado. Assim que já estiver substituído, renomear o diretório para .ENV

- O servidor inciará na porta:8081 - acesse <http://localhost:8081> 

## Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Expo](https://expo.io/)
- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)

## A aplicação conta com:

- Uma caixa de texto para escrever os comentários;
- Um botão para submeter o comentário e escrever no BD;
- Um botão para ler os comentários;
- Todos as strings base64 dos áudios já sintetizados são armazenados na pasta "comentários", para que não precise ser feita outra requisição e sintetização ao escutar um áudio já sintetizado.