const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (client, message, args) => {

  if(!message.member.hasPermission("MANAGE_SERVER")) return message.reply("La permission `MANAGE_SERVER` est requise pour cette commande !");
  

  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

  prefixes[message.guild.id] = {
    prefixes: args[0]
  };

  fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
    if (err) console.log(err)
  });

  let sEmbed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setTitle("Le prefix a bien étè modifié !")
  .setDescription(`Nouveau prefix : ${args[0]}`);

  message.channel.send(sEmbed);

}

 exports.conf = {
        enabled: true,
        guildOnly: false,
        aliases: [],
        permLevel: 0
      };

      exports.help = {
        name: 'prefix',
        description: 'Change le prefix sur le serveur !',
        usage: 'prefix <prefix>'
      }
