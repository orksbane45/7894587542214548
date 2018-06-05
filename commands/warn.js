const Discord = require('discord.js');
exports.run = (client, message, args) => {
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', 'mod-log');
  if (!modlog) return message.reply('Je ne trouve pas de channel "mod-log" ');
  if (reason.length < 1) return message.reply('Vous devez mettre une raison pour warn !');
  if (message.mentions.users.size < 1) return message.reply("vous devez mentionner quelqu'un pour le warn").catch(console.error);
        const embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setTimestamp()
      .addField('Action:', 'Warning')
      .addField('User:', `${user.username}#${user.discriminator}`)
      .addField('Moderator:', `${message.author.username}#${message.author.discriminator}`);
      return client.channels.get(modlog.id).sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'warn',
  description: 'Donne un avertissement !',
  usage: 'warn [mention]'
};
