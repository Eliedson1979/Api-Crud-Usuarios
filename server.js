const express = require("express");
const app = express();
const port = 5000;

app.use(express.json());

let usuarios = [];
let idAtual = 1;

app.get('/saudacao', (req, res) => {
  res.json({ mensagem: 'Bem-vindo à API de exemplos' });
});

// POST - Criar usuário
app.post('/usuarios', (req, res) => {
  try {
    const { nome, email } = req.body;

    if (!nome || !email) {
      return res.status(400).json({ erro: 'Nome e Email são obrigatórios' });
    }

    const novoUsuario = {
      id: idAtual++,
      nome,
      email
    };

    usuarios.push(novoUsuario);
    res.status(201).json(novoUsuario);

  } catch (error) {
    res.status(500).json({ erro: 'Erro interno ao criar usuário', detalhes: error.message });
  }
});

// GET - Listar usuários
app.get('/usuarios', (req, res) => {
  try {
    res.json(usuarios);
  } catch (error) {
    res.json({ erro: 'Erro ao buscar usuários', detalhes: error.message });
  }
});

// PUT - Atualizar usuário
app.put('/usuarios/:id', (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { nome, email } = req.body;

    const usuario = usuarios.find(u => u.id === id);

    if (!usuario) {
      return res.status(404).json({ erro: 'Usuário não encontrado' });
    }

    if (nome) usuario.nome = nome;
    if (email) usuario.email = email;

    res.json(usuario);

  } catch (error) {
    res.status(500).json({ erro: 'Erro ao atualizar usuário', detalhes: error.message });
  }
});

// DELETE - Remover usuário
app.delete('/usuarios/:id', (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const index = usuarios.findIndex(u => u.id === id);

    if (index === -1) {
      return res.status(404).json({ erro: 'Usuário não encontrado' });
    }

    usuarios.splice(index, 1);
    res.json({ mensagem: 'Usuário removido com sucesso' });

  } catch (error) {
    res.status(500).json({ erro: 'Erro ao remover usuário', detalhes: error.message });
  }
});

app.listen(port, () => {
  console.log(`🚀 Aplicação em execução na porta ${port}`);
});
