exports.run = function(client, message, args) {
  let nb = Math.floor((Math.random() * 10) + 1);
    if (nb == 1) {
      message.channel.sendMessage('1');
    }
      if (nb == 2) {
        message.channel.sendMessage('2');
      }
        if (nb == 3) {
      message.channel.sendMessage('3');
      }
      if (nb == 4) {
        message.channel.sendMessage('4');
      }
      if (nb == 5) {
        message.channel.sendMessage('5');
      }
      if (nb == 6) {
        message.channel.sendMessage('6');
      }
      if (nb == 7) {
        message.channel.sendMessage('7');
      }
      if (nb == 8) {
        message.channel.sendMessage('8');
      }
      if (nb == 9) {
        message.channel.sendMessage('9');
      }
      if (nb == 10) {
        message.channel.sendMessage('10');
      }

}

      exports.conf = {
        enabled: true,
        guildOnly: false,
        aliases: [],
        permLevel: 0
      };

      exports.help = {
        name: 'roll',
        description: 'Vous donne un chiffre entre 1 et 10 !',
        usage: 'roll'
      }
