  const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

const yardım = new Discord.MessageEmbed()
.setColor('BLUE')
.setAuthor(`🀄`)
.setDescription(` 
:droplet: **=**  \`//isim-degiştir \` → **üye ismini degiştire bilirsiniz**

:droplet: **=**  \`//roles\` → **rolün kaçkişi kulandıgına bakarsınız**

:droplet: **=**  \`//rol-ver-al \` → **rol verip alam yardım listesini acar** 

:droplet: **=**  \`//yavas-mod \` → **yavaş mod açarsınız** 

:droplet: **=**  \`//sohbet-kapat \` → **yazdıgınız kapalı everyone kapatır** 

:droplet: **=**  \`//sohbet-aç \` → **yazdıgınız kapalı everyone açar** 

:droplet: **=**  \`//kullanıcı-bilgim \` → **kulanıcı hakında bilgi verir** 

:droplet: **=**  \`//gel \` → **arkdaşını yanına cekme komutu onaylamalı** 

:droplet: **=**  \`//tdk  \` → **sözelükte araştırma yaparsın**            :new:

:droplet: **=**  \`//yetkilerim \` → ** yazan kişinin sunucuda yetkilerini gösterir** 
`)
.setImage("https://cdn.discordapp.com/attachments/740871896614043669/748878433840398367/Baslksz-1.png")
.setThumbnail(message.author.avatarURL())
.setFooter('Bu komutu kullanan kullanıcı ' + message.author.tag, message.author.avatarURL())
.setTimestamp()
message.channel.send(yardım)


};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['moderasyon',"moderasyon"], 
  permLevel: 0
};

exports.help = {
  name: "moderasyon",
  description: 'Bizim yaptığımız bir yardım kodu.',
  usage: 'moderasyon'
};


//eglence yardım komutu-