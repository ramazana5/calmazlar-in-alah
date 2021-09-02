const Discord = require('discord.js')
exports.run = function(client, message, args) {//== BEERCODE (discord.gg/ew3dpTu4Z5) BEERCODE ==\\
let davet = new Discord.MessageEmbed()
.setTitle("ZING")
.setDescription(`
**Beni Sunucuna Ekle ve Eğlenmeye Başla**

[≫ Bot Davet Etmek İçin Buraya Tıkla ≪](https://discord.com/oauth2/authorize?client_id=771017767192100884&permissions=8&scope=bot )

[≫ Destek sunucusu İçin Buraya Tıkla ≪](https://discord.gg/ydHTfU2625 )

[≫ Bota oy vermek  İçin Buraya Tıkla ≪](https://top.gg/bot/771017767192100884/vote )
`)
//== BEERCODE (discord.gg/ew3dpTu4Z5) BEERCODE ==\\
  return message.channel.send(davet)
  
};//== BEERCODE (discord.gg/ew3dpTu4Z5) BEERCODE ==\\
exports.conf = {
    enabled: true, 
    aliases: ["invite","inv"],
  };
  
  exports.help = {
    name: 'davet'
  }; 