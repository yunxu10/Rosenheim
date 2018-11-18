const Discord = require('discord.js')
const client = new Discord.Client()
const prefix = "+";

client.on('ready', () => {
    // Set bot status to: "Playing with JavaScript"
    client.user.setActivity("over the guild", {type: "WATCHING"})
    console.log('I am ready!');

    // Alternatively, you can set the activity to any of the following:
    // PLAYING, STREAMING, LISTENING, WATCHING
    // For example:
    // client.user.setActivity("TV", {type: "WATCHING"})
})

client.on("message", (message) => {
  // Exit and stop if it's not there
  if (!message.content.startsWith(prefix)) return;
 
  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send(new Date().getTime() - message.createdTimestamp + "`ms` pong~ pong~ pong!");
  } else
   if (message.content.startsWith(prefix + "invite")) {
    message.channel.send("`Rosenheim` server invite link: https://discord.gg/8HSBMYQ");
  }
   if (message.content.startsWith(prefix + "belew" )) {
    message.channel.send("Tama! Belew talaga si Sensei~");
  }
 
});

client.login(process.env.BOT_TOKEN);
