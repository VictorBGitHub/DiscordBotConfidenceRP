const Discord = require("discord.js");
const prefix = ".";
const client = new Discord.Client();
const configs = require("./configs.json");
const fivereborn = require('fivereborn-query');
client.config = configs;

client.login(configs.token)
  .then(
    () => {
      console.log("Bot démarré");
      console.log("Collecte d'informations en cours... ");
    },
    () => {
      client.destroy();
      console.log("Bot détruit!");
    });


function activity() {
  setTimeout(() => {
    fivereborn.query(configs.serverInfo[0], configs.serverInfo[1], (err, data) => {
      if (err) {
        console.log(err);
      } else {
        client.user.setActivity("CONFIDENCE RP " + data.clients + "/" + data.maxclients, { type: configs.activityType });
      }
    });
    activity();
  }, 10000);
}
activity();


client.on("message", msg => {  
	
  if (msg.content == prefix + "ip"){
      msg.channel.send("```connect confidenceroleplayv2.capriceserv.com:30686```");
  }



  if(msg.member.hasPermission("ADMINISTRATOR")){
    if(msg.content.startsWith(prefix + "ban")){
      let mention = msg.mentions.members.first();

      if(mention == undefined){
        msg.reply("Membre mal mentionné");
      }
      else{
          if(mention.bannable){
            mention.ban();
            msg.channel.send(mention.displayName + " à été banni !");
          }
          else{
            msg.reply("Impossbile de bannir ce membre");
        }
      }
    }

    else if (msg.content.startsWith(prefix + "kick")){
      let mention = msg.mentions.members.first();

      if(mention == undefined){
        msg.reply("Membre mal mentionné ! ");

      }
      else {
        if(mention.kickable){
          mention.kick();
          msg.channel.send(mention.displayName + "à été kick avec succès");
        }
        else {
          msg.reply("Impossible de kick ce membre");
        }
      }
    } 
  }

  if (msg.member.hasPermission("ADMINISTRATOR")){
    if(msg.content.startsWith(prefix + "boot")){
      msg.delete();
      msg.channel.send("@everyone Le serveur vient de reboot");
        }
      }



  if (msg.member.hasPermission("ADMINISTRATOR")){
      if(msg.content.startsWith(prefix + "clear")){
          let args = msg.content.split(" ");

          if(args[1] == undefined){
              msg.reply("Nombre de messages non défini")

            
          }

          else {
              let number = parseInt(args[1]);

              if(isNaN(number)){
                  msg.reply("Nombre de messages non défini");

              }
              else {
                  msg.channel.bulkDelete(number).then(msg => {
                      console.log("Suppression de " +msg.size+ " messages réussi !");
                  }).catch(err => {
                    console.log("Erreur de clear : " + err);
                  });
                  
              }
          }
          msg.channel.send("Les messages ont été supprimées avec succès");
      }
  }
})
