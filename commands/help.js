const Discord = require('discord.js');
exports.run = function(client, message, args) {

  const msg = new Discord.RichEmbed()

  .setColor('RANDOM')
  .setAuthor('Liste des commandes :')
  .addField(':rotating_light: Administrations', '`.reload`, `.purge`, `.warn`, `.mute`, `.say`, `.sayimg`, `.kick`, `.ban`')
  .addField('<:games:447422120042168320> Fun', '`.roll`, `.master`, `.8ball`, `.hug`, `.kiss`, `.cat`, `.hack`, `.fortnite`')
  .addField('<:info:447422226787074048> Infos',' `.stats`, `.invite`, `.discord`, `.ping`, `.help`, `.profile`, `.google`, `.avatar`')
  .addField('<:support:444899671555702784> Supports', '`.hsupport`, `.support`')
  .addField('▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬', false)
  .addField(':flag_fr: Attention ','Les commandes `.ban`, `.kick` et `.mute` ne sont pas fini !') 
  .addField(':flag_gb: Warning ','The commands `.ban`, `.kick` and `.mute` are not finished.')
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
