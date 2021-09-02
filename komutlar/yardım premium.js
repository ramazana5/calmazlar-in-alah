const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

const yardım = new Discord.MessageEmbed()
.setColor('BLUE')
.setAuthor(`premium`)
.setDescription(`

🧧 **=**  \`\`//çoklu-sil\`\` → **mesaj sil örnek = https://l24.im/npQC**
🧧 **=**  \`\`//toplu-cek\`\` → **bütün üyeleri bir odada toplarsınız**
🧧 **=**  \`\`//nsfw\`\` → **nsfw komutlarını gösterir**
🧧 **=**  \`\`//sunucu-kur\`\` → **sunucu tüm kanaları siler yeniden oluşturur**
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
  aliases: ['yardım-premium',"y-premium"], 
  permLevel: 0
};

exports.help = {
  name: "y-premium",
  description: 'Bizim yaptığımız bir yardım kodu.',
  usage: 'y-premium'
};