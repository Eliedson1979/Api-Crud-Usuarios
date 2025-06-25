# 📚 API CRUD de Usuários com Node.js e Express

Este projeto é uma API RESTful simples construída com Node.js e Express, que permite realizar operações básicas de CRUD (Create, Read, Update, Delete) com um array de usuários armazenado em memória.


## Acesse o projeto clicando <a href="https://github.com/Eliedson1979/Api-Crud-Usuarios">AQUI</a>

<br />


## 🚀 Instalação e execução

  <details>
    <summary>Instalando e executando</summary>
    <br />

### 1 - Clone o repositório:

```
git clone git@github.com:Eliedson1979/Api-Crud-Usuarios.git
```

### 2 - Apos ter o repositório clonado em sua maquina, execute este comando para acessar a pasta do projeto:

```sh
cd Api-Crud-Usuarios
```

### 3 - Dentro da pasta do projeto, execute o comando abaixo para instalar as dependências do projeto:

Caso utilize o npm:

```sh
npm install
```

Caso utilize o yarn:

```sh
yarn install
```

### 4 - Dentro da pasta do projeto, execute o comando abaixo para iniciar o servidor do projeto:

Caso utilize o node:

```sh
node server.js
```

Caso utilize o nodemon:

```sh
nodemon server.js
```

### 5 - Acesse a aplicação:

Abrindo na porta padrão que usa: <http://localhost:5000/> em seu navegador.

  </details>
<br />

## ⚙️ Tecnologias

* Node.js
* Express


## 📌 Funcionalidades
* [GET] /saudacao
Retorna uma mensagem de boas-vindas.

* [POST] /usuarios
Adiciona um novo usuário ao sistema.
Campos obrigatórios: nome, email

* [GET] /usuarios
Listagem de todos os usuários

* [PUT] /usuarios/:id
Atualização de dados de um usuário existente

* [DELETE] /usuarios/:id
Remoção de um usuário

## 🛠️ Melhorias Futuras
* Uso de banco de dados real (MongoDB, PostgreSQL etc.)

* Organização do código em camadas (MVC).

* Implementar validações mais robustas.

* Inclusão de autenticação e segurança.

