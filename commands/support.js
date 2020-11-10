const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('SUPPORT')
            .setDescription('Clic sur **SUPPORT** pour rejoindre le support du bot.')
            .setColor('#0387f4')
            .setURL('https://discord.gg/GAyCTUJKy2'))
    },
    name: 'support',
    help: {
        description: 'Cette commande permet de rejoindre le support du bot.',
        syntax: '[nom de la commande]'
    }
}