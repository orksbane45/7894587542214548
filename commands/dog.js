const Discord = require('discord.js');
exports.run = function(client, message, args) {
  //let nb = Math.floor((Math.random() * 1) + 1);
 
 let dogimg = ["https://cdn.discordapp.com/attachments/473840206324301825/473840491696226304/n2vw1-3-tSmS1k8.jpg",
               "https://cdn.discordapp.com/attachments/473840206324301825/473840330995793920/ol9ceoqxidudap8owlwn.jpg",
               "https://cdn.discordapp.com/attachments/473840206324301825/473840329032728576/irmaos-caninos-se-amam-muito-e-adoram-ficar-juntinho-um-do-outro-pdd-295x338.jpg",
               "https://cdn.discordapp.com/attachments/473840206324301825/473840328680538131/lgpCD8X4_400x400.jpg",
               "https://cdn.discordapp.com/attachments/473840206324301825/473840328193867777/russiansilver.jpg",
               "https://cdn.discordapp.com/attachments/473840206324301825/473840327359332353/images.jpg",
               "https://cdn.discordapp.com/attachments/473840206324301825/473840327430504448/how-to-pick-the-right-dog-for-yo.jpg",
               "https://cdn.discordapp.com/attachments/473840206324301825/473840309663563776/Boo-Puppie-For-Sale.jpg",
               "https://cdn.discordapp.com/attachments/473840206324301825/473840305712660481/634441-dog-2.jpg",
               "https://cdn.discordapp.com/attachments/473840206324301825/473840303506456607/404-hello-people.jpg",
               "https://cdn.discordapp.com/attachments/473840206324301825/473840302323400721/0sLpdiu1_400x400.jpg"]










 
 //if (nb == 1) {
     msg = new Discord.RichEmbed()
     .setColor('RANDOM')
     .setImage(dogimg)
    message.channel.send(msg);
  //}
 
  };

      exports.conf = {
        enabled: true,
        guildOnly: false,
        aliases: [],
        permLevel: 0
      };

      exports.help = {
        name: 'dog',
        description: 'null',
        usage: 'dog',
        aliase: ['aucun']
      }
