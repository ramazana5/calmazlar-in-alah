const Discord = require('discord.js');
exports.run = async (client, message, args) => {
if(message.mentions.users.array().length<3) return message.channel.send("Lütfen en az 3 kişi etiketleyin.");
    var liste = message.mentions.users.array();
    liste.push(message.author);
    var skisi = liste[Math.floor(Math.random()*message.mentions.users.array().length)];
    var ckisi = liste[Math.floor(Math.random()*message.mentions.users.array().length)];
    if(skisi.id == ckisi.id) var ckisi = liste[Math.floor(Math.random()*message.mentions.users.array().length)];
    if(skisi.id == ckisi.id) var ckisi = liste[Math.floor(Math.random()*message.mentions.users.array().length)];
    if(skisi.id == ckisi.id) var ckisi = liste[Math.floor(Math.random()*message.mentions.users.array().length)];
    message.channel.send(new Discord.MessageEmbed()
    .setTitle("Şişe çevirmece")
    .setDescription("Şişe çevriliyor...")
    .setImage("https://galeri14.uludagsozluk.com/827/sise-cevirmece_1293387.gif")).then(message=>{
        setTimeout(function(){
            message.edit(new Discord.MessageEmbed()
            .setTitle("Şişe çevirmece")
            .setDescription(`${skisi} ${ckisi}'e soruyor`))
        },3500)
    });
}
exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
}
exports.help = {
    name: 'şişe-çevir'
}