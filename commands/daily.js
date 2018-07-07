const settings = require('../settings.json');
const Discord = require('discord.js');
exports.run = (client, message, args, user, command) => {

message.reply("Commandes encore en DEV.");


};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'daily',
  description: 'null',
  usage: 'daily',
  aliase: ['aucun']
};
