  const settings = require('../settings.json');
  exports.run = (client, message) => {
  
  if (message.author.id === settings.ownerid) return message.reply("Tu est mon maître !")
  if (message.author.id === settings.happy) return message.reply("Je parle pas au pd !")
  if (message.author.id === settings.g8go) return message.reply("Tu est mon second maître !")
       message.channel.send("Tu n'est pas mon maître")                       
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'master',
  description: 'Vous dits si vous étez le maître du bot !',
  usage: 'master'
};
