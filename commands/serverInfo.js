const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let sicon = message.guild.iconURL;
    
  let day = message.guild.createdAt.getDate()
  let month = 1 + message.guild.createdAt.getMonth()
  let year = message.guild.createdAt.getFullYear()
  let hour = message.guild.createdAt.getHours()
  let min = message.guild.createdAt.getMinutes()
  let days = message.author.createdAt.getDate()
  let months = 1 + message.author.createdAt.getMonth()
  let years = message.author.createdAt.getFullYear()
  let hours = message.author.createdAt.getHours()
  let mins = message.author.createdAt.getMinutes()
  
    let serverembed = new Discord.RichEmbed()
    
    .setColor("RANDOM")
    .setThumbnail(sicon)
    .addField("Nom du serveur", message.guild.name)
    .addField("ID du serveur", message.guild.id)
    .addField("Date de création du serveur", `${day}/${month}/${year} à ${hour}:${min}`)
    .addField("Membres", message.guild.memberCount)
    .addField('channels' , message.guild.channel.size)
    .addField("Fondateur", message.guild.owner)
    .addField("Rôles", message.guild.roles.size)
    .addField("Emojis", message.guild.emojis.size)
    .addField("Régions du serveur", message.guild.region)

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
