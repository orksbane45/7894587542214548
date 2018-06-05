const Discord = require('discord.js');
exports.run = (client, message, args) => {

 if(message.content.startsWith('.sayimg ')) {

    let args = message.content.split(" ").slice(1);
    message.delete()
    var embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setImage(args.join(" "))
    message.channel.send(embed)

    }
};
    exports.conf = {
      enabled: true,
      guildOnly: false,
      aliases: [],
      permLevel: 4
    };

    exports.help = {
      name: 'sayimg',
      description: 'Le bot redit ce que vous ditez !',
      usage: 'sayimg [message]'
    }
