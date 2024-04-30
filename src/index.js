const TelegramBot = require('node-telegram-bot-api');
const { PrismaClient } = require('@prisma/client');

const token = 'Token do seu bot aqui';
const bot = new TelegramBot(token, { polling: true });
const prisma = new PrismaClient();

// Armazenar o estado do usuário em relação ao envio do e-mail
const userStates = {};

bot.on('message', async (msg) => {
  const chatId = msg.chat.id;
  const messageText = msg.text;
  const currentHour = new Date().getHours();
  const isBusinessHours = currentHour >= 9 && currentHour < 18;

  // Se o estado do usuário não estiver definido, define-o como 'waitingEmail'
  if (!userStates[chatId]) {
    userStates[chatId] = 'waitingEmail';
  }

  if (isBusinessHours) {
    bot.sendMessage(chatId, 'Horário comercial! Visite nosso site: https://faesa.br');
  } else {
    // Fora do horário comercial
    if (userStates[chatId] === 'waitingEmail' && messageText && messageText.includes('@')) {
      // Se a mensagem contém um e-mail, armazena-o no banco de dados
      await prisma.user.create({
        data: {
          email: messageText
        }
      });
      // Atualiza o estado do usuário para 'emailReceived'
      userStates[chatId] = 'emailReceived';
      bot.sendMessage(chatId, 'Fora do horário comercial. Seu e-mail foi registrado. Entraremos em contato em breve.');
    } else if (userStates[chatId] === 'waitingEmail') {
      // Se a mensagem não contém um e-mail, solicita o e-mail do usuário
      bot.sendMessage(chatId, 'Fora do horário comercial. Por favor, nos informe seu e-mail para entrarmos em contato.');
    }
  }
});

