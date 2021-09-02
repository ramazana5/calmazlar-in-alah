const Discord = require('discord.js');
const data = require('quick.db')

exports.run = async (client, message, args) => {//CAN#1468
  
  let prefix = '//'// botun prefixi
  let sahip = '445945772815417345'// senin idn
  
if(!args[0]) return message.channel.send(`Premium Almak için https://discord.gg/ydHTfU2625`)


  
  
  if(args[0] === 'ver') {
  if(message.author.id !== sahip) return;
    
  if(!args[1]) return message.channel.send(`Bir sunucunun ID (kimlik) numarasını girmeyi dene.`)
  let id = args[1]
  if(isNaN(id)) return message.channel.send(`Sadece sayı girebilirsin.`)
  
  if(id < 15) return message.channel.send(`Girdiğin rakam bir sunucunun ID (kimlik) numarası olmak için çok küçük.`)
  
  if(!client.guilds.cache.get(id)) return message.channel.send(`**${id}** sunucusunu bulamıyorum.`)
  let açıkmı = await data.fetch(`premium.${id}`)
  if(açıkmı) return message.channel.send(`**${id}** sunucusu için zaten premium aktif.`)
    
  data.set(`premium.${id}`, 'açık')
  message.channel.send(`${client.guilds.cache.get(id).name} isimli sunucu için **PREMİUM** aktif edildi!`)
    
  let owner = client.guilds.cache.get(id).owner;
  owner.send(`Merhaba **${owner.user.username}**! ${message.author.tag} isimli kişi **${client.guilds.cache.get(id).name}** isimli sunucun için premium'u aktif etti.
Doya doya kullan!`)
    
  }
  
  if(args[0] === 'al') {
  if(message.author.id !== sahip) return;
    
  if(!args[1]) return message.channel.send(`Bir sunucunun ID (kimlik) numarasını girmeyi dene.`)
  let id = args[1]
  if(isNaN(id)) return message.channel.send(`Sadece sayı girebilirsin.`)
  
  if(id < 15) return message.channel.send(`Girdiğin rakam bir sunucunun ID (kimlik) numarası olmak için çok küçük.`)
    
  if(!client.guilds.cache.get(id)) return message.channel.send(`**${id}** sunucusunu bulamıyorum.`)
  let açıkmı = await data.fetch(`premium.${id}`)
  if(!açıkmı) return message.channel.send(`**${id}** sunucusu için zaten premium aktif değil.`)
    
  data.delete(`premium.${id}`)
  message.channel.send(`${client.guilds.cache.get(id).name} isimli sunucu için **PREMİUM** de-aktif edildi!`)
    
  let owner = client.guilds.cache.get(id).owner;
  owner.send(`Merhaba **${owner.user.username}**! ${message.author.tag} isimli ki��i **${client.guilds.cache.get(id).name}** isimli sunucun için premium'u kapattı.`)
    
  }

  
  
  
  
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'premium'
};// codare