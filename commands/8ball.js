exports.run = function(client, message, args) {
  let nb = Math.floor((Math.random() * 6) + 1);

  if (nb == 1) {
    message.channel.sendMessage(':8ball: La réponse est : jamais');
  }
    if (nb == 2) {
      message.channel.sendMessage(':8ball: La réponse est : surement');
    }
      if (nb == 3) {
    message.channel.sendMessage(':8ball: La réponse est : peut-être');
    }
    if (nb == 4) {
      message.channel.sendMessage(':8ball: La réponse est : oui');
    }
    if (nb == 5) {
      message.channel.sendMessage(':8ball: La réponse est : non');
    }
    if (nb == 6)  {
      message.channel.sendMessage(':8ball: La réponse est : de loin');
  }
}

    exports.conf = {
      enabled: true,
      guildOnly: false,
      aliases: [],
      permLevel: 0
    };

    exports.help = {
      name: '8ball',
      description: 'Répond a votre question !',
      usage: '8ball'
    }
