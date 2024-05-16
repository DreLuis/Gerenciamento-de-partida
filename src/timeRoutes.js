// timeRoutes.js

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function criarTime(request, reply) {
  try {
    const { nome, anoFundacao, pais, tecnico } = request.body;
    const novoTime = await prisma.time.create({
      data: {
        nome,
        anoFundacao,
        pais,
        tecnico,
      },
    });
    reply.code(201).send(novoTime);
  } catch (error) {
    reply.code(500).send({ error: 'Erro ao criar time' });
  }
}

async function listarTimes(request, reply) {
  try {
    const times = await prisma.time.findMany();
    reply.send(times);
  } catch (error) {
    reply.code(500).send({ error: 'Erro ao listar times' });
  }
}

module.exports = { criarTime, listarTimes };
