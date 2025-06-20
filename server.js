const express = require("express");
const app = express();
const port = 5000

// Middleware para interpretar JSON no corpo das requisições
app.use(express.json());

// Array em memória para armazenar os usuários
let usuarios = [];
let idAtual = 1;

// Rota GET /saudacao
app.get('/saudacao', (req, res) => {
  res.json({mensagem: 'Bem-vindo à API de exemplos'})
});

// Rota POST /usuarios - Adicionar novo usuário
app.post('/usuarios', (req, res) => {
  const {nome, email} = req.body;
  if(!nome || !email){
   return res.status(400).json({erro: 'Nome e Email sao obrigatórios'});
  }
  
  const novoUsuario = {
    id: idAtual++,
    nome,
    email
  };
  usuarios.push(novoUsuario);
  res.status(201).json(novoUsuario);
});




app.listen(port, () => {
  console.log(`🚀 Aplicação em execução na porta ${port}`);
  
});