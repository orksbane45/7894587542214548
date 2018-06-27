const Discord = require('discord.js');
exports.run = (client, message, args) => {
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', 'mod-log');
  if (!modlog) return message.reply('Je ne trouve pas de channel "mod-log". ');
  if (reason.length < 1) return message.reply('Vous devez mettre une raison pour ban !');
  if (message.mentions.users.size < 1) return message.reply("vous devez mentionner quelqu'un pour le ban.").catch(console.error);

  if (!message.guild.member(user).bannable) return message.reply("Je ne peut pas ban cet utilisateur.");
  message.guild.ban(user, 2);

  const embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setTimestamp()
      .addField('Action:', 'Ban')
      .addField('User:', `${user.username}#${user.discriminator}`)
      .addField('Moderator:', `${message.author.username}#${message.author.discriminator}`);
      return client.channels.get(modlog.id).sendEmbed(embed);

      message.channel.send(`${user.username} a était ban !`)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'ban',
  description: 'Ban un utilisateur.',
  usage: 'ban [mention]',
  aliase: ['aucun']
};
