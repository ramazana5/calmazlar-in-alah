const Discord = require ("discord.js");
const randomPuppy = require('random-puppy');

exports.run = (client, message, args) => {
    return message.channel.send("**Her yemekten sonra yak bi cigara aga**").then(async msg => {
                        setTimeout(() => {
                            msg.edit('');
                        }, 500);
                        setTimeout(() => {
                            msg.edit(' ☁ ');
                        }, 700);
                        setTimeout(() => {
                            msg.edit(' ☁☁ ');
                        }, 900);
                        setTimeout(() => {
                            msg.edit(' ☁☁☁ ');
                        }, 1000);
                        setTimeout(() => {
                            msg.edit(' ☁☁☁');
                        }, 1100);
                        setTimeout(() => {
                            msg.edit(' ☁☁');
                        }, 1200);
                        setTimeout(() => {
                            msg.edit(' ☁');
                        }, 1300);
                        setTimeout(() => {
                            msg.delete(`**Sigara Bitti :( **`);
                        }, 6000);
                    });
                };

                exports.conf = {
                  enabled: true,
                  guildOnly: false,
                  aliases: ['YEDEK KOMUT1', 'YEDEK KOMUT2'],
                  permLevel: "0"
                };

                exports.help = {
                  name: "sigarayak",
                  description: "sigara içersiniz",
                  usage: "sigara"
                };