const Discord = require("discord.js");
const client = new Discord.Client();
client.on('message', message => {
    if (message.content === '6') {
          let count = 0;
          let ecount = 0;
          for(let x = 0; x < 1000; x++) {
            message.channel.send(`6`)
              .then(m => {
                count++;
              })
              
            }
          }
    });
    
    

	
	
client.login("NDc4MTU3MTUwNzc1MTQ4NTQ1.DqrHbQ.T7Kt09BSmSyxm-EFJ6GMyV90B_I")
