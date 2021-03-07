module.exports = {
    name: 'deathage',
    aliases: ['da'],
    permissions: [],
    description: 'Calculates your death age!',
    async execute(client, message) {
        const age = Math.floor(Math.random() * 100)

        message.channel.send(`You will die at \`${age}\` year(s) :p`) //what is this for \` ?
    }
}