// jogadorRoutes.js

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function criarJogador(request, reply) {
  try {
    const { nome, idade, posicao, nacionalidade } = request.body;
    const novoJogador = await prisma.jogador.create({
      data: {
        nome,
        idade,
        posicao,
        nacionalidade,
      },
    });
    reply.code(201).send(novoJogador);
  } catch (error) {
    reply.code(500).send({ error: 'Erro ao criar jogador' });
  }
}

async function listarJogadores(request, reply) {
  try {
    const jogadores = await prisma.jogador.findMany();
    reply.send(jogadores);
  } catch (error) {
    reply.code(500).send({ error: 'Erro ao listar jogadores' });
  }
}

module.exports = { criarJogador, listarJogadores };
