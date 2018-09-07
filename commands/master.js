  const settings = require('../settings.json');
  exports.run = (client, message) => {
  
  if (message.author.id === settings.ownerid) return message.reply("Tu est mon maître !")
  if (message.author.id === settings.g8go) return message.reply("Tu est mon second maître !")
  if (message.author.id === "353884181539061764") return message.reply("non tu est juste gay ! :joy: ")
   if (message.author.id === "486922176503480320") return message.reply("Oh ! Mon dieux, tu est l'élu")
    if (message.author.id === "312163272642265089") return message.reply(":cat: Azumie le pain de mie")
    
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
