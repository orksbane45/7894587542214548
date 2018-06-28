const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    
    .setColor("RANDOM")
    .setThumbnail(sicon)
    .addField("Nom du serveur", message.guild.name)
    .addField("Date de création du serveur", message.guild.createdAt)
    .addField("Date d'arrivé", message.member.joinedAt)
    .addField("Membres", message.guild.memberCount);

    message.channel.send(serverembed);
}

 exports.conf = {
        enabled: true,
        guildOnly: false,
        aliases: ["si"],
        permLevel: 0
      };

      exports.help = {
        name: 'serveurinfo',
        description: 'Affiche les informations du serveurs !',
        usage: 'serveurinfo',
        aliase: ["si"]
      }
