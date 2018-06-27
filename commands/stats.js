const Discord = require('discord.js');
const settings = require('../settings.json');
exports.run = function(client, message, args) {

  const msg = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle(`Stats d'InsinityZ'Bot`)
    .setThumbnail(client.avatarURL)
    .addField('Users ',`${client.users.size}`, true)
    .addField('Servers ',`${client.guilds.size}`, true)
    .addField('Channels',`${client.channels.size}`, true)
    .addField('Library ',`Discord.js`, true)
    .addField('Owner ',`InsinityZ#0018`, true)
    .addField('Officiel server ','`.discord`')
    .addField('Memory ',`20MB/500MB`)
    .setTimestamp()
    message.channel.send(msg)

}

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };

  exports.help = {
    name: 'stats',
    description: 'Affiche les stats du bot ',
    usage: 'stats'
  }
