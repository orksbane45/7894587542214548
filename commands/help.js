const settings = require('../settings.json');
const Discord = require("discord.js");

exports.run = (client, message, params) => {
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);

  const msg = new Discord.RichEmbed()

  .setColor('RANDOM')
  .setAuthor('Liste des commandes :')
  .addField(':rotating_light: Administrations', '`.reload`, `.purge`, `.warn`, `.mute`, `.say`, `.sayimg`, `.kick`, `.ban`,`.vote`')
  .addField('<:IZBgames:453594840374968350>  Fun', '`.roll`, `.master`, `.8ball`, `.hug`, `.kiss`, `.cat`, `.hack`')
  .addField('<:IZBinfo:453594898625593344> Infos',' `.stats`, `.invite`,`.site`, `.discord`, `.ping`, `.help`, `.profile`, `.google`, `.avatar`')
  .addField('<:IZBsupport:453595116297519125> Supports', '`.hsupport`, `.support`')
  .setDescription("Utilisez `.help <commandes> pour plus d'informations !`")
  .setTimestamp()

              message.channel.send(msg);

  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);

      const msg2 = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setTitle(`**Commande :** ${command.help.name}`)
      .setDescription(`Description : ${command.help.description}\nUsage : ${command.help.usage}`)
  message.channel.send(msg2)
    }
      
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp'],
  permLevel: 0
};

exports.help = {
  name: 'help',
  description: 'Liste des commandes du bot !',
  usage: 'help [command]'
};
