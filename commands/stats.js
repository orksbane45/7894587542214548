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
  .setThumbnail('https://images-ext-1.discordapp.net/external/yBZIxBTRPnQ8_EaNNt7xe7SOkNMCT4ctn8Hz_K_X-mg/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/436596522117890058/0bf84863be053cb63f0cfa27aca46e3b.png?width=663&height=663')
    .setTitle(`Stats d'InsinityZ'Bot`)
    .setThumbnail(client.avatarURL)
    .addField('Utilisateurs ',`${client.users.size}`, true)
    .addField('Serveurs ',`${client.guilds.size}`, true)
    .addField('Channels',`${client.channels.size}`, true)
    .addField('Uptime', uptime , true)
    .addField('Créateur ',`InsinityZ 夏樹#1349`, true)
    .addField('Officiel server ','`.discord`')
    .addField('Vip',"paypal.me/InsinityZ")
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
