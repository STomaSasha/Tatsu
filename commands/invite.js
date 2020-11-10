const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('INVITE')
            .setDescription('Clic sur **INVITE** pour ajouter le bot sur votre serveur.')
            .setColor('#0387f4')
            .setURL('https://discord.com/oauth2/authorize?client_id=774335422158733322&scope=bot&permissions=2146958847'))
    },
    name: 'invite',
    help: {
        description: 'Cette commande permet d\'inviter le bot sur son serveur.',
        syntax: '[nom de la commande]'
    }
}