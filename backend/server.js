const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const conexao = require('./dbconfig');

const app = express();

app.use(cors());
app.use(express.json());

app.post('/usuarios', async (req, res) => {
  const { nome, email, senha } = req.body;

  const sql = `INSERT INTO usuario 
    (nome, email, senha) VALUES (?, ?, ?)`;

  const senhaCriptografada = await bcrypt.hash(senha, 10);

  conexao.query(sql, [nome, email, senhaCriptografada], (erro, resultado) => {
    if (erro) {
      console.log(erro);
      return res.status(500).json({
        mensagem: 'Erro ao cadastrar usuário',
      });
    }
    res.json({
      mensagem: 'Usuário cadastrado com sucesso',
    });
  });
});

app.get('/usuarios', (req, res) => {
  const sql = 'SELECT * FROM usuario';

  conexao.query(sql, (erro, resultado) => {
    if (erro) {
      console.log(erro);
      return res.status(500).json({
        mensagem: 'Erro ao buscar usuários',
      });
    }
    res.json(resultado);
  });
});

app.post('/login', (req, res) => {
  const { email, senha } = req.body;

  const query = `SELECT * FROM usuario WHERE email = ?`;

  conexao.query(query, [email], async (erro, resultado) => {
    if (erro) {
      console.log(erro);
      return res.status(500).json({
        mensagem: 'Erro ao buscar usuário',
      });
    }

    const usuario = resultado[0];

    const senhaCorreta = await bcrypt.compare(senha, usuario.senha);

    if (senhaCorreta) {
      return res.json({
        sucesso: true,
        mensagem: 'Login bem-sucedido',
        data: usuario,
      });
    }
  });
});
app.post('/cadastrarFicha', async (req, res) => {
  console.log("Entrou na Rota")
  const {carne, forca, prontidao, determinacao, mente, coragem, dor, folego, protecao, velocidade, maxCarne, maxForca, maxProntidao, maxDeterminacao, maxMente} = req.body;

  const sql = `INSERT INTO ficha 
    (carne, forca, prontidao, determinacao, mente, coragem, dor, folego, protecao, velocidade, maxCarne, maxForca, maxProntidao, maxDeterminacao, maxMente) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  conexao.query(sql, [carne, forca, prontidao, determinacao, mente, coragem, dor, folego, protecao, velocidade, maxCarne, maxForca, maxProntidao, maxDeterminacao, maxMente], (erro, resultado) => {
    if (erro) {
      console.log(erro);
      return res.status(500).json({
        mensagem: 'Erro ao cadastrar ficha',
      });
    }
    res.json({
      mensagem: 'Ficha cadastrada com sucesso',
    });
  });
});

app.put('/cadastrarFicha', async (req, res) => {
  console.log("Entrou na Rota")
  const {carne, forca, prontidao, determinacao, mente, coragem, dor, folego, protecao, velocidade, maxCarne, maxForca, maxProntidao, maxDeterminacao, maxMente} = req.body;

  const sql = `UPDATE ficha SET carne = ?, forca = ?, prontidao = ?, determinacao = ?, mente = ?, coragem = ?, dor = ?, folego = ?, protecao = ?, velocidade = ?
    (carne, forca, prontidao, determinacao, mente, coragem, dor, folego, protecao, velocidade, maxCarne, maxForca, maxProntidao, maxDeterminacao, maxMente) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  conexao.query(sql, [carne, forca, prontidao, determinacao, mente, coragem, dor, folego, protecao, velocidade, maxCarne, maxForca, maxProntidao, maxDeterminacao, maxMente], (erro, resultado) => {
    if (erro) {
      console.log(erro);
      return res.status(500).json({
        mensagem: 'Erro ao cadastrar ficha',
      });
    }
    res.json({
      mensagem: 'Ficha cadastrada com sucesso',
    });
  });
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
