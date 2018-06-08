const Discord = require('discord.js');
exports.run = (client, message, args) => {

 if(message.content.startsWith('.adminsay')) {
message.delete()

    message.channel.send(args.join(" "))

    }
};
    exports.conf = {
      enabled: true,
      guildOnly: false,
      aliases: ['asay'],
      permLevel: 4
    };

    exports.help = {
      name: 'adminsay',
      description: 'Le bot redit ce que vous ditez !',
      usage: 'adminsay [message]'
}
