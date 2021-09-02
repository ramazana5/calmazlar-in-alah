const Discord = require('discord.js');
exports.run = async (client, message, args) => {
var list = ["Yazı","Tura"];
        var snc = list[Math.floor(Math.random()*2)];
        message.channel.send(new Discord.MessageEmbed()
        .setTitle("Para atılıyor...")).then(message=>{
            setTimeout(function(){
                message.edit(new Discord.MessageEmbed()
                .setTitle(`Para atıldı **${snc}** çıktı!`)
                .setColor("RANDOM"))
            },3000)
        })
}
exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
}
exports.help = {
    name: 'yazı-tura'
}