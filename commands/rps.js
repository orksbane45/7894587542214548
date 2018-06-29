
exports.run = (client, message, args) => {
var choice = args[0];
  if (choice == "papier" || choice == "p") {
    var numb = Math.floor(Math.random() * 100);
    if (numb <= 50) {
      var choice2 = "papier";
    } else if (numb > 50) {
      var choice2 = "pierre";
    } else {
      var choice2 = "ciseaux";
    }
    if (choice2 == "ciseaux") {
      var response = "J'ai choisi **ciseaux** ! :scissors: J'ai gagné !"
    } else if (choice2 == "papier") {
      var response = "J'ai choisi **papier** ! :hand_splayed: Egalité !"
    } else {
      var response = "J'ai choisi **pierre** ! <:IZBpierre:462292033277657109> Tu as gagné !"
    }
    message.channel.send(response);
  } else if (choice == "pierre" || choice == "r") {
    var numb = Math.floor(Math.random() * 100);
    if (numb <= 50) {
      var choice2 = "papier";
    } else if (numb > 50) {
      var choice2 = "pierre";
    } else {
      var choice2 = "ciseaux";
    }
    if (choice2 == "papier") {
      var response = "J'ai choisi **papier** ! :hand_splayed: J'ai gagné !"
    } else if (choice2 == "pierre") {
      var response = "J'ai choisi **pierre** ! <:IZBpierre:462292033277657109> Egalité !"
    } else {
      var response = "J'ai choisi **ciseaux** ! :scissors: Tu as gagné !"
    }
    message.channel.send(response);
  } else if (choice == "ciseaux" || choice == "s") {
    var numb = Math.floor(Math.random() * 100);
    if (numb <= 50) {
      var choice2 = "papier";
    } else if (numb > 50) {
      var choice2 = "pierre";
    } else {
      var choice2 = "ciseaux";
    }
    if (choice2 == "pierre") {
      var response = "J'ai choisi **papier** ! :hand_splayed: Tu as gagné !"
    } else if (choice2 == "siceaux") {
      var response = "J'ai choisi **ciseaux** ! :scissors: Egalité !"
    } else {
      var response = "J'ai choisi **pierre** ! <:IZBpierre:462292033277657109> J'ai gagné !"
    }
    message.channel.send(response);
  } else {
    message.channel.send(`<:IZBadmin:460849349019303936> *Vous avez mal effectué la commande.* \n\`.rps\` <pierre|papier|ciseaux>`);
  };
};
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };

  exports.help = {
    name: 'rps',
    description: 'Pierre, papier, ciseaux',
    usage: 'rps <pierre|papier|ciseaux>'
  }
