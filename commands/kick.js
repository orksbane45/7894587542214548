const Discord = require('discord.js');
exports.run = (client, message, args) => {
  
  if (message.member.hasPermission('KICK_MEMBERS') || message.member.hasPermission('ADMINISTRATOR') || message.author.id == 327176843709120512) {
  
  
  
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', 'izmod-log');
  if (!modlog) return message.reply('Je ne trouve pas de channel "izmod-log". ');
  if (reason.length < 1) return message.reply('Vous devez mettre une raison pour kick !');
  if (message.mentions.users.size < 1) return message.reply("vous devez mentionner quelqu'un pour le kick.").catch(console.error);

  if (!message.guild.member(user).kickable) return message.reply("Je ne peut pas kick cet utilisateur.");
  message.guild.member(user).kick();

  const embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setTimestamp()
      .addField('Action:', 'Kick')
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
  name: 'kick',
  description: 'Kick un utilisateur.',
  usage: 'kick [mention]'
};
