const Discord = require('discord.js');
exports.run = (client, message, args) => {

 if(message.content.startsWith('.google ')) {

    let args = message.content.split(" ").slice(1);
  
    var embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription('https://www.google.fr/#q=' + args.join('+'))
    message.channel.send(embed)

    }
};
    exports.conf = {
      enabled: true,
      guildOnly: false,
      aliases: [],
      permLevel: 0
    };

    exports.help = {
      name: 'google',
      description: 'null',
      usage: 'google [votre recherche]'
    }
