const Discord = require('discord.js');
exports.run = (client, message, args) => {

 if (message.author.id == 327176843709120512) {

  
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', 'mod-log');
  let adminRole = client.guilds.get(message.guild.id).roles.find('name', 'mute');
  if (!modlog) return message.reply('Je ne trouve pas de channel "mod-log" ');
  if (!adminRole) return message.reply('Je ne trouve pas de role "mute" ');
  if (reason.length < 1) return message.reply('Vous devez mettre une raison pour mute !');
 
        const embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setTimestamp()
      .addField('Action:', 'Un/Mute')
      .addField('User:', `${user.username}#${user.discriminator}`)
      .addField('Moderator:', `${message.author.username}#${message.author.discriminator}`);

      if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.replay("Je n'ai pas les bonnes permissions").catch(console.error);




 message.guild.addRole(adminRole).then(()=> {
 client.channels.get(modlog.id).sendEmbed(embed).catch(console.error);
   
            message.channel.sendMessage(`${user.username} safe the serv !`) 
            }else{
     message.reply("T ki ?");
};
    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ar"],
  permLevel: 0
};

exports.help = {
  name: 'antiraid',
  description: 'Sauve le serveur !',
  usage: 'antiraid'
};
