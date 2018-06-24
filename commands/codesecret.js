const settings = require('../settings.json');
const Discord = require('discord.js');
exports.run = (client, message, args, user, command) => {




if (args !== "14589724587854784587") return message.reply(`perdu !\n**${args.join(" ")}** n'est pas le bon nombre !`)
if (args === "14589724587854784587") return message.reply(`Bravo !\n**${args.join(" ")}** était le codesecret !`)







};

exports.conf = {
enabled: true,
guildOnly: false,
aliases: ['cs'],
permLevel: 0
};

exports.help = {
name: 'codesecret',
description: 'Vous dits si vous étez le maître du bot !',
usage: 'master'
};
