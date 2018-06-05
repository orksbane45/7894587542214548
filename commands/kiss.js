const Discord = require('discord.js');
exports.run = (client, message, args) => {
  let user = message.mentions.users.first();
  let nb = Math.floor((Math.random() * 9) + 1);
  if (message.mentions.users.size < 1) return message.reply("vous devez mentionner quelqu'un pour le kiss.").catch(console.error);
    if (nb == 1) {
   msg = new Discord.RichEmbed()
    .setTitle(`<:bisou:442299114651254784> ${user.username}, vous avez reçu un bisou de ${message.author.username}`)
    .setColor('RANDOM')
    .setImage('https://cdn.discordapp.com/attachments/442295195585871903/442295331758276609/kiss1.gif')
    message.channel.send(msg)
  }
  if (nb == 2) {
  msg = new Discord.RichEmbed()
    .setTitle(`<:bisou:442299114651254784> ${user.username}, vous avez reçu un bisou de ${message.author.username}`)
    .setColor('RANDOM')
    .setImage('https://cdn.discordapp.com/attachments/442295195585871903/442295649883521044/kiss8.gif')
    message.channel.send(msg)
  }
  if (nb == 3) {
  msg = new Discord.RichEmbed()
    .setTitle(`<:bisou:442299114651254784> ${user.username}, vous avez reçu un bisou de ${message.author.username}`)
    .setColor('RANDOM')
    .setImage('https://cdn.discordapp.com/attachments/442295195585871903/442295670884401172/kiss2.gif')
    message.channel.send(msg)
  }
  if (nb == 4) {
  msg = new Discord.RichEmbed()
    .setTitle(`<:bisou:442299114651254784> ${user.username}, vous avez reçu un bisou de ${message.author.username}`)
    .setColor('RANDOM')
    .setImage('https://cdn.discordapp.com/attachments/442295195585871903/442295683920166913/kiss3.gif')
    message.channel.send(msg)
  }
  if (nb == 5) {
  msg = new Discord.RichEmbed()
    .setTitle(`<:bisou:442299114651254784> ${user.username}, vous avez reçu un bisou de ${message.author.username}`)
    .setColor('RANDOM')
    .setImage('https://cdn.discordapp.com/attachments/442295195585871903/442295684121755649/kiss5.gif')
    message.channel.send(msg)
  }
  if (nb == 6) {
  msg = new Discord.RichEmbed()
    .setTitle(`<:bisou:442299114651254784> ${user.username}, vous avez reçu un bisou de ${message.author.username}`)
    .setColor('RANDOM')
    .setImage('https://cdn.discordapp.com/attachments/442295195585871903/442295688265465866/kiss4.gif')
    message.channel.send(msg)
  }
  if (nb == 7) {
  msg = new Discord.RichEmbed()
    .setTitle(`<:bisou:442299114651254784> ${user.username}, vous avez reçu un bisou de ${message.author.username}`)
    .setColor('RANDOM')
    .setImage('https://cdn.discordapp.com/attachments/442295195585871903/442295692833325067/kiss6.gif')
    message.channel.send(msg)
  }
  if (nb == 8) {
  msg = new Discord.RichEmbed()
    .setTitle(`<:bisou:442299114651254784> ${user.username}, vous avez reçu un bisou de ${message.author.username}`)
    .setColor('RANDOM')
    .setImage('https://cdn.discordapp.com/attachments/442295195585871903/442295748537614336/kiss7.gif')
    message.channel.send(msg)
  }
  if (nb == 9) {
  msg = new Discord.RichEmbed()
    .setTitle(`<:bisou:442299114651254784> ${user.username}, vous avez reçu un bisou de ${message.author.username}`)
    .setColor('RANDOM')
    .setImage('https://cdn.discordapp.com/attachments/442295195585871903/442295725120815104/kiss9.gif')
    message.channel.send(msg)
  }
}
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };

  exports.help = {
    name: 'kiss',
    description: 'Bissou !',
    usage: 'kiss [mention]'
  }
