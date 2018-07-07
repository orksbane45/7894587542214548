const settings = require('../settings.json');
const Discord = require("discord.js");

exports.run = (client, message, params) => {
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);

  const msg = new Discord.RichEmbed()

  .setColor('RANDOM')
  .setAuthor('Liste des commandes :')
  .addField('<:IZBadmin:460849349019303936> Owner', '`.reload`,`.test`,`.adminsay`')
  .addField(':rotating_light: Administrations', '`.purge`, `.mute`, `.blacklist`, `.sayimg`, `.kick`, `.ban`,`.vote`')
  .addField('<:IZBgames:459689915039612928> Fun', '`.roll`, `.master`, `.rps`,`.8ball`, `.hug`, `.kiss`, `.cat`, `.hack`, `.codesecret`,`.say`')
  .addField('<:IZBinfo:459689946513408000> Infos',' `.stats`, `.invite`, `.site`, `.discord`, `.ping`, `.help`, `.profile`, `.google`, `.avatar`, `.partenariat`')
  .addField('<:IZBsupport:459690005246377995> Supports', '`.hsupport`, `.support`')
  .addField(':IZBdev: <:IZBdev:465212359883882508> Commandes en DEV','`.daily`, `.serveurinfo`')
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
      .setDescription(`**Description :** ${command.help.description}\n**Usage :** ${command.help.usage}\n**Aliases :** ${command.help.aliase}`)
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
  usage: 'help [command]',
  aliase: ['h , halp']
};
