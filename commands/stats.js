const Discord = require('discord.js');
const settings = require('../settings.json');
exports.run = function(client, message, args) {
  var distance = client.uptime;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  uptime = days + "d" + hours + "h" + minutes + "m" + seconds + "s";

  const msg = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle(`Stats d'InsinityZ'Bot`)
    .setThumbnail(client.avatarURL)
    .addField('Utilisateurs ',`${client.users.size}`, true)
    .addField('Serveurs ',`${client.guilds.size}`, true)
    .addField('Channels',`${client.channels.size}`, true)
    .addField('Status des membres', `**${message.guild.members.filter(o => o.presence.status === 'online').size}** En ligne\n**${message.guild.members.filter(i => i.presence.status === 'idle').size}** Inactif\n**${message.guild.members.filter(dnd => dnd.presence.status === 'dnd').size}** Ne pas déranger\n**${message.guild.members.filter(off => off.presence.status === 'offline').size}** Déconnecté/Invisible\n**${message.guild.members.filter(s => s.presence.status === 'streaming').size}** Streaming`)
    .addField('Uptime', uptime , true)
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
