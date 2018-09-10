const Discord = require('discord.js');
const mysql = require('mysql');
exports.run = function(client, message, args) {
  let day = message.guild.joinedAt.getDate()
  let month = 1 + message.guild.joinedAt.getMonth()
  let year = message.guild.joinedAt.getFullYear()
  let hour = message.guild.joinedAt.getHours()
  let min = message.guild.joinedAt.getMinutes()
  let days = message.author.createdAt.getDate()
  let months = 1 + message.author.createdAt.getMonth()
  let years = message.author.createdAt.getFullYear()
  let hours = message.author.createdAt.getHours()
  let mins = message.author.createdAt.getMinutes()

  var mySqlClient = mysql.createConnection({
    host: "localhost",
    user: "tsuki",
    password: "tsuki",
    database: "insinityz"
  });
  mySqlClient.connect();
  mySqlClient.query(`SELECT * FROM user WHERE userid=${message.author.id}`, function (error, results, fields){
  var izcoins4 = results[0].izcoins;
    const msg = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setTitle(`Profile de **${message.author.username}**`)
      .setThumbnail(`${message.author.avatarURL}`)
      .addField('Pseudo', `${message.author.username}`)
      .addField('Création du compte' , `${days}/${months}/${years} à ${hours}:${mins}`)
      .addField("Date d'arrivée", `${day}/${month}/${year} à ${hour}:${min}`)
      .addField('Jeux', `${message.author.presence.status}`)
      .addField('<a:IZBGizcoins:459689794675540009> IZcoins', izcoins4, true)
      .setTimestamp()
    message.channel.send(msg)
  });
}

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };

  exports.help = {
    name: 'profile',
    description: 'Affiche votre profile',
    usage: 'profile'
  }
