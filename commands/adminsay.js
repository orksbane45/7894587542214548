const Discord = require('discord.js');
exports.run = (client, message, args) => {
if (message.author.id == 327176843709120512) {
message.delete()

    message.channel.send(args.join(" "))

}else{
    message.reply("Tu n'as pas les bonnes permissions pour utlisez cette commande !");
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
      usage: 'adminsay <message>',
      aliase: ['asay']
}
