const Discord = require('discord.js');
exports.run = (client, message, args) => {




  const helpsupport = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setTimestamp()
  .setTitle("Page d'aide :")
  .addField("Utilisation", "`.support <message>`")
  .setDescription(":warning: Tout abus sera suivi d'un sanction ! :warning: ")

    message.channel.send(helpsupport)





};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'hsupport',
  description: 'null',
  usage: 'hsupport'
};
