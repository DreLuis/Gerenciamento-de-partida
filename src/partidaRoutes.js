// partidaRoutes.js

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function criarPartida(request, reply) {
  try {
    const { data, local, placar, timeCasa, timeVisitante } = request.body;
    const novaPartida = await prisma.partida.create({
      data: {
        data,
        local,
        placar,
        timeCasa,
        timeVisitante,
      },
    });
    reply.code(201).send(novaPartida);
  } catch (error) {
    reply.code(500).send({ error: 'Erro ao criar partida' });
  }
}

async function listarPartidas(request, reply) {
  try {
    const partidas = await prisma.partida.findMany();
    reply.send(partidas);
  } catch (error) {
    reply.code(500).send({ error: 'Erro ao listar partidas' });
  }
}

module.exports = { criarPartida, listarPartidas };
