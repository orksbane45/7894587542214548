const settings = require('../settings.json');
const Discord = require('discord.js');
exports.run = (client, message, args, user, command) => {


const help = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('CodeSecret')
.setDescription(`La commande **${command.help.name}** est un genre de Easter Egg !\nEn effet, pour gagner il vous faudras trouver le juste prix !\n\n__Utilisation__ : .codesecret/.cs {nombre}`)


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
