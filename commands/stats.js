const Discord = require('discord.js');
const settings = require('../settings.json');
exports.run = function(client, message, args) {

  const msg = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle(`Stats d'InsinityZ'Bot`)
    .setThumbnail('https://cdn.discordapp.com/avatars/436596522117890058/51e0fef1965497bcc45ceeb2c859caaa.png?size=2048')
    .addField('User ',`${client.users.size}`, true)
    .addField('Server ',`46`, true)
    .addField('Library ',`Discord.js`, true)
    .addField('Owner ',`InsinityZ#0018`, true)
    .addField('Officiel server ','`.discord`')
    .addField('Memory ',`19MB/500MB`)
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
