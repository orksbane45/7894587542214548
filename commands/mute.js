const Discord = require('discord.js');
exports.run = (client, message, args) => {
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', 'mod-log');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if (!modlog) return message.reply('Je ne trouve pas de channel "mod-log" ');
  if (!muteRole) return message.reply('Je ne trouve pas de role "Muted" ');
  if (reason.length < 1) return message.reply('Vous devez mettre une raison pour mute !');
  if (message.mentions.users.sizeS < 1) return message.reply("vous devez mentionner quelqu'un pour le mute").catch(console.error);
        const embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setTimestamp()
      .addField('Action:', 'Un/Mute')
      .addField('User:', `${user.username}#${user.discriminator}`)
      .addField('Moderator:', `${message.author.username}#${message.author.discriminator}`);

      if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.replay("Je n'ai pas les bonnes permissions").catch(console.error);




 message.guild.member(user).addRole(muteRole).then(()=> {
 client.channels.get(modlog.id).sendEmbed(embed).catch(console.error);
   
            message.channel.sendMessage(`${user.username} est maintenant mute !`)
    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'mute',
  description: 'Mute ou unmute un utilisateur !',
  usage: 'un/mute [mention]'
};
