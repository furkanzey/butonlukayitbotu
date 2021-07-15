const Discord = require("discord.js");
const bot = new Discord.Client();
const moment = require('moment');
const client = new Discord.Client();
const ayarlar = ('ayarlar.json');
require('moment-duration-format');

bot.login(ayarlar.token); 