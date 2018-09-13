const Discord = require('discord.js');
const settings = require('../settings.json');
exports.run = function(client, message, args) {

let vip = new Discord.RichEmbed()
.setColor('RANDOM')
.addField("Tu veut être VIP ?","paypal.me/InsinityZ")
.setDescription("prochaine MAJ")
 
  
  
  
 message.channel.send(vip);
   
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
