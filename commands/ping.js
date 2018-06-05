exports.run = (client, message) => {
  message.channel.sendMessage('Ping?')
    .then(msg => {


        if (msg.createdTimestamp - message.createdTimestamp < 200)
      msg.edit('Pong! ( <:IZBgoodping:453594990304821278> : ' + (msg.createdTimestamp - message.createdTimestamp) + 'ms)');

  if (msg.createdTimestamp - message.createdTimestamp >= 200)
      msg.edit('Pong! ( <:IZBbadping:453594938236469248> : ' + (msg.createdTimestamp - message.createdTimestamp) + 'ms)');


    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Affiche le ping du bot !',
  usage: 'ping'
};
