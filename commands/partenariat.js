const Discord = require('discord.js');
exports.run = function(client, message, args) {

  const msg = new Discord.RichEmbed()

    .setColor("RANDOM")
    .setTitle("Liste des Discord partenaire :")
    .addField(" La Meute", "<:IZBlameute:453599845609898024> https://discord.gg/jMrtt6k")
    .addField(" L'iglou", "<:IZBliglou:453637824365723666> https://discord.gg/Zk2ezKC")





    message.channel.send(msg)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['pt'],
  permLevel: 0
};

exports.help = {
  name: 'partenariat',
  description: 'null',
  usage: 'partenariat'
};
