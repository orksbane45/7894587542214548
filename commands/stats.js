const Discord = require('discord.js');
const settings = require('../settings.json');
exports.run = function(client, message, args) {

  const msg = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle(`Stats d'InsinityZ'Bot`)
    .setThumbnail("https://discordapp.com/channels/441682455691264000/442029592098635784")
    .addField('Utilisateurs ',`${client.users.size}`, true)
    .addField('Serveurs ',`${client.guilds.size}`, true)
    .addField('Channels',`${client.channels.size}`, true)
   
    .addField('Créateur ',`InsinityZ#0018`, true)
    .addField('Officiel server ','`.discord`')
    .addField('Stockage ',`18.1MB/500MB`)
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
