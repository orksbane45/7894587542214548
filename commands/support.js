const Discord = require('discord.js');
exports.run = (client, message, args) => {

  let user = message.mentions.users.first();
  let support = client.channels.find('name', 'support');
  if (!support) return message.reply('Je ne trouve pas de channel "support" ');
  let msupport = message.content.split(" ").slice(1);
  
 const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setTitle(`${message.author.username}`)
  .setDescription(msupport.join(" "))
  .setTimestamp()

  client.channels.get(support.id).sendEmbed(embed);

  message.react('✅')
};

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };

  exports.help = {
    name: 'support',
    description: 'null',
    usage: 'support <message>'
  }
