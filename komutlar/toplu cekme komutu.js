const Discord = require("discord.js");
const db = require("quick.db");
exports.run = async (client, message, args) => {
          let açıkmı = await db.fetch(`premium.${message.guild.id}`)
  if(açıkmı) {

// premium açıksa yapılack işlemler buraya

} else { return message.channel.send(`${message.author}, bu komut premium bir komuttur. Bu sunucu da premium bulunmamakta.`) }
  if (!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  let c = args[0];
  if (!c) return message.channel.send("\`Kanal ID'si Gir \`");
  const voiceChannels = message.guild.channels.cache.filter(
    c => c.type === "voice"
  );
  let k = 0;
  for (const [id, voiceChannel] of voiceChannels) {
    for (const [memberID, member] of voiceChannel.members) {
      member.voice.setChannel(c);
      console.log(member);
      k++;
    }
    
  }
  message.channel.send(new Discord.MessageEmbed().setColor("RANDOM").setDescription(`Taşıdığım Kişi Sayısı: ${k}`))
};

exports.conf = {
  enabled: false,
  aliases: ["toplu-cek"],
  permLevel: 0
};

exports.help = {
  name: "taşı",
  description: "",
  usage: "taşı"
};



//sunucudaki herkezi bir odaya toplar