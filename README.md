<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BOT-Telegram</title>
</head>
<body>
    <h1># BOT-Telegram</h1>
    <p>Meu primeiro BOT do aplicativo Telegram.</p>
    <h2>Como funciona:</h2>
    <p>Enviando uma mensagem em horário comercial, O BOT responde às mensagens recebidas durante o horário comercial (09:00 às 18:00) com um link para o site disponível.</p>
    <p>Se não for horário Comercial, o BOT solicita o e-mail do usuário para que a empresa possa entrar em contato.</p>
    <p>Após os e-mails são armazenados em um banco de dados SQLite usando o ORM Prisma.</p>
    <h3>Dependências</h3>
    <ul>
        <li>node-telegram-bot-api: Biblioteca para interagir com a API do Telegram.</li>
        <li>@prisma/client: Cliente Prisma para acesso ao banco de dados.</li>
        <li>sqlite3: Driver SQLite para Node.js.</li>
    </ul>
    <h3>Autor</h3>
    <p>Kamila Galande</p>
</body>
</html>
