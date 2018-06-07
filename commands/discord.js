const Discord = require('discord.js');
exports.run = function(client, message, args) {

  const embed = new Discord.RichEmbed()

  .addField("Discord officiel", "<:IZBdiscord:453594581494398976> https://discord.gg/82DaHX8")
  .addField("La Meute","<:IZBlameute:453599845609898024> https://discord.gg/jMrtt6k")
  .setColor('RANDOM')
  .setTimestamp()

  message.channel.sendEmbed(embed)


};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'discord',
  description: 'Rejoignez le discord officiel du bot !',
  usage: 'discord'
};
