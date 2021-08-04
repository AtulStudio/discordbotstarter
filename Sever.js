# discordbotstarter
This can help start your discord bot


let discord = require ("discord.js")
let client = new discord.client()

client.on("message", message => {
  if(message . content === "ping"){
message.channel.send("pong")
    let embed = new discord.messageEmbed()
    .settitel ("This is embed titel")
    .setdescription("this is embed descrption")
    .setcolor("Blue")
    .setfooter("this is embed footer")
    message.channel.send(embed)
}}
  client.login("Your bot token")
