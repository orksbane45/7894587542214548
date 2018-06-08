const Discord = require('discord.js');
exports.run = function(client, message, args) {

  const embed = new Discord.RichEmbed()

  .addField("Site du BOT (Beta) ", "https://dclpinsinityzclan.wixsite.com/insinityzbot")
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
  name: 'site',
  description: 'site du bot',
  usage: 'site'
};
