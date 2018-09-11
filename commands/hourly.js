const settings = require('../settings.json');
const Discord = require('discord.js');
const mysql = require('mysql');
const chalk = require('chalk');
const moment = require('moment');

function ifhourly (hourly) {
  if (hourly == 0) return false;
  var d2 = Date.now();
  console.log(`hourly = ${hourly}`);
  console.log(`d2 = ${d2}`);
  console.log(chalk.inverse(Number(hourly) + 3600000 ));
  if ((Number(hourly) + 3600000 ) < Number(d2)) {
    return true;
  }else {
    return false;
  }
}

exports.run = (client, message, args, user, command) => {
  var mySqlClient = mysql.createConnection({
    host: "localhost",
    user: "tsuki",
    password: "tsuki",
    database: "insinityz"
  });
(modifié)
mySqlClient.connect();
  mySqlClient.query(`SELECT * FROM user WHERE userid=${message.author.id}`, function (error, results, fields){
    if (results.length > 0) {
      var hrrandom = Math.floor((Math.random() * 4) + 1);
      var tab = [0, 10, 15, 20, 25];
      hrrandom = tab[hrrandom];
      if (result[0].hourly == null) var hourly = 0;
      else var hourly = results[0].hourly;
      var test = ifhourly(hourly); 
      console.log(test);
      if (test == true) {
        var izcoins4 = results[0].izcoins + hrrandom;
        var sql2 = `UPDATE user SET izcoins = '${izcoins4}' WHERE userid = '${results[0].userid}'`;
        mySqlClient.query(sql2 , function (err, result) {
          if (error) throw error;
          message.channel.send(`:IZBmoney2: l\'argent a bien ete credité sur votre compte vous avez recu **${hrrandom}** IZcoins`);
        });
      }else{
        message.channel.send(`:clock11: Veuillez attendre encore ${daily + 24*60*60*1000 - Date.now().format('HH:mm:ss'}`)
      }
      console.log(results[0].userid);
    }else {
      console.log(chalk.black.bgRed("TA MERE T INEXISTANT PD !"));
      var n = Date.now();
      console.log(n);  
      var sql1 = `INSERT INTO user (userid, izcoins, hourly) VALUES ('${message.author.id}', '${hrrandom}', '${Date.now()}')`;
      mySqlClient.query(sql1 , function (err, result) {
        if (error) console.log(error);
        console.log(chalk.black.bgGreen("cc toi !"));
        message.channel.send(`:IZBmoney2: l argent a bien ete credité sur votre compte vous avez recu **${hrrandom}** IZcoins`);
        console.log(result);   
      });
    };  
  });
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['hr'],
  permLevel: 0
};

exports.help = {
  name: 'hourly',
  description: 'dispo toute les heures',
  usage: 'hourly',
  aliase: ['hr']
};
