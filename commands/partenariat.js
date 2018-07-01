const Discord = require('discord.js');
exports.run = function(client, message, args) {

  const msg = new Discord.RichEmbed()

    .setColor("RANDOM")
    .setTitle("Liste des Discord partenaire :")
    .addField("L'Auberge", "<:IZBPlauberge:463002259933102081>  https://discord.gg/Xd2bZXk")
    .addField("L'igloo", "<:IZBdiscord:459689810668552204>  https://discord.gg/Zk2ezKC")





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
  usage: 'partenariat',
  aliase: ['pt']
};
