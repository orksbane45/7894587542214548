const settings = require('../settings.json');
const Discord = require('discord.js');
const mysql = require('mysql');
const chalk = require('chalk');
const moment = require('moment');

function ifdaily (daily) {
  var d2 = Date.now();
  console.log(`Daily = ${daily}`);
  console.log(`d2 = ${d2}`);
  console.log(chalk.inverse(Number(daily) + 86400000));
  if ((Number(daily) + 86400000 ) < Number(d2)) {
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
  mySqlClient.connect();
  mySqlClient.query(`SELECT * FROM user WHERE userid=${message.author.id}`, function (error, results, fields){
    if (results.length > 0) {
     
      var daily = results[0].daily;
      var test = ifdaily(daily); 
      console.log(test);
      if (test == true) {
        var izcoins4 = results[0].izcoins + 200;
        var sql2 = `UPDATE user SET izcoins = '${izcoins4}' WHERE userid = '${results[0].userid}'`;
        mySqlClient.query(sql2 , function (err, result) {
          if (error) throw error;
          message.channel.send('<:IZBmoney2:459689993409921024> l\'argent a bien ete credité sur votre compte vous avez recu **200** IZcoins');
      });
    }else{
	message.channel.send(`:clock11: Tu as déjà récupéré ton daily, reviens dans ${daily + 24*60*60*1000 - Date.now()}`)
    }

      console.log(results[0].userid);
    }else {
      console.log(chalk.black.bgRed("TA MERE T INEXISTANT PD !"));
      var n = Date.now();
      console.log(n);
     // var values = [message.author.id, 200, n];
      var sql1 = `INSERT INTO user (userid, izcoins, daily) VALUES ('${message.author.id}', '200', '${Date.now()}')`;
      mySqlClient.query(sql1 , function (err, result) {
        if (error) console.log(error);
        console.log(chalk.black.bgGreen("cc toi !"));
        message.channel.send('<a:IZBGizcoins:459689794675540009>  l\'argent a bien ete credité sur votre compte vous avez recu **200** IZcoins');
        console.log(result);
        
      });
    };
  });
  
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'daily',
  description: 'null',
  usage: 'daily',
  aliase: ['aucun']
};
