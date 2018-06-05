exports.run = (client, message) => {
  message.channel.sendMessage('Start ...')
    .then(msg => {

      msg.edit("Acces granted ! ...");

      msg.edit("<:ping3:441965765445419018> Crashed ");

      msg.edit("Reloading ░░░░░░░░░░");

      msg.edit("Reloading ▓░░░░░░░░░");

      msg.edit("Reloading ██▓░░░░░░░");

      msg.edit("Reloading █████▓░░░░");

      msg.edit("Reloading ███████▓░░");

      msg.edit("Reloading ██████████");

      msg.edit("Reload completed !");

      msg.edit(`${message.author.username}, You are hacked NASA !`);




    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'hack',
  description: 'null',
  usage: 'hack'
};
