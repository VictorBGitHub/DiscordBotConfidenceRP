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
      msg.channel.send("```connect 188.40.16.78:30686```");
  }

  if (msg.content == prefix + "stat"){
      msg.channel.send("en cours")
  }

  if (msg.cotent == prefix + "help"){
    msg.channel.send
    ("!ip")
    ("!test1")
  }
  
})