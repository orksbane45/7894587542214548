const Discord = require('discord.js');
exports.run = function(client, message, args) {

  const msg = new Discord.RichEmbed()

  .setColor('RANDOM')
  .setAuthor('Liste des commandes :')
  .addField(':rotating_light: Administrations', '`.reload`, `.purge`, `.warn`, `.mute`, `.say`, `.sayimg`, `.kick`, `.ban`,`.vote`')
  .addField('<:IZBgames:453594840374968350>  Fun', '`.roll`, `.master`, `.8ball`, `.hug`, `.kiss`, `.cat`, `.hack`')
  .addField('<:IZBinfo:453594898625593344> Infos',' `.stats`, `.invite`,`.site`, `.discord`, `.ping`, `.help`, `.profile`, `.google`, `.avatar`')
  .addField('<:IZBsupport:453595116297519125> Supports', '`.hsupport`, `.support`')
 
  .setTimestamp()

              message.channel.send(msg)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp'],
  permLevel: 0
};

exports.help = {
  name: 'help',
  description: 'Liste des commandes du bot !',
  usage: 'help [command]'
};
