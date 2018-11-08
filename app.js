'use strict';

const Telegram = require('telegram-node-bot');
const TextCommand = Telegram.TextCommand;
const chatbot = new Telegram.Telegram('seu-token');
const EventsController = require('./EventsController');

chatbot.router
    .when( new TextCommand('/whats', 'whats'), new EventsController())
    .when( new TextCommand('/github', 'github'), new EventsController())
    .when( new TextCommand('/facebook', 'facebook'), new EventsController())
    .when( new TextCommand('/listar', 'listar'), new EventsController())
    .when( new TextCommand('/groovy', 'groovy'), new EventsController());