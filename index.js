const Discord = require("discord.js");
const prefix = "!";
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
      msg.channel.send("connect 188.40.16.78:30686");
  }


  if (msg.member.hasPermission("ADMINISTRATOR")){
    if (msg.content.startsWith(prefix == "boot")){
        msg.channel.send("Le serveur vient de reboot, le staff vous souhaite un bon jeu !")
        .then(msg => {
          msg.delete({ timeout: 20000 /*time unitl delete in milliseconds*/});
                })
          .catch(/*Your Error handling if the Message isn't returned, sent, etc.*/);
    }
  }

  
})