const Discord = require('discord.js');
exports.run = (client, message, args) => {
  let user = message.mentions.users.first();
    if (message.mentions.users.size < 1) return message.reply("vous devez mentionner quelqu'un pour voir son avatar").catch(console.error);

      const avatar = new Discord.RichEmbed()

      .setColor('RANDOM')
      .setTitle(`Avatar de ${user.username}`, `${user.avatarURL}`)
      .setImage(`${user.avatarURL}`)
      .addField('<:IZBdiscord:453594581494398976> Lien :',`${user.avatarURL}`)
      .setTimestamp()

      message.channel.send(avatar)
    };

    exports.conf = {
      enabled: true,
      guildOnly: false,
      aliases: ['pp', 'pdp'],
      permLevel: 0
    };

    exports.help = {
      name: 'avatar',
      description: 'null',
      usage: 'avatar [mention]'
    };
