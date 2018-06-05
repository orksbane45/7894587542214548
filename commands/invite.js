const Discord = require('discord.js');

exports.run = (client, message) => {
  
  var InviteEmbed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .addField("<:discord:447422178791522315> Lien d'invitation du bot !",'https://discordapp.com/oauth2/authorize?client_id=436596522117890058&scope=bot&permissions=2146958591')

  message.channel.send(InviteEmbed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'invite',
  description: 'Invitez le bot sur votre discord !',
  usage: 'invite'
};
