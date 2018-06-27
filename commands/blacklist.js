const Discord = require('discord.js');
const fs = require('fs');
exports.run = function(client, message, args) {
  let command = ["all","discord", "avatar", "help", "invite","reload","ping","purge","warn","mute","stats","say","asay","sayimg","kick","ban","vote","roll","master","8ball","hug","kiss","cat","hack","codesecret","site","profile","google","partenariat","hsupport","support"];
  if (message.member.hasPermission('MANAGE_MESSAGES') || message.member.hasPermission('ADMINISTRATOR') || message.author.id == 327176843709120512) {
    let rawdata = fs.readFileSync('blacklist.json', 'utf8');
    let blackList = JSON.parse(rawdata);
    if (args[0] && args[0] == "list") {
      if (blackList[""+message.channel.id+""] && blackList[""+message.channel.id+""].length >= 1) {
        let blcmd = "";
        for (var i = 0; i < blackList[""+message.channel.id+""].length; i++) {
          blcmd = blcmd + " ``"+blackList[""+message.channel.id+""][i]+"`` ";
        }
        console.log(blackList[""+message.channel.id+""]);
        message.channel.send(`** <:IZBadmin:460849349019303936> Liste des commandes blackList sur le channel <#${message.channel.id}> :** \n\n${blcmd}`);
      }else{
        message.channel.send(`<:IZBadmin:460849349019303936> Aucune commande blackList sur le channel <#${message.channel.id}>`)
      }
    }else if (command.filter(s => s.includes(args[0])) == args[0]) {
      if (blackList[""+message.channel.id+""]) {
        if (blackList[""+message.channel.id+""].filter(s => s.includes(args[0])) == args[0]) {
          message.channel.send('<:IZBadmin:460849349019303936> Commande ``'+args[0]+'`` unblacklisted');
          function remove(arr, what) {
            if (blackList[""+message.channel.id+""].length == 0) {
              delete blackList[""+message.channel.id+""];
            }else{
              var found = arr.indexOf(what);
 
              while (found !== -1) {
                  arr.splice(found, 1);
                  found = arr.indexOf(what);
              }
            }
          }
          remove(blackList[""+message.channel.id+""],args[0])
        }else{
          message.channel.send('<:IZBadmin:460849349019303936> Commande ``'+args[0]+'`` blacklisted ')
          blackList[""+message.channel.id+""].push(args[0]);
        }
      }else{
          blackList[""+message.channel.id+""] = [];
          blackList[""+message.channel.id+""].push(args[0]);
          message.channel.send('<:IZBadmin:460849349019303936> Commande ``'+args[0]+'`` blacklisted ')
 
      }
      var json = JSON.stringify(blackList);
      fs.writeFileSync('blacklist.json', json, 'utf8');
    }else if (args[0]) {
      message.channel.send('<:IZBadmin:460849349019303936> Commande : ``' +args[0]+ '`` inexistante !')
    }else{
      message.channel.send('Utilisation : `.bl {commande}` / `.bl list`')
    }
  }else {
    message.channel.send('<:IZBadmin:460849349019303936> Permisions insufisantes ! <:IZBadmin:460849349019303936>')
  }
}
 
exports.conf = {
enabled: true,
guildOnly: false,
aliases: ["bl"],
permLevel: 0
};
 
exports.help = {
name: 'blacklist',
description: 'Met à jour la blacklist des commandes dans le channel',
usage: 'blacklist',
aliase: ['bl']
};
