const Discord = require('discord.js');
exports.run = function(client, message, args) {

  const msg = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle(`Profile de ** ${message.author.username} **`)
    .setThumbnail(`${message.author.avatarURL}`)
    .addField('Pseudo', `${message.author.username}`)
    .addField('Création du compte' , `${message.author.createdAt}`)
    .addField('Status', `${message.author.presence.status}`)
    .addField('ID', `${message.author.id}`)
    .setTimestamp()
    message.channel.send(msg)

}

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };

  exports.help = {
    name: 'profile',
    description: 'Affiche votre profile',
    usage: 'profile'
  }
