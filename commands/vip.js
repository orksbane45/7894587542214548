const Discord = require('discord.js');
const settings = require('../settings.json');
exports.run = function(client, message, args) {

let vipemebed = new Discord.RichEmbed()
.setColor('RANDOM')
.addField("Tu veut être VIP ?","paypal.me/InsinityZ")
.setDescription("prochaine MAJ")
 
  
  
  
 message.channel.send(vipembed);
   
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'vip',
  description: 'vip sur le bot',
  usage: 'vip'
};
